---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_docker_1
title: "Docker examples"

# post specific
# if not specified, .name will be used from _data/owner.yml
author: Osvaldas
# multiple category is not supported
category: docker
# multiple tag entries are possible
tags: [docker, dockerfile, docker-compose]
# thumbnail image for post
img: ":java.png"
# disable comments on this page
#comments_disable: true

# publish date
date: 2022-09-01 00:00:00 +0300

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

Dockerfile and docker-compose.yml examples.

<!-- outline-end -->

### Dockerfile for Java application

```
FROM openjdk:17-jdk-alpine

ARG VERSION
LABEL VERSION=$VERSION
ADD application-${VERSION}.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar" ]
```

### database.env file

```
POSTGRES_USER=root
POSTGRES_PASSWORD=root
POSTGRES_DB=test_db
```

### docker-compose.yml with redis, postgres, pgadmin, maildev and rabbitmq

```yaml
version: '3.5'

services:
  redis:
    container_name: redis
    image: redis:alpine
    ports:
      - "6379:6379"
    networks:
      - postgres
    restart: unless-stopped

  postgres:
    container_name: postgres
    image: postgres:14.1-alpine
    environment:
      POSTGRES_USER: root
      POSTGRES_PASSWORD: root
      POSTGRES_DB: loans
      PGDATA: /data/postgres
    volumes:
      - postgres:/data/postgres
    ports:
      - "5432:5432"
    networks:
      - postgres
    restart: unless-stopped

  pgadmin:
    container_name: pgadmin
    image: dpage/pgadmin4
    environment:
      PGADMIN_DEFAULT_EMAIL: admin@admin.com
      PGADMIN_DEFAULT_PASSWORD: admin
    volumes:
      - pgadmin:/var/lib/pgadmin
    ports:
      - "5050:80"
    networks:
      - postgres
    restart: unless-stopped

  maildev:
    container_name: mail-service
    image: maildev/maildev
    ports:
      - "1080:1080"
      - "1025:1025"
    networks:
      - postgres
    restart: unless-stopped

  rabbitmq:
    image: rabbitmq:3.9.11-management-alpine
    container_name: rabbitmq
    environment:
      RABBITMQ_NODENAME: "rabbit@staticrabbit"
    extra_hosts:
      - "staticrabbit:127.0.0.1"
    volumes:
      - rabbitmq:/var/lib/rabbitmq
    ports:
      - "5672:5672"
      - "15672:15672"
    networks:
      - postgres
    restart: unless-stopped

networks:
  postgres:
    driver: bridge

volumes:
  postgres:
  pgadmin:
  rabbitmq:
```
