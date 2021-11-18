---
title: Wprowadzenie do Dockera, cz. 3 
date: "2021-11-19"
template: "post"
draft: false 
slug: "/posts/docker3/"
category: "dev-ops"
tags:
- "Docker"
- "DevOps"
description: "Część trzecia z serii artykułów wprowadzających do Dockera"

---

![Dockerowy_wieloryb](/media/docker.png)

### Uruchamianie własnych aplikacji z wykorzystaniem Dockera

W [poprzedniej części](/posts/docker2/) Dawid opisał różne sposoby i dodatkowe opcje wykorzystywane podczas uruchamiania
kontenerów Dockera. W tym wpisie natomiast skupimy się na tworzeniu własnych obrazów Dockera, z których następnie będą
tworzone nasze kontenery.

### Tworzenie własnych obrazów

DockerHub udostępnia nam ogromną ilość obrazów Dockera. Jednakże często występują sytuacje, w których chcemy
utworzyć nasz własny obraz. Dzięki niemu inne osoby będą mogły używać napisanej przez nas aplikacji bez pobierania
dodatkowych zależności, a korzystając jedynie z Dockera. By to zrobić, należy stworzyć plik `Dockerfile`,
który umożliwi Dockerowi stworzenie obrazu, a następnie kontenera na jego podstawie.

### Jak stworzyć plik Dockerfile

Jeśli dobrze pamiętacie z [pierwszej części](/posts/docker1/) obraz Dockera, składa się z warstw, czyli serii
modyfikacji pierwotnego obrazu, które zapisywane są później jako zmiany tylko do odczytu. Tworzenie własnego obrazu
Dockera polega właśnie na dokładaniu własnych warstw do istniejących obrazów, które modyfikują oryginalny obraz. Każdą
taką operację zapisujemy w osobnej linii pliku `Dockerfile`. Przyjrzyjmy się teraz najpopularniejszym i najbardziej
podstawowym operacjom:

- `FROM <OBRAZ>` - jest to komenda, którą będą się zawsze zaczynały wasze pliki `Dockerfile`. Wskazujemy nią obraz, jaki
  chcemy modyfikować, by stworzyć własny.
- `WORKDIR <PATH>` - komenda służy do przejścia do konkretnego katalogu wewnątrz kontenera Dockera. Wszystkie nasze
  kolejne operacje będą wykonywane właśnie w tym wskazanym katalogu. W przypadku braku odpowiedniego katalogu zostanie
  on utworzony.
- `COPY <SRC> <DEST>` - jest komendą wykorzystywaną do kopiowania plików z komputera do tworzonego obrazu.
  Wykorzystujemy ją np. do kopiowania plików źródłowych naszej aplikacji.
- `ADD <SRC> <DEST>` - jest komendą podobną do `COPY`. Za jej pomocą także możemy kopiować pliki z komputera, do obrazu.
  Jednakże jako argument `<SRC>` nie musimy podać pliku z naszego komputera. W jego miejscu możemy podać na przykład
  URL, a podczas budowy obrazu Docker pobierze zasoby spod podanego linku. Ponadto, jeśli przez argument `<SRC>`
  przekażemy skompresowany plik, zostanie on rozpakowany.
- `RUN <COMMAND>` - służy do uruchamiania komend shella wewnątrz kontenera Dockera w trakcie budowy obrazu.
- `ENTRYPOINT <COMMAND>` - służy do wskazania komendy, która zostanie wykonana w momencie startu kontenera. Domyślnym
  entrypointem jest `/bin/sh -c`.
- `CMD ["param1","param2"]` - służy do przekazywania argumentów domyślnych do entrypointa.
- `EXPOSE <PORT>` - informuje Dockera o tym, że obraz będzie słuchał na określonym porcie. Komenda służy do komunikacji
  między kontenerami Dockera.
- `ENV <KEY>=<VALUE>` - komenda służy do ustawienia zmiennych środowiskowych na stałe wartości. Wartość ta nadal możemy
  być nadpisana za pomocą `docker run -e`.

### RUN vs ENTRYPOINT vs CMD

Większość komend nie wymaga dodatkowego komentarza, bo sama nazwa wskazuje ich zastosowanie. Jednakże pewne kłopoty mogą
wynikać z podobieństwa komend `RUN`, `ENTRYPOINT` oraz `CMD`. Wszystkie trzy komendy mogą występować w jednej z dwóch
form:

- *shell form* : `RUN command param1 param2`
- *exec form* : `RUN ["executable","param1","param2"]`
- Dodatkowo `CMD` może wystąpić w trzeciej formie pokazanej wcześniej: `CMD ["param1","param2"]`.

Skupmy się teraz na różnicach między nimi:

- `RUN` - służy tylko i wyłącznie do uruchamiania komend lub programów, które mają być wykonane podczas **budowy
  obrazu**. Dodatkową cechą tej komendy jest to, że wszystkie jej wystąpienia są wykonywane w przeciwieństwie do `CMD`
  i `ENTRYPOINT`. Typowym przykładem wykonania tej komendy jest `RUN npm install`, która pobiera wszystkie zależności
  potrzebne do uruchomienia aplikacji. Dzięki temu są one pobierane tylko podczas budowy obrazu, a nie przy każdym
  uruchomieniu kontenera.
- `ENTRYPOINT` - służy do wskazania entrypointu, czyli programu/polecenia, które zostanie wykonany w momencie startu
  kontenera. W przeciwieństwie do `RUN` tylko jej ostatnie wystąpienie ma wpływ na obraz i kontener. Ważnym
  zapamiętania, że domyślnym entrypointem jest `/bin/sh -c`.
