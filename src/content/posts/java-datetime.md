---
title: "Java DateTime"
date: 2022-04-13
category: java
tags: ["java", "datetime"]
summary: "Useful code snippets when using Java DateTime"
---
### LocalDate

```java
LocalDate.ofYearDay(2018, 365);
LocalDate.ofEpochDay(1);
LocalDate.get(ChronoField.DAY_OF_MONTH);
LocalDate.minus(2, ChronoUnit.YEARS);
LocalDate.withYear(2019);
LocalDate.with(TemporalAdjusters.lastDayOfMonth());
LocalDate.with(TemporalAdjusters.dayOfWeekInMonth(1, DayOfWeek.FRIDAY));
LocalDate.atTime(23,30);
LocalDate.atStartOfDay();
```

### LocalTime

```java
LocalTime.get(ChronoField.CLOCK_HOUR_OF_DAY);
LocalTime.with(LocalTime.MIDNIGHT);
LocalTime.minus(2,ChronoUnit.HOURS);
LocalTime.with(ChronoField.HOUR_OF_DAY,22);
LocalTime.atDate(2012, 10, 10);
```

### LocalDateTime

```java
LocalDateTime.toLocalDate();
LocalDateTime.toLocalTime();
Duration.between(localDateTime, localDateTime1);
LocalDateTime.now(ZoneId.of("Europe/Vilnius"));
LocalDateTime.now(Clock.system(ZoneId.of("Europe/Vilnius")));
LocalDateTime.ofInstant(Instant.now(), ZoneId.systemDefault());
```

### Period

```java
Period period = localDate.until(localDate1);
Period period1 = Period.ofDays(10);
Period period3 = Period.between(localDate, localDate1);
```

### Duration

```java
long minutesDiff = localTime.until(localTime1, ChronoUnit.MINUTES);
Duration duration = Duration.between(localTime, localTime1);
Duration duration1 = Duration.ofHours(3);
```

### Instant

```java
Instant instant1 = Instant.ofEpochMilli(0);
Duration duration = Duration.between(instant,instant2);
```

### ZonedDateTime

```java
ZoneId.getAvailableZoneIds();
ZonedDateTime.now(ZoneId.of("Europe/Vilnius"));
ZonedDateTime.now(Clock.system(ZoneId.of("Europe/Vilnius")));
LocalDateTime.atZone(ZoneId.of("Europe/Vilnius"));
Instant.now().atZone(ZoneId.of("Europe/Vilnius"));
```

### Conversion: Date to LocalDate

```java
new Date().toInstant().atZone(ZoneId.of("Europe/Vilnius")).toLocalDate(); // to LocalDate
new Date().from(localDate.atTime(LocalTime.now()).atZone(ZoneId.systemDefault()).toInstant(); // to Date

java.sql.Date date2 = java.sql.Date.valueOf(localDate);
LocalDate localDate2 = date2.toLocalDate();
```

### DateTimeFormatter

```java
LocalDate.parse(date,DateTimeFormatter.ISO_LOCAL_DATE);
LocalDate.parse(date1, DateTimeFormatter.ofPattern("yyyy|MM|dd"));
LocalDate.format(dateTimeFormatter);

LocalTime.parse(time, DateTimeFormatter.ISO_TIME);
LocalTime.parse(time1, DateTimeFormatter.ofPattern("HH*mm"));
DateTimeFormatter.ofPattern("HH*mm*ss").format(localTime1);

LocalDateTime.parse(dateTime, DateTimeFormatter.ISO_DATE_TIME);
LocalDateTime.format(DateTimeFormatter.ofPattern("yyyy-MM-dd'abc'HH|mm|ss"));
```
