---
title: Wprowadzenie do CodeIgniter4, część 1
date: "2020-04-22T17:00:00.169Z"
template: "post"
draft: false
slug: "/posts/codeigniter1/"
category: "back-end"
tags:
  - "CodeIgniter"
  - "Backend"
  - "WebApp"
  - "PHP"
description: "Część pierwsza z serii artykułów wprowadzających do CodeIgnitera"
---

![CodeIgniter_flame](/media/codeigniter.png)

### Czym jest CodeIgniter
CodeIgniter jest frameworkiem PHP służącym w budowie aplikacji internetowych a więc zgodnie z założeniami frameworka ułatwia on pisanie aplikacji - szkielet aplikacji jest już gotowy a także umożliwia rozdzielenie jej poszczególnych warstw.

### Wzorzec projektowy MVC 
CodeIgniter pozwala na budowę aplikacji zgodnie z wzorcem projektowym MVC (ang. *Model, View, Controller*) – Model, Widok, Kontroler.
**Warstwa modelu** dotyczy logiki aplikacji, zapewnia dostęp do danych np. z bazy danych mysql-a.
**Warstwa widoku** jest odpowiedzialna za obsługę wyświetlania widoku strony dla użytkownika, może być realizowana np. poprzez wygenerowanie odpowiedniego szablonu, zależnie od wyboru czy skorzystamy z dynamicznego sposobu czy statycznego sposobu zarządzania danymi.
**Warstwa kontrolera** jest to warstwa odpowiedzialna za funkcjonowanie aplikacji, przetwarza dane wejściowe użytkownika i odpowiednio reaguje na jego działania np. wywołując akcję, model bądź widok.

### Wymagania CodeIgnitera
CodeIgniter 4 wymaga by na serwerze na którym uruchamiamy naszą aplikację był PHP w wersji co najmniej 7.2 z włączonymi rozszerzeniami:
- php-json
- php-mbstring
- php-mysqlnd
- php-xml

W tutorialu będę również korzystać z menadżera oprogramowania dla PHP - composera, zalecam używanie najnowszej wersji.

### Instalacja CodeIgnitera
Po otwarciu IDE, tworzymy nowy projekt, i w konsoli naszego IDE wpisujemy następujące komendę composera by zainstalować startową aplikację CodeIgnitera:

```
composer create-project codeigniter4/appstarter projekt1
```
Po pomyślnym wykonaniu komendy composera możemy wejść w nasz główny folder aplikacji *projekt1*

Spróbujmy odpalić naszą aplikację tak by sprawdzić czy wszystko poprawnie się zainstalowało używając komendy
```
php spark serve
```
Dzięki temu że CodeIgniter ma wbudowany swój serwer HTTP nie musimy posiadać zainstalowanego w systemie serwera HTTP jak apache czy nginx.

Jeżeli komenda przebiegła pomyślnie powinniśmy zobaczyć podobny komunikat:

![CodeIgniter_spark](/media/codeigniter_php_spark_ok.png)

Teraz gdy otworzymy przeglądarke na http://localhost:8080 powinniśmy ujrzeć podobną domyślną stronę, świadczy ona o poprawnym zainstalowaniu CodeIgnitera

![CodeIgniter_site_ok](/media/codeigniter_php_site_ok.png)

### Struktura aplikacji
Teraz opowiem krótko o trzech plikach które przydadzą nam się w kolejnej części Wprowadzenia.
Po instalacji powinieneś w swoim IDE ujrzeć taki szkielet aplikacji:

![CodeIgniter_skeleton](/media/codeigniter_php_app_skeleton.png)

Pierwszym plikiem którym się zainteresujemy będzie plik konfiguracyjny *env* który znajduje się w głównym katalogu naszej aplikacji. Możemy tutaj zdefiniować m.in. domyślny url naszej aplikacji czy skonfigurować połączenie z bazą.

Drugim plikiem ktorym się zainteresujemy jest plik Aplikacji *(App.php)*
znajduje się on w katalogu **app/Config**.
W tym pliku możemy ustalić domyślny język strony, jej kodowanie oraz wiele innych aspektów aplikacji.

Kolejnym plikiem którym się zainteresujemy będzie plik Routingu *(Routes.php)* znajduje się on w katalogu **app/Config**.
W tym pliku możemy definiować ścieżki, które wywołane przez użytkownika w przeglądarce bądź wywołane przez określone zapytania będą przekierowywać odpowiednie kontrolery. Obecnie znajduje się tutaj zdefiniowana ścieżka do domyślnego kontrolera, tak by domyślna strona mogła zadziałać.

Na tym zakończę pierwszą część wprowadzenia do CodeIgnitera, w następnej części przedstawię w jaki sposób możemy podpiąć bazę do naszego projektu, korzystać z niej i przekazywać określone dane pobrane z bazy do widoku.

*- Marcin Sylka *

> Jeśli masz jakieś uwagi lub sugestie podeślij nam je na adres [kontakt@akai.org.pl](mailto:kontakt@akai.org.pl) lub kontrybuuj do naszego [repozytorium](https://github.com/akai-org/blog).












