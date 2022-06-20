---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_spring_jpa
title: "Spring JPA"

# post specific
# if not specified, .name will be used from _data/owner.yml
author: Osvaldas
# multiple category is not supported
category: spring
# multiple tag entries are possible
tags: [java, spring, jpa]
# thumbnail image for post
img: ":java.png"
# disable comments on this page
#comments_disable: true

# publish date
date: 2022-07-11 00:00:00 +0300

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

Useful code snippets when using Spring JPA

<!-- outline-end -->

More Spring JPA annotations https://dzone.com/articles/all-jpa-annotations-mapping-annotations

### Soft delete (add private boolean isDeleted in a class)

```java
@SQLDelete(sql = "UPDATE Table_name SET is_deleted = true WHERE id = ?”)  
@Where(clause = "is_deleted = false")
```

### Show object directly in other object class

```java	
@Embeddable // add this to class you want to show in another class.  
@Embedded // add this to class property (private Class class).
```

### Class example

```java
@Table(name = "Table_name")  
public class Table  
  
@Column(name = "column_name", updatable = false, length = 10000, columnDefinition = "text")  
private String column;  
  
@NotNull  
@UpdateTimestamp  
@CreationTimestamp  
private LocalDateTime timestamp;  
  
@Id  
@GeneratedValue(strategy=GenerationType.IDENTITY)  
private int id;  
  
@Enumerated(value = EnumType.STRING)  
private Enum_Class object;  
```
  
### If making any modifications to database, use annotations (if updating, creating or deleting)

```java
@Modifying  
@Transactional
```

### Build queries using Spring

```java
List<Class> findByParam(String param);

List<Class> findByParamAndParam1(String param, int param1);

List<Class> countByParam(String param);

List<Class> findByParamOrderByIdDesc(String param);

List<Class> deleteByParam(String param);

@Query("FROM CLASS_NAME WHERE CLASS_PARAM = :param AND CLASS_PARAM1 = :param1")

List<Class> findByParam(String param, String param1);

@Query("SELECT c FROM CLASS_NAME c WHERE CLASS_PARAM LIKE ?1")

List<Class> findByParam(String param);

@Query(value = "SELECT * FROM CLASS_NAME c WHERE CLASS_PARAM LIKE ?1", nativeQuery = true)

List<Class> findByParam(String param);
```

### One To One

mappedBy is written in non owning side table (that table doesn't have a column with mapped object id)

#### Uni-directional

```java
public class Class {
  
  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "column name in other database")
  private AnotherClass anotherClass;
}
```

#### Bi-directional

```java
public class AnotherClass {

  @OneToOne(mappedBy="anotherClass" (name of variable in a class - private AnotherClass anotherClass), cascade = CascadeType.All)
  private Class class;
}
```

### One To Many MySQL

```java
public class Class {

  @OneToMany(mappedBy = "class", cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
  private List<AnotherClass> list;
}

public class AnotherClass {

  @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
  @JoinColumn(name = "Class_id")
  private Class class;
}
```

### Many To Many MySQL

```java
public class Class {

  @ManyToMany  
  @JoinTable(  
    name = "Class_AnotherClass"    
    joinColumns = @JoinColumn(name = "class_id"),    
    inverseJoinColumns =  @JoinColumn(name = "anotherClass_id"))    
  private List<AnotherClass> list;
}

public class AnotherClass {

  @ManyToMany
  // second @JoinTable is not necessary  
  @JoinTable(
    name = "Class_AnotherClass"
    joinColumns = @JoinColumn(name = "anotherClass_id"),
    inverseJoinColumns =  @JoinColumn(name = "Class_id"))
  private List<Class> list;
}
```

### To generate *.sql DLL use:

```yaml
spring:
  jpa:  
    hibernate.ddl-auto: update
    show-sql: true
    properties:
      javax:
        persistence:
          schema-generation:
            create-source: metadata
            scripts:
              action: create
              create-target: create.sql
      hibernate:
        format_sql: true
```