- `CMD` - według definicji komenda ta służy do przekazywania argumentów domyślnych do entrypointa. Podobnie do `ENTRYPOINT`
  tylko jej ostatnie wystąpienie ma wpływ na obraz.


Wygląda więc, że komenda `CMD` nie powinna mieć dużo wspólnego z `RUN` oraz `ENTRYPOINT`. Dlaczego więc ma tak jak one 
*shell form* oraz *exec form*? Dzieje się tak, ponieważ domyślnym entrypointem jest `/bin/sh -c`. Domyślnym argumentem
może być więc zatem program lub komenda wywołana za pomocą shella!
Dlatego też zamiast: `ENTRYPOINT npm start` możemy użyć `CMD npm start` i otrzymać taki sam rezultat. Różnica jest taka,
że korzystając z drugiej opcji, możemy nadpisać jej wywołanie podczas uruchomienia kontenera. Przykładowo, jeśli
korzystamy z domyślnego entrypointa oraz `CMD npm start`, a kontener uruchomimy za pomocą
`docker run -p 3000:3000 react-app echo "Hello World!"` to nie uruchomimy naszej aplikacji, lecz wyświetlimy napis "Hello World!".
Czegoś takiego nie zrobimy korzystając z `ENTRYPOINT`. Z tego powodu, jeśli chcemy, aby nasz obraz miał
konkretne zastosowanie powinniśmy korzystać z `ENTRYPOINT`, natomiast z `CMD` do bardziej ogólnych zastosowań, gdy
chcemy pozwolić użytkownikowi do zmiany zachowania.

### Dockerfile — pierwsze doświadczenie

Spójrzmy teraz na przykładowy plik `Dockerfile` i na to, jak zbudować obraz na jego podstawie. Poniższy plik pozwoli nam
uruchomić aplikację napisaną w React'cie jako kontener Dockera.

```dockerfile
FROM node:14
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3000
ENTRYPOINT npm start
```

Wpierw pobieramy `Nodejs` wskazując konkretną wersję - 14, by móc pobierać odpowiednie zależności za pomocą `npm`.
Następnie wskazujemy, że wewnątrz kontenera chcemy pracować w katalogu `/usr/src/app`. W kolejnym kroku kopiujemy pliki
z obecnego katalogu do obrazu Dockera. Chcemy więc skopiować cały kod źródłowy naszej aplikacji. Dzięki temu, że w
poprzednim kroku skopiowaliśmy również plik `package.json` możemy teraz wywołać komendę pobierającą wszystkie potrzebne
zależności - `npm install`. Potem mówimy, że z nasz kontener nasłuchuje na porcie 3000. Ostatnia komenda to tzw.
entrypoint, czyli komenda, która uruchomi się w momencie uruchomienia kontenera na podstawie przygotowanego obrazu.

Przygotowany w ten sposób plik możemy zmienić w obraz za pomocą polecenia:

```
docker build -t <NAZWA_OBRAZU> <PATH>
```

Możemy na przykład wywołać następujące polecenie:

```
docker build -t react-app .
```

Stworzymy nim obraz o nazwie `react-app`, na podstawie pliku Dockerfile, który zostanie wyszukany w obecnym katalogu.
Ważne podkreślenia są 2 kwestie. Pierwszą z nich jest to, że nie musimy podawać opcji `-t <NAZWA_OBRAZU>`. Jednakże w
takiej sytuacji będziemy musieli się w do niego odwoływać poprzez ID, co jest mniej wygodne niż korzystanie z nazwy.
Drugą kwestią wartą podkreślenia jest fakt, że jako argument polecenia nie podajemy ścieżki do pliku Dockerfile, lecz do
katalogu, w którym on się znajduje.

Dzięki utworzonemu w ten sposób obrazowi możemy uruchomić naszą aplikację w kontenerze za pomocą komendy poznanej w
poprzedniej części:

```
docker run -p 3000:3000 react-app
```

Warto podkreślić jedną rzecz. Mimo tego, że wykorzystaliśmy podczas budowy naszego obrazu polecenie `EXPOSE 3000`, to by
host (czyli np. nasz komputer), mógł się skomunikować z aplikacją, nadal musimy zmapować odpowiednio porty. Expose służy
do komunikacji między kontenerami, a nie między hostem i kontenerem.

## Plik .dockerignore

Wartą uwagi kwestią jest fakt, że nie zawsze chcemy by, wszystkie nasze pliki zostały przekopiowane za pomocą COPY lub
ADD. Z tego powodu powstały pliki `.dockerignore`. Zasada ich działania jest analogiczna do `.gitignore`. Docker podczas
tworzenia obrazu i kopiowania plików nie będzie uwzględniał plików i katalogów, które znajdują się w
pliku `.dockerignore`.

To wszystko, co bym chciał przekazać na temat tworzenia własnych obrazów Dockera. W następnej części skupimy się
natomiast na kwestii jednoczesnego uruchamiania kilku obrazów Dockera i komunikacji między nimi.

#### Źródła

* [Docker Hub](https://hub.docker.com/)
* [Dokumentacja Dockerfile](https://docs.docker.com/engine/reference/builder/)

*- Michał Szczepaniak*

> Jeśli masz jakieś uwagi lub sugestie podeślij nam je na adres [kontakt@akai.org.pl](mailto:kontakt@akai.org.pl) lub kontrybuuj do naszego [repozytorium](https://github.com/akai-org/blog).
