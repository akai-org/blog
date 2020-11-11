---
title: Wprowadzenie do frameworku MyBatis
date: "2020-11-11T18:54:00.169Z"
template: "post"
draft: false
slug: "/posts/mybatis/"
category: "Back-end"
tags:
  - "MyBatis"
  - "Back-end"
  - "Spring"
  - "Java"
description: "Artykuł wprowadzający do frameworku MyBatis"
---
![mybatis_photo_1](/media/mybatis-logo.jpg)
### Czym jest MyBatis?
MyBatis to framework Javy wykorzystywany do komunikacji z bazą danych. Dzięki niemu można w łatwy i czytelny sposób tworzyć zaawansowane zapytania SQL. MyBatis-Spring to biblioteka pozwalająca na prostą integrację najpopularniejszego frameworku Javy - Springa z MyBatisem. I to właśnie na połączeniu obu tych frameworków skupimy się w tym artykule.

### Jak dołączyć framework MyBatis do swojego projektu w Springu
Najprostszym sposobem na dołączenie frameworku MyBatis do swojego projektu w Springu jest wybranie jego zależności podczas inicjalizacji za pomocą Spring Boota. Dzięki temu w naszym projekcie przy użyciu np. Mavena w pliku `pom.xml` zostanie dodana następująca zależność:

**pom.xml**
```xml
<dependency>
            <groupId>org.mybatis.spring.boot</groupId>
            <artifactId>mybatis-spring-boot-starter</artifactId>
            <version>2.1.3</version>
 </dependency>
```


Następnie w pliku `application.properties` należy dodać odpowiednią właściwość `mybatis.mapper-locations`. Dzięki temu MyBatis będzie wiedział gdzie szukać plików XML zwanych Mapperami, do których będziemy zapisywać nasze zapytania w języku SQL. 

**application.properties**
```properties
mybatis.mapper-locations=classpath*:/mybatis/*Mapper.xml
```

### Jak wykorzystać framework MyBatis w projekcie w Springu
Zacznijmy od stworzenia prostego obiektu, który będziemy trzymać w bazie danych.

**schema.sql**
```sql
CREATE TABLE IF NOT EXISTS tb_book(
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR (255) NOT NULL,
    author VARCHAR (255) NOT NULL,
    description TEXT,
    owner_id INT,
    PRIMARY KEY (id)
);
```

**Book.java**
```java
package pl.akai.bookcrossing.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Book {
    private int id;
    private String title;
    private String author;
    private String description;
    private Integer ownerId;
}
```

Teraz należy stworzyć interfejs zwany Mapperem i dołączyć  do  niego adnotację `@Mapper`. Jest on kluczowym plikiem w tym frameworku, gdyż na jego podstawie Spring stworzy Bean, który będzie się komunikował z bazą danych. Sygnatury metod interfejsu mogą przyjmować argumenty, które będą następnie wykorzystywane podczas tworzenia zapytania przy pomocy SQLa.

**BookDaoMapper.java**
```java
package pl.akai.bookcrossing.list;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import pl.akai.bookcrossing.model.Book;

import java.util.List;


@Mapper
public interface BookDaoMapper {

    List<Book> getAllBooks();

    Book getBookById(@Param("id") int id);

    void insertBook(@Param("book") Book book);
}

```
Teraz należy dopisać odpowiedni kod w SQLu do stworzonych wcześniej funkcji Mappera w pliku XML. 

