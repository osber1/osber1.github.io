---
title: "Java Streams"
date: 2022-03-12
category: java
tags: ["java", "streams"]
summary: "Useful code snippets when using Java Streams"
---
### Compare

```java
map.entrySet().stream()
    .sorted(Map.Entry.comparingByKey())
    .forEach(System.out::println);

map.entrySet().stream()
    .sorted(Map.Entry.comparingByKey(Comparator.comparing(ObjectClass::method).thenComparing(Person::getGender).reversed()))
    .forEach(System.out::println);
```

### Grouping

```java
Map<Gender, List<Person>> groupByGender = people.stream()
    .collect(Collectors.groupingBy(Person::getGender));
```

### Print group

```java
ArrayList<String> names = new ArrayList<>();
names.add("Labas");
names.add("Vakaras");

Map<String, Long> counting = names.stream().
    collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));

counting.forEach((name, count) -> System.out.println(name + " > " + count));
```

### Reduce

```java
Integer sum = numbersList.stream()
    .map(i -> i)
    .reduce(0, (a, b) -> a + b);

Integer sum = numbersList.stream()
    .reduce(Integer::sum);
```
