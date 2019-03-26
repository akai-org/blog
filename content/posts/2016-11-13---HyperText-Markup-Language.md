---
title: HyperText Markup Language
date: "2016-11-19T20:41:32.169Z"
template: "post"
draft: false
slug: "/posts/html"
category: "front-end"
tags:
  - "HTML"
description: "HTML – hipertekstowy język znaczników, obecnie szeroko wykorzystywany do tworzenia stron internetowych."
---

## HyperText Markup Language

Aby zrozumieć tworzenie stron internetowych, musimy zacząć do języka HTML.

> HTML – hipertekstowy język znaczników, obecnie szeroko wykorzystywany do tworzenia stron internetowych. HTML pozwala opisać strukturę informacji zawartych wewnątrz strony internetowej, nadając znaczenie poszczególnym fragmentom tekstu – formując hiperłącza, akapity, nagłówki, listy – oraz osadza w tekście dokumentu obiekty plikowe np. multimedia bądź elementy baz danych np. interaktywne formularze danych. ~[Wikipedia](https://pl.wikipedia.org/wiki/HTML)

Struktura pliku HTML:

```html
<!DOCTYPE html>
<html lang="pl">
  <head>
    <!-- Informacje o stronie oraz zasobach -->
  </head>
  <body>
    <!-- Opis struktury strony internetowej -->
  </body>
</html>
```

Utwórzmy plik o nazwie `index.html` i skopiujmy do niego powyższy kod. Teraz wypełnijmy własnym kodem sekcję nagłówkową i ciało strony.

Do sekcji nagłówkowej dodaj tag `<title>` oraz tytuł strony jako jego zawartość. Przykład:

```html
<title>Twoja nazwa strony</title>
```

Do ciała strony dodajmy nagłówek najwyższego poziomu:

```html
<h1>Twój nagłówek</h1>
```

> PROTIP: na całej podstronie powinien znajdować się tylko jeden taki tag `<h1>`

Zapisujemy zmiany. Tak przygotowany plik możemy uruchomić w przeglądarce.

### Sekcja nagłówkowa

Niestety natknęliśmy się na problem: brak polskich znaków. Aby temu zaradzić, musimy poinformować przeglądarkę, z jakiego kodowania znaków chcemy korzystać.

```html
<meta charset="utf-8" />
```

[Więcej o tagach meta](Tagi--meta)

### Ciało strony

Stronę budujemy z tagów o różnych właściwościach i przeznaczeniach.

#### Nagłówki

```html
<h1>Nagłówek 1</h1>
<h2>Nagłówek 2</h2>
<h3>Nagłówek 3</h3>
<h4>Nagłówek 4</h4>
<h5>Nagłówek 5</h5>
<h6>Nagłówek 6</h6>
```

#### Akapit

```html
<p>Lorem ipsum ...</p>
```

Interpreter HTML domyślnie ignoruje niektóre znaki, takie jak przełamanie linii, dlatego efektem tego kodu:

```html
<p>
  Pierwsza linijka Druga linijka
</p>
```

będzie: `Pierwsza linijka Druga linijka`. Najprostszym sposobem będzie dodanie tagu przełamania linii:

#### Przełamanie linii

```html
<br />
<!-- lub -->
<br />
```

#### Pozioma linia oddzielająca

```html
<hr />
```

#### Lista

```html
<ul>
  <li>Element listy</li>
  <li>Element listy</li>
  <li>Element listy</li>
</ul>
```

#### Lista numerowana

```html
<ol>
  <li>Element listy</li>
  <li>Element listy</li>
  <li>Element listy</li>
</ol>
```

#### Hiperłącze

```html
<a href="www.google.com" title="Google"
  >Kliknij tutaj aby przejść na stronę główną Google.com</a
>
```

#### Obrazek

```html
<img src="obrazek.jpg" alt="Informacja o tym co znajduje się na obrazku" />
```

#### Skróty i definicje

Bywa, że na stronie chcemy użyć skróconej nazwy, która nie musi być dla wszystkich zrozumiała. Z pomocą przychodzi tag `<abbr>`:

```html
<abbr title="Akademickie Koło Aplikacji Internetowych">AKAI</abbr>
```

Po najechaniu na skrót wyświetli się pełna nazwa.
Podobnie działa tag `<dfn>`, który wykorzystuje się do załączania definicji:

```html
<dfn>Logika</dfn> to nauka o sposobach jasnego i ścisłego formułowania myśli.
```

#### Cytaty

```html
<!-- Blok cytatu -->
<blockquote cite="http://akai.org.pl">
  Programować, albo nie programować <br />
  Oto jest pytanie...
</blockquote>

<!-- Cytat otoczony cudzysłowem -->
<q cite="http://akai.org.pl">
  Programować, albo nie programować <br />
  Oto jest pytanie...
</q>
```

#### Tekst z białymi znakami

Jeśli chcemy uwzględnić wielokrotne spacje, przełamania linii i wcięcia, możemy wykorzystać tag `<pre>`

```html
<pre>
 ______     __  __     ______     __    
/\  __ \   /\ \/ /    /\  __ \   /\ \   
\ \  __ \  \ \  _"-.  \ \  __ \  \ \ \  
 \ \_\ \_\  \ \_\ \_\  \ \_\ \_\  \ \_\ 
  \/_/\/_/   \/_/\/_/   \/_/\/_/   \/_/                                    
</pre>
```

> http://patorjk.com/software/taag/#p=display&f=Sub-Zero&t=AKAI

#### Fragment kodu

```html
Do zwracania wartości z funkcji służy słowo kluczowe <code>return</code>.
```

### Znaki specjalne

Na stronach internetowych możemy korzystać ze wszystkich znaków kodowanych w UTF-8.
Kilka przykładowych: ✶ ⨻ 𝔸
Nie jest dobrą praktyką przekopiowywać je stąd bezpośrednio do pliku. Ten sam efekt uzyskamy, wpisując tzw. encje (ang. _entities_), czyli kody zaczynające się od `&`. Zauważ, że znak & też trzeba wstawić za pomocą encji.

```html
Znaki o specjalnym znaczeniu w HTMLu: &lt; &gt; &amp; Twarda spacja (oddzielone
nią wyrazy zawsze będą w jednej linii): do&nbsp;domu Greckie litery: &alpha;
&beta; &gamma; Symbole matematyczne: &radic; &int; &sum; &times; Litery z
akcentami: &eacute; &egrave; &ecirc; &euml; Strzałki: &larr; &rarr; &uarr;
&darr;
```

Więcej ciekawych znaków [tutaj](https://dev.w3.org/html5/html-author/charref).

### Komentarze w kodzie HTML

Zawartość tego _magicznego_ tagu jest ignorowana przez interpreter przeglądarki.

```html
<!-- Twój komentarz -->
```

Uwaga! Komentarze w kodzie HTML nie są ukryte przed odwiedzającymi - będą widoczne po wybraniu opcji `pokaż źródło`.

### Załączenie zewnętrznych treści

HTML pozwala również na załączanie treści takich jak muzyka, wideo, czy inna strona internetowa. Zainteresowanych kieruję do [Mozilla Developer Network](https://developer.mozilla.org/pl/) - najlepszej, mi znanej, dokumentacji dla frontend developera dostępnej również w języku polskim. Przydatne tagi:

```html
<audio>
  ,
  <video>
    ,
    <iframe
      >,
      <source />
      , <object></object
    ></iframe>
  </video>
</audio>
```

### Grupowanie

Znaczniki div i span nic nie oznaczają i same z siebie nie wpływają na wygląd strony.
Stosujemy je, żeby zastosować do elementów wspólne style.

```html
<div>
  Wewnątrz bloku div można umieścić dowolne elementy, którym potem przypiszemy
  style CSS.
</div>

Do grupowania <span>fragmentów tekstu</span> służy znacznik span.
```

### Atrybuty

Każdy znacznik ma swój zestaw atrybutów, które określają jego właściwości.
Szczególnymi atrybutami, dostępnymi w każdym tagu są: klasa (`class`) i identyfikator (`id`).
Wykorzystujemy je przy pisaniu stylów.

Podstawową różnicą między klasą a identyfikatorem jest taka, że na stronie można umieścić co najwyżej **jeden** element o danym identyfikatorze, a dowolną liczbę elementów z taką samą klasą. Znacznik może mieć kilka klas na raz, wtedy oddzielamy je spacją.

```html
<div id="header">To jest nagłówek</div>
<div class="blue">To jest niebieskie</div>
<div class="blue">To też jest niebieskie</div>
<div class="important">To jest ważne</div>
<div class="blue important">To jest ważne i niebieskie</div>
<div id="sidebar" class="left">
  Można użyć jednocześnie klasy i identyfikatora
</div>
```

### Semantyka

Znaczniki semantyczne to takie, które informują, jaki rodzaj treści zawierają.
Używanie ich nie zmienia nic w warstwie wizualnej, ale wspomaga m. in. wyszukiwarki i czytniki ekranowe.

```html
<nav>Nawigacja</nav>
<header>Nagłówek</header>
<footer>Stopka</footer>
<article>Artykuł</article>
<aside>Element poboczny</aside>
<section>Sekcja</section>
```

[Jaki blok wybrać?](http://html5doctor.com/downloads/h5d-sectioning-flowchart.png)

#### Wyróżnianie tekstu

```html
<strong>To jest ważne (wyświetlane pogrubioną czcionką)</strong>
<em>To jest zaakcentowane (ang. emphasis, wyświetlane kursywą)</em>
<small>To jest mało ważne (wyświetlane małą czcionką)</small>
```

Uwaga: te znaczniki nie informują bezpośrednio o wyglądzie, tylko o charakterze tekstu w nich zawartych.
Sposób wyświetlania możemy dowolnie ustawić w arkuszu stylów.

Przejdźmy teraz do [kaskadowych arkuszy stylów](/posts/css).
