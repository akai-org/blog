---
title: Podstawowe operacje w Javie
date: "2021-12-10"
template: "post"
draft: false
slug: "/posts/springcourse2/"
category: "back-end"
tags:
- "Java"
description: "Wstęp do podstawowych operacji w Javie"
---

![logo](/media/banner-java.png)

## Wstęp
Java, jak każdy inny język programowania posiada pewne podstawowe narzędzia bez których pisanie kodu byłoby niemożliwe. Każdy początkujący programista musi nauczyć się kilku podstawowych mechanik dostępnych w każdym języku programowania. Są to **zmienne**, **pętle** oraz **instrukcje warunkowe**. W tym poście postaramy się omówić te trzy filary programowania na przykładzie Javy. Warto zaznaczyć, że narzędzia te są tak uniwersalne i wszechstronne, że zrozumienie ich na przykładzie Javy pozwoli Ci zastosować je w każdym innym języku.

### Zmienne i typy
Zapewne każdy kto kiedyś rozpoczął przygodę z programowaniem chociaż raz usłyszał, że "zmienna jest jak pojemnik do którego zapisujemy dane". Jakkolwiek oklepane to by nie było - jest w tym wiele racji.  
Zmienne są jak wirtualne "pojemniki". Służą do przechowywania danych różnego typu. Mogą to być ciągi znaków, liczby, czy nawet całe struktury danych i obiekty. Zapewne słyszałeś, że w Javie "wszystko jest obiektem". Nie inaczej jest w przypadku zmiennych, a raczej ich typów. W języku tym rozróżniamy dwie klasy typów: proste (*primitive*) oraz obiektowe (*boxed*). Poniżej wyjaśminy główne różnice pomiędzy nimi.

#### Typy proste
Typ prosty (ang. *primitive data type*) jest czymś z czym spotkasz się w innych językach programowania. Pozwala on utworzyć zwykłą zmienną nie posiadająca dodatkowych funkcjonalności.  
Co równie ważne, zmienna typu prostego **nie może przyjmować wartości `null`** w przeciwieństwie do typów obiektowych. Domyślna wartość zmiennej będzie zależeć od tego jakie wartości będzie przechowywać. Dla przykładu zmienna typu prostego przechowująca liczby całkowite (`int`) przyjmuje jako domyślną wartość zero (a nie `null` jak jej obiektowy odpowiednik).  


Ponizej przykładowa implementacja zmiennych prymitywnych:

```java
int x = 10;                     // liczba całkowita
float pi = 3.14f;               // liczba zmiennoprzecinkowa
boolean isPrimitive = true;     // wartość logiczna
char firstLetter = 'A';         // pojedynczy znak
```
Dostępne typy proste w języku Java  to:
- `byte` - pojedynczy bajt (liczba całkowita 8-bitowa)
- `short` - liczba całkowita 16-bitowa
- `int` - liczba całkowita 32-bitowa
- `long` - liczba całkowita 64-bitowa
- `float` - liczba zmiennoprzecinkowa
- `double` - liczba zmiennoprzecinkowa o podwójnej precyzji
- `boolean` - wartość logiczna (prawda/fałsz)
- `char` - pojedynczy znak

#### Typy obiektowe
Typy obiektowe (ang. *boxed data type*) są swoistym rozszerzeniem typów prostych. Obudowują one typy proste, zamykając je w "pudełku" z dodatkowymi funkcjonalnościami. Typy obiektowe jak sama nazwa mówi są obiektami. Pozwala to na rozszerzenie zwykłej zmiennej o dodatkowe opcje.  
Kolejną znaczącą różnicą pomiędzy typem obiektowym a prostym jest jej domyślna wartość. Czasem zdarza się, że deklarując zmienną nie chcemy od razu przypisywać jej wartości. Zmienna typu *boxed* domyslnie przyjmuje wartość `null` co daje programiście jasny sygnał, że do tej zmiennej nie została przypisana jeszcze żadna wartość.  

Implementacja zmiennych typu obiektowego jest bardzo podobna do ich "prymitywnych" odpowiedników.

