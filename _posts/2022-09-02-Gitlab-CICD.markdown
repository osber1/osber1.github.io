---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_gitlab_cicd
title: "Setting up Gitlab CICD"

# post specific
# if not specified, .name will be used from _data/owner.yml
author: Osvaldas
# multiple category is not supported
category: gitlab
# multiple tag entries are possible
tags: [gitlab, cicd]
# thumbnail image for post
img: ":java.png"
# disable comments on this page
#comments_disable: true

# publish date
date: 2022-09-02 00:00:00 +0300

# seo
# if not specified, date will be used.
#meta_modify_date: 2022-05-15 00:00:00 +0300
# check the meta_common_description in _data/lang/[language].yml
#meta_description: ""

# optional
# if you enabled image_viewer_posts you don't need to enable this. This is only if image_viewer_posts = false
#image_viewer_on: true
# if you enabled image_lazy_loader_posts you don't need to enable this. This is only if image_lazy_loader_posts = false
#image_lazy_loader_on: true
# exclude from on site search
#on_site_search_exclude: true
# exclude from search engines
#search_engine_exclude: true
# to disable this page, simply set published: false or delete this file
#published: false
---
<!-- outline-start -->

Gitlab CICD examples.

<!-- outline-end -->

### Gradle

```yaml
variables:
  GRADLE_OPTS: "-Dorg.gradle.daemon=false"
  DOCKER_HOST: "tcp://docker:2375"
  DOCKER_TLS_CERTDIR: ""
  DOCKER_DRIVER: overlay2
  VERSION: 1.0-SNAPSHOT
  
before_script:
  - export GRADLE_USER_HOME=`pwd`/.gradle

stages:
  - build
  - test
  - publish
  - deploy

build:
  image: openjdk:14-alpine
  stage: build
  script:
    - ./gradlew build -x test
  artifacts:
    paths:
      - build/libs/

test:
  image: openjdk:14-alpine
  stage: test
  services:
    - docker:dind
  script:
    - ./gradlew test
  artifacts:
    when: always
    paths:
      - build/reports/tests/
    reports:
      junit:
        - build/test-results/test/*.xml

publish:
  stage: publish
  image: docker:latest
  services:
  - docker:dind
  script:
    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
    - docker build -t registry.gitlab.com/osber1/loans-app:${VERSION} --build-arg VERSION=${VERSION} .
    - docker push registry.gitlab.com/osber1/loans-app:${VERSION}
  rules:
    - if: '$CI_COMMIT_REF_NAME == "master"'

pages:
  stage: publish
  script:
    - mkdir public
    - mv build/reports/tests/test/* public/
  artifacts:
    paths:
      - public

deploy:
  stage: deploy
  script:
    - echo "Deploying application..."
    - echo "Application successfully deployed."
```

### Maven

#### .m2/settings.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">
    <servers>
        <server>
            <id>gitlab-maven</id>
            <configuration>
                <httpHeaders>
                    <property>
                        <name>Job-Token</name>
                        <value>${env.CI_JOB_TOKEN}</value>
                    </property>
                </httpHeaders>
            </configuration>
        </server>
    </servers>

    <profiles>
        <profile>
            <id>gitlab</id>
            <repositories>
                <repository>
                    <id>gitlab-maven</id>
                    <url>https://gitlab.com/api/v4/groups/0000000/-/packages/maven</url>
                </repository>
            </repositories>
        </profile>
    </profiles>

    <activeProfiles>
        <activeProfile>gitlab</activeProfile>
    </activeProfiles>
</settings>
```

#### Dockerfile helm-kubectl-aws-docker

```
FROM amazon/aws-cli:2.2.7

ENV K8S_VERSION=v1.20.4
ENV HELM_VERSION=v3.6.0

RUN yum install -y tar gzip \
 && curl -L https://storage.googleapis.com/kubernetes-release/release/${K8S_VERSION}/bin/linux/amd64/kubectl -o /usr/local/bin/kubectl \
 && chmod +x /usr/local/bin/kubectl \
 && curl -L https://get.helm.sh/helm-${HELM_VERSION}-linux-amd64.tar.gz | tar xz && mv linux-amd64/helm /bin/helm && rm -rf linux-amd64
 
ENTRYPOINT [ "" ]
```

#### Dockerfile openssh-client

```
FROM alpine

RUN apk add openssh-client

ENTRYPOINT [ "" ]
```

#### Dockerfile aws-docker

```
FROM amazon/aws-cli

RUN amazon-linux-extras install docker

ENTRYPOINT [ "" ]
```

#### gitlab-ci.yml

```yaml
variables:
  MAVEN_CLI_OPTS: "-s .m2/settings.xml --batch-mode"
  MAVEN_OPTS: "-Dmaven.repo.local=.m2/repository"
  DOCKER_HOST: tcp://docker:2375
  DOCKER_TLS_CERTDIR: ""
  DOCKER_REPO: application
  VERSION: 1.0-SNAPSHOT

stages:
  - build
  - publish
  - deploy

build:
  stage: build
  image: maven:3.6.3-jdk-8
  cache:
    key: maven-local-repo
    paths:
      - .m2/repository
  script:
    - mvn $MAVEN_CLI_OPTS deploy --update-snapshots
  artifacts:
    paths:
      - application/target/*.jar
  only:
    - master

publish/ecr:
  stage: publish
  image:
    name: osber1/aws-docker
  services:
    - docker:19.03.12-dind
  script:
    - aws ecr get-login-password --region $AWS_DEFAULT_REGION | docker login --username AWS --password-stdin $DOCKER_REGISTRY
    - docker build -f Dockerfile -t $DOCKER_REGISTRY/$DOCKER_REPO:$VERSION --build-arg VERSION=${VERSION} application/target
    - docker push $DOCKER_REGISTRY/$DOCKER_REPO:$VERSION
  dependencies:
    - build
  only:
    - master

deploy/test:
  stage: deploy
  image: osber1/helm-kubectl-aws-docker
  dependencies: [ ]
  before_script:
    - mkdir ~/.aws ~/.kube
    - echo "$AWS_CREDENTIALS" | base64 -d > ~/.aws/credentials
    - echo "$TEST_KUBE_CONFIG" | base64 -d > ~/.kube/config
  script:
    - kubectl -n test rollout restart deployment/application
  environment:
    name: test
  only:
    - master

deploy/prod:
  stage: deploy
  image: osber1/openssh-client
  dependencies: [ ] # don't need artifacts
  before_script:
    - eval $(ssh-agent -s)
    - echo "$KEY" | tr -d '\r' | ssh-add -
    - mkdir -p ~/.ssh
    - chmod 700 ~/.ssh
  script:
    - ssh -o StrictHostKeyChecking=no $USER@$IP "bash update.sh"
  rules:
    - if: '$CI_COMMIT_TAG =~ /^.+RELEASE$/'
```
