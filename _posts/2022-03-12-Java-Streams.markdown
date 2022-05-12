---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_java_steams
title: "Java Streams"

# post specific
# if not specified, .name will be used from _data/owner.yml
author: Osvaldas
# multiple category is not supported
category: java
# multiple tag entries are possible
tags: [java, streams]
# thumbnail image for post
img: ":java.png"
# disable comments on this page
#comments_disable: true

# publish date
date: 2022-03-12 00:00:00 +0300

# seo
# if not specified, date will be used.
#meta_modify_date: 2022-03-12 00:00:00 +0300
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

Useful code snippets when using Java Streams

<!-- outline-end -->

### Compare

{% highlight java %}
list.stream()
    .sorted(Comparator.comparing(ObjectClass::method))
    .forEach(System.out::println);

map.entrySet().stream()
    .sorted(Map.Entry.comparingByKey())
    .forEach(System.out::println);

map.entrySet().stream()
    .sorted(Map.Entry.comparingByKey(Comparator.comparing(ObjectClass::method)))
    .forEach(System.out::println);
{% endhighlight %}


### Filtering

{% highlight java %}
List<Person> females = people.stream()
    .filter(person -> Gender.FEMALE == person.getGender())
    .collect(Collectors.toList());
{% endhighlight %}

### Sorting

{% highlight java %}
List<Person> sorted = people.stream()
    .sorted(Comparator.comparing(Person::getAge).thenComparing(Person::getGender).reversed())
    .collect(Collectors.toList());
{% endhighlight %}

### Matching

{% highlight java %}
boolean allMatch = people.stream()
    .allMatch(person -> person.getAge() > 8);

boolean anyMatch = people.stream()
    .anyMatch(person -> person.getAge() > 121);

boolean noneMatch = people.stream()
    .noneMatch(person -> person.getName().equals("Antonio"));
{% endhighlight %}

### MIN or MAX

{% highlight java %}
people.stream()
    .max(Comparator.comparing(Person::getAge));
    .ifPresent(System.out::println);

people.stream()
    .min(Comparator.comparing(Person::getAge));
	.ifPresent(System.out::println);
{% endhighlight %}

### Grouping

{% highlight java %}
Map<Gender, List<Person>> groupByGender = people.stream()
    .collect(Collectors.groupingBy(Person::getGender));

groupByGender.forEach((gender, people1) -> {
        System.out.println(gender);
        people1.forEach(System.out::println);
        System.out.println();
    });
{% endhighlight %}

### Filter by gender, and then get the oldest female name

{% highlight java %}
Optional<String> oldestFemaleAge = people.stream()
    .filter(person -> Gender.FEMALE == person.getGender())
    .max(Comparator.comparing(Person::getAge))
    .map(Person::getName);
{% endhighlight %}

### Print group

{% highlight java %}
ArrayList<String> names = new ArrayList<>();
names.add("Labas");
names.add("Vakaras");

Map<String, Long> counting = names.stream().
    collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));

counting.forEach((name, count) -> System.out.println(name + " > " + count));
{% endhighlight %}

### Reduce

{% highlight java %}
Integer sum = numbersList.stream()
    .map(i -> i)
    .reduce(0, (a, b) -> a + b);

Integer sum = numbersList.stream()
    .reduce(Integer::sum);
{% endhighlight %}