**BookDaoMapper.xml**
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >
<mapper namespace="pl.akai.bookcrossing.list.BookDaoMapper">

    <resultMap id="baseBookMap" type="pl.akai.bookcrossing.model.Book" >
        <id column="id" property="id" jdbcType="INTEGER" />
        <result column="title" property="title" jdbcType="VARCHAR" />
        <result column="author" property="author" jdbcType="VARCHAR" />
        <result column="description" property="description" jdbcType="VARCHAR" />
        <result column="owner_id" property="ownerId" jdbcType="INTEGER" />
    </resultMap>

    <select id="getAllBooks" resultMap="baseBookMap">
        select * from tb_book
    </select>

    <select id="getBookById" resultMap="baseBookMap">
        select * from tb_book
        where id = #{id}
    </select>

    <insert id="insertBook">
        INSERT INTO tb_book (title, author, description, owner_id)
        VALUES (#{book.title}, #{book.author}, #{book.description}, #{book.ownerId});
    </insert>
    
</mapper>
```
Pierwszą rzeczą, na którą należy zwrócić uwagę jest `namespace="pl.akai.bookcrossing.list.BookDaoMapper"`. Odpowiada on za połączenie pliku XML z odpowiednim interfejsem. 

Następnie tworzymy resultMap. Dzięki niej MyBatis wie, w jaki sposób ma połączyć ze sobą pola klasy i kolumny otrzymane poprzez zapytanie SQL. 
- `column` - odpowiada kolumnie z zapytania, 
- `property` - polu w klasie,
- `jdbcType` - to typ.

Na samym końcu piszemy swoje zapytania w języku SQL. 
- `id` - odpowiada nazwie metody z interfejsu Mappera, 
- `resultMap` - pozwala na przekształcenie wyniku zapytania na obiekt Javy. 

Jedną z największych zalet MyBatisa jest możliwość tworzenia dynamicznych zapytań SQLa, czyli na przykład takich, które mają w swoim wnętrzu na przykład instrukcje warunkowe czy pętle. 

Zainteresowanych zapraszam do dokumentacji, gdzie są przykłady takich zapytań [Zapytania dynamiczne](https://mybatis.org/mybatis-3/dynamic-sql.html)

Teraz gdy mamy stworzony interfejs Mappera oraz odpowiadający mu plik XML możemy zacząć z nich korzystać. W klasie, w której chcemy skomunikować się z bazą danych, musimy za pomocą `@Autowired` wstrzyknąć nasz Mapper. Następnie wystarczy już tylko wywołać interesująca nas metodę interfejsu. Jeśli wszystko poprawnie zrobiliśmy, w ramach wywołania metody wykonane zostanie zadeklarowane zapytanie SQL. Dzięki temu możemy na przykład otrzymać interesujące nas dane lub wstawić nowy rekord do tabeli.

**BookDaoImpl.java**
```java
package pl.akai.bookcrossing.list;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.akai.bookcrossing.model.Book;

import java.util.List;

@Service
public class BookDaoImpl implements BookDao {

    private final BookDaoMapper bookMapper;

    @Autowired
    BookDaoImpl(BookDaoMapper bookMapper) {
        this.bookMapper = bookMapper;
    }

    @Override
    public Book findBookById(int bookId) {
        return bookMapper.getBookById(bookId);
    }

    @Override
    public List<Book> findAllBooks() {
        return bookMapper.getAllBooks();
    }

    @Override
    public void insertBook(Book book) {
        bookMapper.insertBook(book);
    }
}

```
Teraz wystarczy jeszcze napisać resztę naszej aplikacji w Springu w celu obsłużenia przychodzących requestów:

**ListBookController.java**
``` java
package pl.akai.bookcrossing.list;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import pl.akai.bookcrossing.model.Book;

@Controller
public class ListBookController {

    private final BookDao bookDao;

    @Autowired
    ListBookRestController(BookDao bookDao) {
        this.bookDao = bookDao;
    }

    @GetMapping("/")
    public String list(Model model) {
        model.addAttribute("books", bookDao.findAllBooks());
        return "index";
    }

    @GetMapping("/add")
    public String add(Model model) {
        bookDao.insertBook(Book.builder()
                .title("Innowatorzy")
                .author("Walter Isaacson")
                .description("Inna znana książka")
                .build());
        model.addAttribute("books", bookDao.findAllBooks());
        return "index";
    }
}
```

**index.html**
```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org" lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>td { border: 1px solid black; }</style>
</head>
<body>
<table>
    <tr>
        <th>ID</th>
        <th>Tytuł</th>
        <th>Autor</th>
        <th>Opis</th>
        <th>Właściciel</th>
    </tr>
    <tr th:each="book : ${books}">
        <td th:text="${book.id}">ID</td>
        <td th:text="${book.title}">Tytuł</td>
        <td th:text="${book.author}">Autor</td>
        <td th:text="${book.description}">Opis</td>
        <td th:text="${book.ownerId}">Właściciel</td>
    </tr>
</table>
</body>
</html>
```

Dzięki temu otrzymujemy prostą stronę wyświetlającą dane z bazy danych, którą można zobaczyć poniżej:

![mybatis_photo_2](/media/mybatis-web.png)



### Dlaczego warto korzystać z frameworku MyBatis?
MyBatis pozwala na uproszczenie kodu potrzebnego do komunikacji z bazą danych. Nie jest może tak popularnym frameworkiem jak Hibernate, ale ma kilka cech przez które warto zwrócić na niego uwagę:
- **duża wydajność** - jeżeli zależy nam szczególnie na wydajności, warto zainteresować się frameworkiem MyBatis. Jest zdecydowanie szybszy od powszechnie wykorzystywanego Hibernate'a, a jednocześnie niewiele się różni pod tym względem od JDBC
- **duża kontrola nad zapytaniami** - dzięki MyBatisowi możemy tworzyć dynamiczne zapytania SQL. Dzięki temu wywołując tę samą funkcję z innymi argumentami możemy otrzymać zupełnie inne zapytania SQL
- **prostota** - do rozpoczęcia pracy z MyBatisem potrzebna jest jedynie znajomość SQLa i podstaw Javy

Chciałbyś/Chciałabyś napisać jakiś projekt w Javie, ale brakuje ci zespołu? A może uważasz, że potrzebujesz więcej doświadczenia w pisaniu aplikacji webowych? Bez względu na powód, serdecznie zapraszamy do AKAI.


*- Michał Szczepaniak*

> Jeśli masz jakieś uwagi lub sugestie podeślij nam je na adres [kontakt@akai.org.pl](mailto:kontakt@akai.org.pl) lub kontrybuuj do naszego [repozytorium](https://github.com/akai-org/blog).

**Dodatkowe linki:**
- [Dokumentacja MyBatis](https://mybatis.org/mybatis-3/index.html)
- [Dokumentacja MyBatis dla Springa](https://mybatis.org/spring/)
