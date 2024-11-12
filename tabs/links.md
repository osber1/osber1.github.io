---
layout: links
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_links

# publish date (used for seo)
# if not specified, site.time will be used.
#date: 2022-03-03 12:32:00 +0000

# for override items in _data/lang/[language].yml
#title: My title
#button_name: "My button"
# for override side_and_top_nav_buttons in _data/conf/main.yml
#icon: "fa fa-bath"

# seo
# if not specified, date will be used.
#meta_modify_date: 2022-03-03 12:32:00 +0000
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


# you can always move this content to _data/content/ folder
# just create new file at _data/content/links/[language].yml and move content below.
###########################################################
#                Links Page Data
###########################################################
page_data:
  main:
    header: "Links"
    info: "All useful links in one place."

  # To change order of the Categories, simply change order. (you don't need to change list order.)
  category:
    - title: "Useful Links"
      type: id_usefullink
      color: "#A8A7A7"
    - title: "Java Links"
      type: id_java
      color: "#CC527A"
    - title: "Git Repositories"
      type: id_git
      color: "#E8175D"
    - title: "Handbooks and Cheatsheets"
      type: id_handbooks
      color: "#FFAAA6"
    - title: "Training Tools"
      type: id_training
      color: "#474747"
    - title: "Blogs"
      type: id_blogs
      color: "#363636"

  list:
    -
    # Useful Links
    - type: id_usefullink
      title: "Good Stuff"
      url: "https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/index"
      info: "Handy links"
    - type: id_usefullink
      title: "freemediaheckyeah"
      url: "https://fmhy.net"
      info: "The largest collection of free stuff on the internet!"
    - type: id_usefullink
      title: "30 Seconds of Code"
      url: "https://www.30secondsofcode.org"
      info: "Small code snippets."
    - type: id_usefullink
      title: "Learn X in Y minutes"
      url: "https://learnxinyminutes.com"
      info: "Small code snippets."
    - type: id_usefullink
      title: "Dev Hints"
      url: "https://devhints.io"
      info: "Short tutorials."
    - type: id_usefullink
      title: "Regex 101"
      url: "https://regex101.com"
      info: "Regex editor online."
    - type: id_usefullink
      title: "Git Cheat Sheet"
      url: "https://ndpsoftware.com/git-cheatsheet.html"
      info: "Interactive Git Cheat Sheet."
    - type: id_usefullink
      title: "Documentations"
      url: "https://devdocs.io"
      info: "Many different documentation in one place."
    - type: id_usefullink
      title: "Seach engine"
      url: "https://you.com"
      info: "Search engine for programmers."
    - type: id_usefullink
      title: "Tech talks"
      url: "https://dev.tube"
      info: "Tech talks for developers"
    - type: id_usefullink
      title: "Open Rewrite"
      url: "https://docs.openrewrite.org"
      info: "Automated Code Refactoring"
    - type: id_usefullink
      title: "OpenAPM"
      url: "https://openapm.io/landscape"
      info: "Open Application Performance Management tools"
    - type: id_usefullink
      title: "Kubetools"
      url: "https://collabnix.github.io/kubetools"
      info: "A Curated List of Kubernetes Tools"
    - type: id_usefullink
      title: "Development Containers"
      url: "https://containers.dev"
      info: "An open specification for enriching containers with development specific content and settings"
    - type: id_usefullink
      title: "OrbStack"
      url: "https://orbstack.dev"
      info: "OrbStack is the fast, light, and easy way to run Docker containers and Linux"
    - type: id_usefullink
      title: "Private File Sharing"
      url: "https://gist.github.com/Bad3r/f7f91a4b4cdd15f467f095fddd5108a7"
      info: "Private File Sharing Services"
      
    # Java Links
    - type: id_java
      title: "Java2s"
      url: "http://www.java2s.com/Tutorial/Java"
      info: "Java tutorials."
    - type: id_java
      title: "DZone"
      url: "https://dzone.com/refcardz/core-java?chapter=2"
      info: "Java tutorials."
    - type: id_java
      title: "Geeks for Geeks"
      url: "https://www.geeksforgeeks.org/java/?ref=leftbar"
      info: "Java tutorials."
    - type: id_java
      title: "Tutorials Point"
      url: "https://www.tutorialspoint.com/java"
      info: "Java tutorials."

    # Git Repositories
    - type: id_git
      title: "Java Interview Questions"
      url: "https://github.com/learning-zone/java-interview-questions"
      info: "Questions to prepare Java interview."
    - type: id_git
      title: "Coding Interview University"
      url: "https://github.com/jwasham/coding-interview-university"
      info: "Questions to prepare interview."
    - type: id_git
      title: "Awesome AWS"
      url: "https://github.com/ramitsurana/awesome-aws"
      info: "AWS tutorials."
    - type: id_git
      title: "Awesome Learning"
      url: "https://github.com/ramitsurana/awesome-learning"
      info: "Many different tutorials."
    - type: id_git
      title: "Awesome Microservices"
      url: "https://github.com/ramitsurana/awesome-microservices"
      info: "Microservices tutorials."
    - type: id_git
      title: "Awesome Docker"
      url: "https://github.com/ramitsurana/awesome-docker"
      info: "Docker tutorials."
    - type: id_git
      title: "Awesome Kubernetes"
      url: "https://github.com/ramitsurana/awesome-kubernetes"
      info: "Kubernetes tutorials."
    - type: id_git
      title: "Awesome Java"
      url: "https://github.com/akullpp/awesome-java"
      info: "Java tutorials."
    - type: id_git
      title: "Data Structures and Algorithms"
      url: "https://github.com/FarheenB/Data-Structures-and-Algorithms"
      info: "Data Structures and Algorithms tutorials."
    - type: id_git
      title: "Spring 4.2 Cert Notes"
      url: "https://github.com/vojtechruz/spring-core-cert-notes-4.2"
      info: "Spring certificate tutorials."
      
    # Handbooks and Cheatsheets
    - type: id_handbooks
      title: "Awesome Cheatsheets"
      url: "https://github.com/LeCoupa/awesome-cheatsheets"
      info: "Many different cheat sheets."
    - type: id_handbooks
      title: "Docker Handbook"
      url: "https://www.freecodecamp.org/news/the-docker-handbook"
      info: "Handbook for Docker."
    - type: id_handbooks
      title: "Kubernetes Handbook"
      url: "https://www.freecodecamp.org/news/how-to-become-a-certified-kubernetes-application-developer"
      info: "Handbook for Kubernetes."
    - type: id_handbooks
      title: "Nginx Handbook"
      url: "https://www.freecodecamp.org/news/the-nginx-handbook"
      info: "Handbook for Nginx."
    - type: id_handbooks
      title: "Java Best Practices"
      url: "https://github.com/in28minutes/java-best-practices"
      info: "Handbook for Java."
    - type: id_handbooks
      title: "Linux Handbook"
      url: "https://www.freecodecamp.org/news/the-linux-commands-handbook"
      info: "Handbook for Linux."
    - type: id_handbooks
      title: "Cheatsheets"
      url: "https://sweworld.net/cheatsheets"
      info: "Few useful cheat sheets."
    - type: id_handbooks
      title: "Cheatsheets"
      url: "https://cheatsheets.zip"
      info: "Useful cheat sheets."
      
    # Training Tools
    - type: id_training
      title: "Hacksplaining"
      url: "https://www.hacksplaining.com"
      info: "Codining games."
    - type: id_training
      title: "Codingame"
      url: "https://www.codingame.com"
      info: "Codining games."
    - type: id_training
      title: "Codesignal"
      url: "https://app.codesignal.com"
      info: "Codining games."
    - type: id_training
      title: "Hackerrank"
      url: "https://www.hackerrank.com"
      info: "Codining games."
    - type: id_training
      title: "Coderbyte"
      url: "https://coderbyte.com"
      info: "Codining games."
    - type: id_training
      title: "Projecteuler"
      url: "https://projecteuler.net"
      info: "Codining games."
    - type: id_training
      title: "Leetcode"
      url: "https://leetcode.com"
      info: "Codining games."
    - type: id_training
      title: "Codewars"
      url: "https://www.codewars.com"
      info: "Codining games."
    - type: id_training
      title: "Codegym"
      url: "https://codegym.cc"
      info: "Codining games."
      
    # Blogs
    - type: id_blogs
      title: "Martin Fowler"
      url: "https://martinfowler.com"
      info: "Martin Fowler blog."
    - type: id_blogs
      title: "Cloud Native Computing Foundation"
      url: "https://www.cncf.io"
      info: "Cloud Native Computing Foundation blog."
    - type: id_blogs
      title: "Baeldung"
      url: "https://www.baeldung.com"
      info: "Baeldung blog."
    - type: id_blogs
      title: "Piotr's TechBlog"
      url: "https://piotrminkowski.com"
      info: "Piotr's TechBlog blog."
    - type: id_blogs
      title: "JRebel"
      url: "https://www.jrebel.com/blog"
      info: "JRebel blog."
    - type: id_blogs
      title: "Spring How"
      url: "https://springhow.com"
      info: "Spring How blog."
    - type: id_blogs
      title: "Thorben Janssen"
      url: "https://thorben-janssen.com/"
      info: "Thorben Janssen blog."
    - type: id_blogs
      title: "Vlad Mihalcea"
      url: "https://vladmihalcea.com/blog/"
      info: "Vlad Mihalcea blog."
    - type: id_blogs
      title: "Refactoring Guru"
      url: "https://refactoring.guru/"
      info: "Refactoring Guru blog."
---