```java
Integer x = 10;                   // liczba całkowita
Float pi = 3.14f;                 // liczba zmiennoprzecinkowa
Boolean isBoxed = true;           // wartość logiczna
Character firstLetter = 'A';      // pojedynczy znak
String message = "Hello World!"   // ciąg znaków
```
Każdy typ prosty ma swój obiektowy odpowiednik. Warto zauważyć, że ciąg znaków (`String`) występuje wyłącznie jako typ obiektowy. Poniżej wszystkie typy obiektowe dostępne w Javie:
- `Byte` - pojedynczy bajt (liczba całkowita 8-bitowa)
- `Short` - liczba całkowita 16-bitowa
- `Integer` - liczba całkowita 32-bitowa
- `Long` - liczba całkowita 64-bitowa
- `Float` - liczba zmiennoprzecinkowa
- `Double` - liczba zmiennoprzecinkowa o podwójnej precyzji
- `Boolean` - wartość logiczna (prawda/fałsz)
- `Character` - pojedynczy znak
- `String` - ciąg znaków

#### Autoboxing i unboxing
W rzeczywistości przykład deklaracji zmiennej typu *boxed* jest trochę bardziej skomplikowany. Na szczęście Java udostępnia mechanizm konwersji typu prostego na obiektowy (ang. *autoboxing*) i typu obiektowego na prosty (ang. *unboxing*). Poniżej przedstawię przykład działania tego jakże przydatnego mechanizmu.

```java
// implementacja typu prostego
int primitiveInt = 10;

// implementacja typu obiektowego
Integer boxedInt = new Integer(10);

// konwersja typu primitive na typ boxed (autoboxing)
Integer boxedInt = 10;

// konwersja typu boxed na typ primitive (unboxing)
int primitiveInt = Integer.valueOf(10);
```

### Pętle
Pętle to kolejny mechanizm bez którego tworzenie oprogramowania byłoby niemożliwe. Pozwalają na wykonywanie tej samej części kodu wielokrotnie. Każde wykonanie kodu w ciele pętli i powrót do jej początku nazywamy iteracją pętli. Programista może z góry podać liczbę iteracji lub wykorzystać warunek logiczny aby określić, kiedy pętla powinna się zatrzymać.  
W wielu językach programowania pętle wyglądają bardzo podobnie, wręcz identycznie. Dziś przyjrzymy się trzem rodzajom pętli, na które na pewno natkniesz lub natknąłeś/aś się podczas nauki programowania. Nie tylko w Javie :).

#### Pętla `for`
Wspomniałem wcześniej, że programista może z góry założyć liczbę iteracji pętli. `For` jest w tym przypadku nieoceniony. Deklaracja pętli `for` składa się z trzech części:
```java
for (operacja1; operacja2; operacja3) {
  // ciało pętli
}
```
Po krótce przyjrzyjmy się tym częściom:
- *operacja1* - jest to kawałek kodu wykonywany na początku działania pętli, najczęściej definiujemy w nim *iterator* - specjalną zmienną służącą do liczenia iteracji pętli.
- *operacja2* - w tym miejscu deklarujemy warunek logiczny dzięki któremu opuścimy pętlę. Najczęściej jest to porównanie naszego *iteratora* do jakiejś zadanej wartości
- *operacja3* - kawałek kodu wykonywany po każdej iteracji pętli. W tym miejscu możemy określić jak ma zmieniać się nasz *iterator* (na przykład zwiększać lub zmniejszać o jeden).  

Przykład działania pętli for - program wypisujący na konsolę kolejne cyfry od 0 do 4:
```java
for (int i = 0; i < 5; i++) {
  System.out.println(i);
}
```
Wyjście programu:
```
0
1
2
3
4
```
*Operacja1* deklaruje zmienną `i` typu `int` i ustawia jej wartość na `0`. *Operacja2* wskazuje nam, że pętla będzie się wykonywać dopóki wartość wcześniej zadeklarowanej zmiennej `i` będzie mniejsza niż `5`. *Operacja3* zwiększa nam wartość zmiennej `i` o jeden po każdej iteracji.  

Za pomocą pętli `for` możemy również stworzyć pętlę która będzie wykonywała się w nieskończoność:
```java
for (;;) {
  System.out.println("Nieskonczona petla!");
}
```

