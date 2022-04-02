---
title: Pułapki w Javie
date: "2022-02-22"
template: "post"
draft: false 
slug: "/posts/springcourse3/"
category: "back-end"
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

Różnica w zapisie jest jednak istotna. `Boolean` jest obiektem, a `boolean` typem prymitywnym. Największą różnicę pomiędzy nimi znajdziemy w pamięci, które zajmują. Istotną różnicę stanowi fakt, że zmienna `Boolean` przyjmuje trzy wartości - oprócz standardowego `true` i `false`, może mieć także wartość `null`. Niemniej jednak, zmienna prymitywna typu `boolean` zajmuje znacznie mniej miejsca niż jakikolwiek obiekt. Jej dokładny rozmiar nie jest zdefiniowany, ponieważ zależy od maszyny wirtualnej, ale możemy z pewnością stwierdzić, że obiekt będzie zajmować wielokrotnie więcej pamięci.

Z uwagi na to, że zazwyczaj ze zmiennej logicznej korzystamy w prostych celach, korzystanie z obiektu `Boolean` zazwyczaj jest niepotrzebnym marnowaniem pamięci. Wyjątkiem są sytuacje, gdy chcemy skorzystać z metod klasy `Boolean`.


## Integer vs int
Kolejną pułapką są nazwy popularnych zmiennych liczbowych. Integer (int) jest typem zmiennej całkowitoliczbowej. Różnica w zapisie jest analogiczna jak w przypadku `Boolean` vs `boolean` – `Integer` jest obiektem, natomiast `int` typem prymitywnym.

W tym przypadku, kwestia wyboru typu zmiennej również opiera się na kompromisie pomiędzy ilością zajmowanej pamięci, a metodami wbudowanymi. Obiekt `Integer` wyposażony jest w różne metody pomagające przechowywać i konwertować dane. Jeżeli chcesz skorzystać z metody takiej jak na przykład `parseInt`, musisz zadeklarować typ zmiennej jako `Integer`. Ponadto, jeśli chcesz korzystać z klas generycznych, muszą one korzystać z klas. Dlatego też, gdy, na przykład, tworzymy listę przechowującą wartości całkowitoliczbowe można utworzyć obiekt o typie `List<Integer>`, ale nie można `List<int>`. Natomiast, jeżeli nie będzie to potrzebne, warto pozostać przy prymitywnym typie `int`, który pozwoli zaoszczędzić pamięć oraz pozwoli uniknać problemów z porównaniami.

W zależności od wyboru typu zmiennej Integer bądź int, należy rozważnie decydować o metodzie porównywania zmiennych danego typu. Przeanalizujmy następujący przykład:

```java
Integer test1 = 127;
Integer test2 = 127;
System.out.println(test1 == test2);
System.out.println(test1.equals(test2));

test1 = 128;
test2 = 128;
System.out.println(test1 == test2);
System.out.println(test1.equals(test2));

int test3 = 127;
int test4 = 127;
System.out.println(test3 == test4);
```

I jego rezultat:

```java
true
true
false
true
true
```

Jak widać, mimo że w każdym porównaniu były porównywane ze sobą te same liczby, w przypadku jednego z nich wynik okazał się fałszywy. Problematyczne okazało się zastosowanie porównania z operatorem `==` w przypadku dwóch zmiennych typu Integer o wartości 128. Warto zauważyć, że błąd ten nie występuje dla wartości 127. Porównując obiekty typu Integer za pomocą operatora `==` prawidłowe wyniki uzyskamy przy wartościach od -128 do 127. Wynika to z faktu, że operator `==` nie porównuje samych obiektów, ale ich referencję, czyli adres w pamięci. W przypadku małych wartości we wspomnianym wcześniej zakresie referencja będzie jednakowa, ale przy wszystkich większych liczbach możemy spodziewać się błędnych wyników. Z tego powodu korzystając ze zmiennej typu obiektowego dla bezpieczeństwa najlepiej stosować wyłącznie porównania typu `zmienna1.equals(zmienna2)`.

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

**String pool** jest wydzielonym fragmentem pamięci, do którego trafiają obiekty typu String utworzone za pomocą operatora `new`. 
Wpływa on korzystanie na zużycie pamięci i przyspiesza porównywanie stringów. Trzeba jednak uważać porównując obiekty typu `String`, ponieważ łatwo można wpaść w pułapkę.

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

Jak widać, Stringi `test11` oraz `test22`, które zostały utworzone przez operator new zwracają nieprawidłowy wynik, gdy są porównywane za pomocą operatora `==`. Spowodowane jest 
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
