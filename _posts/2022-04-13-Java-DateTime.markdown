---
# multilingual page pair id, this must pair with translations of this page. (This name must be unique)
lng_pair: id_datetime
title: "Java DateTime"

# post specific
# if not specified, .name will be used from _data/owner.yml
author: Osvaldas
# multiple category is not supported
category: java
# multiple tag entries are possible
tags: [java, datetime]
# thumbnail image for post
img: ":java.png"
# disable comments on this page
#comments_disable: true

# publish date
date: 2022-04-13 00:00:00 +0300

# seo
# if not specified, date will be used.
#meta_modify_date: 2022-05-13 00:00:00 +0300
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

Useful code snippets when using Java DateTime

<!-- outline-end -->

### LocalDate

{% highlight java %}
LocalDate.ofYearDay(2018, 365);
LocalDate.ofEpochDay(1);
LocalDate.get(ChronoField.DAY_OF_MONTH);
LocalDate.minus(2, ChronoUnit.YEARS);
LocalDate.withYear(2019);
LocalDate.with(TemporalAdjusters.lastDayOfMonth());
LocalDate.with(TemporalAdjusters.dayOfWeekInMonth(1, DayOfWeek.FRIDAY));
LocalDate.atTime(23,30);
LocalDate.atStartOfDay();
{% endhighlight %}

### LocalTime

{% highlight java %}
LocalTime.get(ChronoField.CLOCK_HOUR_OF_DAY);
LocalTime.with(LocalTime.MIDNIGHT);
LocalTime.minus(2,ChronoUnit.HOURS);
LocalTime.with(ChronoField.HOUR_OF_DAY,22);
LocalTime.atDate(2012, 10, 10);
{% endhighlight %}

### LocalDateTime

{% highlight java %}
LocalDateTime.toLocalDate();
LocalDateTime.toLocalTime();
Duration.between(localDateTime, localDateTime1);
LocalDateTime.now(ZoneId.of("Europe/Vilnius"));
LocalDateTime.now(Clock.system(ZoneId.of("Europe/Vilnius")));
LocalDateTime.ofInstant(Instant.now(), ZoneId.systemDefault());
{% endhighlight %}

### Period

{% highlight java %}
Period period = localDate.until(localDate1);
Period period1 = Period.ofDays(10);
Period period3 = Period.between(localDate, localDate1);
{% endhighlight %}

### Duration

{% highlight java %}
long minutesDiff = localTime.until(localTime1, ChronoUnit.MINUTES);
Duration duration = Duration.between(localTime, localTime1);
Duration duration1 = Duration.ofHours(3);
{% endhighlight %}

### Instant

{% highlight java %}
Instant instant1 = Instant.ofEpochMilli(0);
Duration duration = Duration.between(instant,instant2);
{% endhighlight %}

### ZonedDateTime

{% highlight java %}
ZoneId.getAvailableZoneIds();
ZonedDateTime.now(ZoneId.of("Europe/Vilnius"));
ZonedDateTime.now(Clock.system(ZoneId.of("Europe/Vilnius")));
LocalDateTime.atZone(ZoneId.of("Europe/Vilnius"));
Instant.now().atZone(ZoneId.of("Europe/Vilnius"));
{% endhighlight %}

### Conversion: Date to LocalDate

{% highlight java %}
new Date().toInstant().atZone(ZoneId.of("Europe/Vilnius")).toLocalDate(); // to LocalDate
new Date().from(localDate.atTime(LocalTime.now()).atZone(ZoneId.systemDefault()).toInstant(); // to Date

java.sql.Date date2 = java.sql.Date.valueOf(localDate);
LocalDate localDate2 = date2.toLocalDate();
{% endhighlight %}

### DateTimeFormatter

{% highlight java %}
LocalDate.parse(date,DateTimeFormatter.ISO_LOCAL_DATE);
LocalDate.parse(date1, DateTimeFormatter.ofPattern("yyyy|MM|dd"));
LocalDate.format(dateTimeFormatter);

LocalTime.parse(time, DateTimeFormatter.ISO_TIME);
LocalTime.parse(time1, DateTimeFormatter.ofPattern("HH*mm"));
DateTimeFormatter.ofPattern("HH*mm*ss").format(localTime1);

LocalDateTime.parse(dateTime, DateTimeFormatter.ISO_DATE_TIME);
LocalDateTime.format(DateTimeFormatter.ofPattern("yyyy-MM-dd'abc'HH|mm|ss"));
{% endhighlight %}