#### Specjalny przypadek pętli `for`: pętla `for-each`
`For-each` jest wykorzystaniem pętli `for` do iteracji po wszystkich elementach tablicy. Pętla ta działa tak, że podczas każdej iteracji specjalna zmienna przyjmuje wartości kolejnych elementów podanej tablicy. Deklaracja wygląda nastepująco:
```java
for (typZmiennej nazwaZmiennej : nazwaTablicy) {
  // ciało pętli
}
```
- *typZmiennej* jest typem elementów jakie występują w tablicy o nazwie *nazwaTablicy*. Jeżeli podajemy do pętli tablicę liczb naturalnych (`int`) to *typZmiennej* również musi wskazywać na `int`.  
- *nazwaZmiennej* wskazuje zmienną do której zapisywane będą kolejne elementy tablicy *nazwaTablicy*.
- *nazwaTablicy* wskazuje obiekt będący tablicą lub impementujący interfejs `Iterable` z którego kolejno odczytane elementy będą zapisane w zmiennej *nazwaZmiennej*.  

Przykład użycia prezentuje się następująco:
```java
String[] przedmioty = {"polski", "angielski", "matematyka"};
for (String przedmiot : przedmioty) {
  System.out.println(przedmiot);
}
```
Wyjście programu:
```
polski
angielski
matematyka
```

#### Pętla `while`
Pętla `while` stanowi alternatywę dla pętli `for`. Cechuje się ona tylko jednym parametrem - warunkiem determinującym wyjście z pętli. W ten sposób programista nie musi deklarować iteratora tak jak w przydaku pętli `for`.  
Deklaracja pętli wygląda w sposób następujący:
```java
while (warunek) {
  // ciało pętli
}
```
Pętla wykonuje się tak długo, dopóki *warunek* pozostaje prawdziwy.

Przykład użycia pętli `while` wypisującej na konsolę kolejne cyfry od 0 do 4:
```java
int i = 0;
while (i < 5) {
  System.out.println(i);
  i++;
}
```
Wyjście programu:
```
0
1
2
3
4
```

W pętli `while` również możemy zaimplementować nieskończoną pętlę. Wystarczy w warunku pętli podać zawsze prawdziwą wartość (na przykład `true`). Przykład prezentuję poniżej.
```java
while (true) {
  System.out.println("Nieskonczona petla!");
}
```
#### Pętla `do-while`

Pętla `do-while` jest bardzo podobna do pętli `while` z tą różnicą, że warunek wyjścia z pętli sprawdzany jest **po** wykonaniu ciała pętli. Gwarantuje to nam, że ciało pętli zostanie wykonane przynajmniej jeden raz. Deklaracja zmiennej rozpoczyna się od słowa `do`, następnie podajemy ciało pętli w klamrach, a na samym końcu instrukcje `while` z warunkiem.
```java
do {
  // ciało funkcji
} while (warunek);
```
Dla przykładu wykonamy naszą standardową już procedurę odliczania od 0 do 4:
```java
int i = 0;
do {
  System.out.println(i);
  i++;
} while (i < 5);
```
Pętla nieskończona wygląda bardzo podobnie do pętli `while`:
```java
do {
  System.out.println("Nieskonczona petla!");
} while (true);
```
### Instrukcje warunkowe
Instrukcje warunkowe pozwalają nam na spawdzanie reguł logicznych i wykonywanie odpowiednich instrukcji w zależności od tego czy dana reguła jest prawdziwa czy nie. W skrócie moglibyśmy określić ich działanie w ten sposób: *Jeżeli zaszło A to wykonaj B. W przeciwnym przypadku wykonaj C*.  
W języku java wyróżniamy kilka operatorów służących porównywaniu wartości. Bywają one bardzo przydatne przy deklarowaniu warunków logicznych:
- `a == b` - `a` jest równe `b`
- `a != b` - `a` jest różne od `b`
- `a > b` - `a` jest większe od `b`
- `a >= b` - `a` jest większe lub równe `b`
- `a < b` - `a` jest mniejsze od `b`
- `a <= b` - `a` jest mniejsze lub równe `b`

#### Instrukcja `if-else`
Można by rzec, że jest to jedna z najczęściej wykorzystywanych w programowaniu instrukcji. Odzwierciedla ona sedno instrukcji warunkowych - *jeżeli A to B...*. Składa się ona z jednego (`if`), dwóch (`if`, `else`) lub trzech (`if`, `else if`, `else`) słów kluczowych po których następuje blok kodu wykonywany w przyadku spełnienia (bądź nie) warunku podanego w nawiasach.

