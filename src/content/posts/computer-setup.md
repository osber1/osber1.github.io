---
title: "Setting Up New Computer"
date: 2022-08-11
category: setup
tags: ["setup"]
summary: "Useful commands when setting up new computer."
---
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
