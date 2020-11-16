---
title: "Poznaj swoje IDE - JetBrains"
date: "2020-11-11T18:54:00.169Z"
template: "post"
draft: false
slug: "/posts/mybatis/"
category: "Programowanie"
tags:
  - "Programowanie"
  - "Oprogramowanie"
  - "Web development"
description: "Omówienie możliwości dawanych przez IDE od JetBrains "
---
![jetbrains_photo_1](/media/images-jetbrains.png)

### Czym ją produkty JetBrains?
Produkty JetBrains są jednymi z najpopularniejszych IDE ([Integrated Development Environment](https://en.wikipedia.org/wiki/Integrated_development_environment)) w świecie programistów. 
Potrafią one w znaczy sposób zwiększyć wydajność programisty dzięki m.in. podkreślaniu błędów w składni danego języka czy proponowaniu metod możliwych do wywołania na danym obiekcie.
Jeśli jesteś studentem/studentką Politechniki Poznańskiej to możesz uzyskać darmowy dostęp do płatnych wersji produktów JetBrains, jeśli założysz konto na email studencki pod tym [linkiem](https://www.jetbrains.com/shop/eform/students).
Warto im się przyjrzeć z bliska i wypróbować, gdyż ułatwią ci pracę na studiach, ale także istnieje duże prawdopodobieństwo, że będziesz z nich korzystać w przyszłej pracy. 
W tym poście skupię się na opisaniu kilku prostych sztuczek, które jeszcze bardziej podniosą wygodę korzystania z tego IDE.

![jetbrains_photo_2](/media/ides-jetbrains.png)
### Skróty klawiszowe to twoi nowi przyjaciele
IDE JetBrains posiadają wiele skrótów klawiszowych, które są takie same niezależnie od tego czy używasz PyCharma czy Intllija czy jeszcze innego IDE tej firmy. 
Jest to bardzo pomocne podczas studiów, gdzie piszesz programy w różnych językach programowania. 
Raz nauczone skróty możesz wykorzystywać wszędzie. Bardzo pomocne, prawda? 
Wśród skrótów, które sam najczęściej wykorzystuję i polecam mogę wymienić:
- `Ctrl + Alt + L` - formatowanie kodu. Już nigdy więcej nie będziesz musiał tracić czasu na wyrównywanie odstępów między nawiasami, znakami czy zmiennymi by kod wyglądał lepiej, bo IDE zrobi to za ciebie. 
- `Shift + Ctrl + Alt + L` - otwiera opcje formatowania dzięki czemu można jeszcze bardziej zapanować nad procesem formatowania. Wśród opcji znajdziemy między innymi zakres formatowania oraz optymalizację importów.
- `Alt + Insert` - automatyczne generowanie kodu. W językach obiektowych często gdy tworzymy nową klasę musimy dopisać wiele schematycznych metod jak gettery, settery czy konstruktory. Automatyczne generowanie może łatwo skrócić ten proces.
- `Ctrl + LPM` - przeniesienie do miejsca deklaracji. Jedna z najbardziej przydatnych komend, o której nie wszyscy wiedzą. Jeśli trzymając `Ctrl` naciśniemy LPM na metodę, funkcję czy zmienną to zostaniemy przeniesieni do miejsca jej deklaracji w kodzie. 
- `Ctrl + Shift + F` - znany wszystkim `Ctrl + F` ale dotyczy całego projektu. Wyszukiwanie możemy też ograniczyć do konkretnego typu plików czy folderu.
- `3x Shift` - opcja wyszukiwania podobna do powyższej ale ogranicza się do plików i klas. Dzięki temu często jest wygodniejsza niż `Ctrl + Shift + F`, gdy dokładnie wiemy jakiej klasy szukamy.
- `Ctrl + R` - pozwala na zastępowanie jednego wyrażenia innym. Bardzo pomocne, gdy zechcemy zmienić nazwę zmiennej na bardziej odpowiednią i potrzebujemy ją zmienić w wielu miejscach.

Chcesz poznać więcej skrótów? Zdecydowaną większość znajdziesz pod tym [linkiem](https://resources.jetbrains.com/storage/products/intellij-idea/docs/IntelliJIDEA_ReferenceCard.pdf?_ga=2.54832427.1862380870.1598387885-556184972.1595441919)

**UWAGA!** Niektóre skróty mogą się kłócić ze skrótami systemowymi. Więcej o tym możesz przeczytać [na stronie JetBrains](https://www.jetbrains.com/help/idea/configuring-keyboard-and-mouse-shortcuts.html#conflicts)

### Zbyt mało opcji? Dodaj pluginy
Jakby dostępne możliwości oferowane przez IDE byłyby dla ciebie zbyt małe, zawsze możesz sięgnąć po pluginy, które jeszcze je rozbudowują.
Wśród używanych i polecanych przeze mnie znajdziemy:
- **Key Promoter X** - jest to prosty plugin, który pomaga uczyć się skrótów klawiszowych. Za każdym razem jak wybierzesz opcje, na którą jest skrót klawiszowy poinformuje cię o tym. Może być przydatny w przypadku nauki skrótów klawiszowych.
- **Rainbow Brackets** - ile razy straciłeś czas na szukaniu błędu, który okazał się być źle domkniętym nawiasem? Zapewne nie mało.
Dlatego uważam ten plugin za jeden z najbardziej przydatnych.
Kolorowanie nawiasów umożliwia kontrolowanie zakresów pętli, if-ów lub kolejności operacji w bardziej rozbudowanych warunkach.
- **SonarLint** - jest jednym z wielu pluginów, których celem jest sprawdzanie czystości kodu. 
Jeśli znajdzie jakieś problemy z czystością kodu to je zaznaczy byśmy mogli je poprawić, a także poinformuje nas o nich przed wykonaniem commita. 
Czasem nawet zaznaczy je w taki sposób jakby były bugiem w kodzie, jeśli uzna to za coś poważnego.
![jetbrains_photo_3](/media/IDE-plugins.png)

### Korzystasz z bazy danych? Podłącz ją bezpośrednio z IDE
W prawym bocznym panelu jest pasek opcji, na którym znajdziemy `Database`. Po jej kliknięciu pojawi się nam panel boczny. 
Na jego górze znajdziemy symbol `+`, który umożliwi nam dodanie opcji konfiguracyjnych komunikacji z bazą danych.
Dzięki temu będziemy mogli nie tylko wykonywać polecenia SQL z poziomu IDE, ale również podejrzeć jej zawartość. 
Ponadto bez problemu poprzez zwykłe kliknięcia wykonamy takie operacje jak usuwanie i dodawanie tabel czy ich rekordów.
Dodatkowo gdy IDE wykryje, że piszesz zapytania SQL w swoim kodzie zacznie podpowiadać ci nazwy tabel oraz ich atrybutów.
![jetbrains_photo_4](/media/database-jetbrains.png)

Chciałbyś/Chciałabyś napisać jakiś projekt, ale brakuje ci zespołu? A może uważasz, że potrzebujesz więcej doświadczenia w pisaniu aplikacji webowych? Bez względu na powód, serdecznie zapraszamy do AKAI.


*- Michał Szczepaniak*

> Jeśli masz jakieś uwagi lub sugestie podeślij nam je na adres [kontakt@akai.org.pl](mailto:kontakt@akai.org.pl) lub kontrybuuj do naszego [repozytorium](https://github.com/akai-org/blog).

**Dodatkowe linki:**
- [Rejestracja konta JetBrains dla studentów](https://www.jetbrains.com/shop/eform/students)
- [Ściaga ze skrótami klawiszowymi](https://resources.jetbrains.com/storage/products/intellij-idea/docs/IntelliJIDEA_ReferenceCard.pdf?_ga=2.54832427.1862380870.1598387885-556184972.1595441919)
- [Konflikty skrótów klawiszowych](https://www.jetbrains.com/help/idea/configuring-keyboard-and-mouse-shortcuts.html#conflicts)
 