```java
if (warunek) {
  // blok kodu wykonywany w przypadku spełnienia warunku
}
```
```java
if (warunek) {
  // blok kodu wykonywany w przypadku spełnienia warunku
} else {
  // blok kodu wykonywany w przypadku nie spełnienia warunku
}
```
```java
if (warunek) {
  // blok kodu wykonywany w przypadku spełnienia warunku
} else if (warunek_alternatywny) {
  // blok kodu wykonywany w przypadku spełnienia warunku alternatywnego
} else {
  // blok kodu wykonywany w przypadku nie spełnienia żadnego warunku
}
```
Przykład użycia instrukjcji `if-else` prezentuje się następująco
```java
int a = 10;
int b = 25

if (a > 20) {
  System.out.println("A jest większe od 20");
} else {
  System.out.println("A nie jest większe od 20");
}

if (b > 20) {
  System.out.println("B jest większe od 20");
} else {
  System.out.println("B nie jest większe od 20");
}
```
Wyjście programu:
```
A nie jest większe od 20
B jest większe od 20
```

#### Instrukcja `switch-case`
`Switch-case` jest bardziej rozbudowaną formą wcześniej zaprezentowanej instrukcji `if-else`.
Została ona stworzona do obsługiwania wielu alternatywnych warunków dotyczących tej samej zmiennej.  
Deklaruje się ją za pomocą słowa kluczowego `switch` oraz podania wyrażenia, którego dotyczyć będzie ta instrukcja. Przypadki, czyli alternatywne wyniki wyrażenia deklarujemy za pomocą zwrotu `case`. Opcjonalnie na samym końcu możemy umieścić blok kodu, który wykona się w przypadku niedopasowania żadnego z wyżej zadeklarowanych przypadków. Blok ten musimy poprzedzić zwrotem `default`.  
Deklaracja pełnej instrukcji `switch-case` wygląda następująco:

```java
switch(wyrazenie) {
  case x:
    // kod wykonywany gdy zajdzie przypadek x
    break;
  case y:
    // kod wykonywany gdy zajdzie przypadek y
    break;
  default:
    // przypadek domyślny wykonywany gdy przypadki x oraz y nie zostaną dopasowane do wyrażenia
}
```
Zauważ, że po każdym przypadku na samym końcu umieszczamy instrukcję `break`. Gdybyśmy jej tam nie umieścili to po wykonaniu przypadku `x`, program mógłby wykonać również przypadek `y` lub przypadek domyślny.  
Przykład dzialania instrukcji `switch-case`:
```java
int dzienTygodnia = 4;
switch (dzienTygodnia) {
  case 1:
    System.out.println("Poniedziałek");
    break;
  case 2:
    System.out.println("Wtorek");
    break;
  case 3:
    System.out.println("Środa");
    break;
  case 4:
    System.out.println("Czwartek");
    break;
  case 5:
    System.out.println("Piątek");
    break;
  case 6:
    System.out.println("Sobota");
    break;
  case 7:
    System.out.println("Niedziela");
    break;
  default:
    System.out.println("Błąd! Dzień tygodnia musi być z przedziału 1-7!!!");
}
```
Wyjście programu:
```
Czwartek
```

## Podsumowanie
W tym poradniku to by było na tyle. Uzbrojony/na w powyższą wiedzę powinieneś/powinnaś bez problemu stawiać czoła dalszym programistycznym wyzwaniom jakie czekają na Twojej drodze. Mam nadzieję, że dzięki temu poradnikowi, Java oraz pozostałe języki programowania choć trochę stały się dla Ciebie bardziej przyjazne. Więcej poradników już w krótce. Do zobaczenia!

#### Źródła
https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html  
https://www.w3schools.com/java/  

*-Gabriel Wachowski*

> Jeśli masz jakieś uwagi lub sugestie podeślij nam je na adres [kontakt@akai.org.pl](mailto:kontakt@akai.org.pl) lub kontrybuuj do naszego [repozytorium](https://github.com/akai-org/blog).
