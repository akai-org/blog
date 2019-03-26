---
title: Cascading Style Sheets
date: "2016-11-13T13:46:37.121Z"
template: "post"
draft: false
slug: "/posts/css/"
category: "Front-end"
tags:
  - "CSS"
description: "Kaskadowe arkusze stylów dają nam całkowitą kontrolę nad wyglądem naszej strony."
---

## Cascading Style Sheets

Kaskadowe arkusze stylów dają nam całkowitą kontrolę nad wyglądem naszej strony.

### Reguła CSS:

Reguły w CSS definiuje się w taki sposób:

```css
selektor {
  właściwość: wartość;
}
```

Tak podana właściwość z wartością tworzy deklarację.

Przykładowa reguła:

```css
body {
  color: red;
}
```

Przekładając na język polski: `Tekst znajdujący się w tagu <body> będzie od tej pory czerwony`.

### Komentarze

```css
a {
  /*
    Twój komentarz
    wielolinijkowy
  */
}
```

Uwaga! Podobnie jak w języku HTML, komentarze nie są ukryte przed użytkownikami strony.

### Kolory

Kolory w CSS możemy definiować na wiele sposobów:

```css
selektor {
  color: cyan; /* wiele kolorów jest nazwanych i można je wykorzystać w szybkim prototypowaniu */
  color: rgb(
    0,
    0,
    255
  ); /* kolor możemy podać w formacie RGB, jest to jednak mało wydajne */
  color: hsl(
    0,
    100%,
    50%
  ); /* dostępna jest też przestrzeń kolorów HSL (odcień, nasycenie, jasność) */
  color: #0000ff; /* najlepszym sposobem jest podanie koloru w formacie szesnastkowym */
}
```

[Aplikacja](https://color.adobe.com/pl/) i [druga](https://developer.mozilla.org/pl/docs/Web/CSS/CSS_Colors/Color_picker_tool) pomagające wygenerować odpowiadający nam kolor.

### Zewnętrzne style

Jeśli chcesz zacząć pisać swój własny arkusz kaskadowy pamiętaj, żeby utworzyć oddzielny plik z rozszerzeniem `*.css` i załącz go do pliku HTML:

```html
<link rel=”stylesheet” type=”text/css” href=“TwojaNazwaArkuszaStylow.css” />
```

Jeśli jednak jesteś buntownikiem i koniecznie chcesz umieścić swój styl w pliku HTML, cóż... możesz to zrobić w sekcji `<head>`:

```html
<head>
  <style>
    p {
      font-size: 14px;
    }
  </style>
</head>
```

lub bezpośrednio w tagu:

```html
<p style="font-size: 14px">Tekst o wielkości 14 pikseli</p>
```

### Klasy i identyfikatory

No dobrze, ale co jeśli nie chcemy stylować wszystkich akapitów na stronie tylko jeden konkretny? Z pomocą przychodzą klasy. Wykorzystujemy je w pliku HTML w taki sposób:

```html
<div>
  <p>Jakiś tekst</p>
  <p class="hot">Wyróżniony tekst</p>
  <p>Jakiś tekst</p>
  <p>Jakiś tekst</p>
</div>
```

teraz zdefiniujmy styl dla klasy `.hot`:

```css
.hot {
  color: red;
}
```

W podobny sposób możemy wykorzystać inne atrybuty:

```html
<p id="content"> Zawartość oznaczona identyfikatorem </p>
<a href="http://akai.org.pl"> Link prowadzący do strony głównej AKAI </p>
```

```css
[id="content"] {
  font-size: 16px;
}
[href="http://akai.org.pl"] {
  color: red;
}
```

### Marginesy

![Box model](https://www.w3.org/TR/CSS2/images/boxdim.png)

Aby poprawić czytelność strony stosuje się marginesy:

```css
div {
  margin-top: 25px;
  margin-left: 10px;
  margin-right: 15px;
  margin-bottom: 30px;
}
```

Teraz możemy otoczyć nasz tag ramką:

```css
div {
  border: 1px solid red;
  /* szerokość, styl, kolor */
}
```

Może okazać się teraz, że zawartość jest zbyt blisko ramki, możemy odsunąć ją przy użyciu właściwości padding:

```css
div {
  padding-top: 25px;
  padding-left: 10px;
  padding-right: 15px;
  padding-bottom: 30px;
}
```

### Właściwości tekstu

Przydatne właściwości do stylowania tekstu:

```css
article {
  color: red; /* kolor tekstu */
  letter-spacing: 5px; /* odstępy między literami */
  text-align: center; /* wyrównanie tekstu - left, right, center, justify */
  text-decoration: underline; /* dekoracja tekstu: none, underline, overline, line through, blink */
  text-transform: uppercase; /* transformacje tekstu - none, capitalize, lowercase, uppercase */
}
```

*Originally published by [Rafał Rudol](https://rudol.eu) on Github Wiki*