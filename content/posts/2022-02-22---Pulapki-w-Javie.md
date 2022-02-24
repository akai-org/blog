---
title: Pułapki w Javie
date: "2022-02-22"
template: "post"
draft: false 
slug: "/posts/springcourse6/"
category: "dev-ops"
tags:
- "Java"
description: "Pułapki w Javie"

---

![logo](/media/banner-java.png)

## Wstęp
Większość początkujących programistów Javy napotyka na swojej drodze różne niespodziewane błędy. Nawet, gdy znają już jakiś inny język programowania,
mogą wpaść w jedną z typowych pułapek kryjących się w Javie. W tym poście poznasz je i zrozumiesz ich istotę, aby w przyszłości takich błędów nie popełnić.

## Boolean vs boolean
Pierwszą popularną pułapką jest popularny `boolean`, czy też `Boolean`. Jeżeli przyswoiłeś już podstawy programowania, z pewnością wiesz, że boolean jest typem logicznym 
(inaczej – boolowskim), którego zmienne mogą przyjmować wartość prawdy (oznaczanej 1 lub true) lub fałszu (analogicznie 0 lub false). 

Różnica w zapisie jest jednak istotna. Boolean jest obiektem, a boolean typem prymitywnym. Największą różnicę pomiędzy nimi znajdziemy w pamięci, które zajmują. 
Zmienna prymitywna typu boolean zajmuje znacznie mniej miejsca niż jakikolwiek obiekt. Jej dokładny rozmiar nie jest zdefiniowany, ponieważ zależy od maszyny wirtualnej, 
ale możemy z pewnością stwierdzić, że obiekt będzie zajmować wielokrotnie więcej pamięci.

Z uwagi na to, że zazwyczaj ze zmiennej logicznej korzystamy w prostych celach, korzystanie z obiektu Boolean zazwyczaj jest niepotrzebnym marnowaniem pamięci. 
Wyjątkiem są sytuacje, gdy chcemy skorzystać z metod klasy Boolean.


## Integer vs int
Kolejną pułapką są nazwy popularnych zmiennych liczbowych. Integer (int) jest typem zmiennej całkowitoliczbowej. Różnica w zapisie jest analogiczna jak w przypadku 
Boolean vs boolean – `Integer` jest obiektem, natomiast `int` typem prymitywnym.

W tym przypadku, kwestia wyboru typu zmiennej również opiera się na kompromisie pomiędzy ilością zajmowanej pamięci, a metodami wbudowanymi. Obiekt Integer wyposażony jest w 
różne metody pomagające przechowywać i konwertować dane. Jeżeli chcesz skorzystać z metody takiej jak na przykład `parseInt`, musisz zadeklarować typ zmiennej `Integer`. Natomiast, 
jeżeli nie będzie to potrzebne, warto pozostać przy prymitywnym typie int, który pozwoli zaoszczędzić pamięć.

`Boolean` i `boolean`,` Integer` i `int` nie są jedynymi typami zmiennych, które występują parami. Oto pozostałe prymitywne typy zmiennych oraz ich „odpowiedniki” w obiektach:

| Typ prymitywny | Obiekt    |
| -------------- | --------- |
| boolean        | Boolean   |
| int            | Integer   |
| byte           | Byte      |
| short          | Short     |
| char           | Character |
| float          | Float     |
| long           | Long      |
| double         | Double    |

## String pool i jego konsekwencje

**String pool** jest wydzielonym fragmentem pamięci, do którego trafiają obiekty typu String utworzone za pomocą operatora new. 
Wpływa on korzystanie na zużycie pamięci i przyspiesza porównywanie stringów. Trzeba jednak uważać porównując obiekty typu String, ponieważ łatwo można wpaść w pułapkę.

Przeanalizujmy poniższy fragment kodu:

```java
String test1 = "akai";
String test2 = "akai";
String test11 = new String(test1);
String test22 = new String(test2);

System.out.println(test1 == test2);
System.out.println(test11 == test22);
System.out.println(test1.equals(test11));
System.out.println(test2.equals(test22));
```

I jego rezultat:


```java
true
false
true
true
```

Jak widać, Stringi test11 oraz test22, które zostały utworzone przez operator new zwracają nieprawidłowy wynik, gdy są porównywane za pomocą operatora `==`. Spowodowane jest 
to faktem, że operator `==` porównuje różne adresy.

## Podsumowanie

W tym poście poznałeś kilka pułapek, na które trafiają początkujący programiści Javy. Ważne, aby nie zniechęcać się i uczyć na błędach - zarówno swoich, jak i cudzych.

#### Źródła

* [Kurs Java](https://kursjava.com/klasy/roznice-miedzy-typami-prymitywnymi-i-referencyjnymi/)
* [Geeks for geeks](https://www.geeksforgeeks.org/primitive-data-type-vs-object-data-type-in-java-with-examples/)
* [Baeldung Primitives vs Objects](https://www.baeldung.com/java-primitives-vs-objects/)
* [Baeldung String Pool](https://www.baeldung.com/java-string-pool)

*- Julia Lamperska*

> Jeśli masz jakieś uwagi lub sugestie podeślij nam je na adres [kontakt@akai.org.pl](mailto:kontakt@akai.org.pl) lub kontrybuuj do naszego [repozytorium](https://github.com/akai-org/blog).
