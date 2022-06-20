---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_setup_pc
title: "Setting Up New Computer"

# post specific
# if not specified, .name will be used from _data/owner.yml
author: Osvaldas
# multiple category is not supported
category: setup
# multiple tag entries are possible
tags: [setup]
# thumbnail image for post
img: ":java.png"
# disable comments on this page
#comments_disable: true

# publish date
date: 2022-08-11 00:00:00 +0300

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

Useful commands when setting up new computer.

<!-- outline-end -->

### Programs to Install

1. Postman

2. Intellij IDEA

3. Jenv

4. Docker

5. Minicube

### Script

```console
sudo apt install openjdk-17-jre-headless -y
sudo apt install openjdk-11-jdk-headless -y

sudo apt install git -y

git clone https://github.com/jenv/jenv.git ~/.jenv
echo 'export PATH="$HOME/.jenv/bin:$PATH"' >> ~/.bashrc 
echo 'eval "$(jenv init -)"' >> ~/.bashrc 
jenv add /usr/lib/jvm/java-11-openjdk-amd64/
jenv add /usr/lib/jvm/java-17-openjdk-amd64/

sudo apt-get install     ca-certificates     curl     gnupg     lsb-release -y

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

echo   "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-add-repository ppa:remmina-ppa-team/remmina-next

sudo apt-get update
sudo apt-get remove docker docker-engine docker.io containerd runc
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin docker-compose-plugin -y
sudo chmod 666 /var/run/docker.sock

sudo apt install docker-compose -y
```
