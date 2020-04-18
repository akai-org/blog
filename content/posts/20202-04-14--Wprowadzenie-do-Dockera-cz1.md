---
title: Wprowadzenie do Dockera, cz. 1
date: "2020-04-18T16:40:00.169Z"
template: "post"
draft: false
slug: "/posts/docker1/"
category: "dev-ops"
tags:
  - "Docker"
  - "DevOps"
description: "Część pierwsza z serii artykułów wprowadzających do Dockera"
---

![Dockerowy_wieloryb](/media/docker.png)

### Czym jest Docker?

Docker to oprogramowanie, którego głównym zadaniem jest tworzenie kontenerów. Kontenery są zwirtualizowanymi jednostkami zawierającymi
aplikację (czy też raczej jej kod) oraz wszystkie jej zależności. Dzięki temu każdy, kto pracuje nad aplikacją ma dokładnie to samo środowisko uruchomieniowe, co z kolei może nam przyspieszyć prace nad aplikacją. Dodatkowo, każdy kontener jest izolowany od systemu hosta i innych kontenerów, co zwiąksza bezpieczeństwo.

### Jak to działa?

Aby stworzyć nowy kontener Docker wykorzystuje wcześniej zbudowany obraz. **Obraz (ang. *container image*)** jest niczym innym jak "podstawą"
używaną przez Dockera do uruchomienia **kontenera  (ang. *container*)**, który jest instancją obrazu. Działa to na bardzo podobnej zasadzie
jak tworzenie maszyn wirtualnych (choć zaznaczamy że nie jest *dokładnie* tym samym): posiadając obraz systemu na przykład
w formacie .iso jesteśmy w stanie stworzyć maszynę wirtualną, która stanowi instancję obrazu.

Bazą obrazu są okrojone wersje systemów operacyjnych, np. Ubuntu. Jest możliwe aby z takiego obrazu utworzyć inne, nowe
obrazy, kótre zapewniają spełnienie zależności aplikacji. Stworzenie tych obrazów odbywa się przez nałożenie 
na pierwotny obraz nowych **warstw  (ang. *layers*)**, a więc serii modyfikacji obrazu, które to zapisywane są później jako zmiany tylko 
do odczytu i które będą składać się na nowy obraz. 

Wszystkie oficjalne obrazy a także te, które zbudujemy sami można opublikować w **rejestrze Dockera (ang. *Docker hub*). Serwis ten bardzo
przypomina znanego każdemu githuba - zawiera on **repozytoria (ang. *repositories*)**, z których każde jest skupione na pojedynczym obrazie i
jego różnych wersjach. 


### Jak tego użyć w praktyce?

Aby przedstawić Wam praktyczne zastosowanie Dockera posłużymy się przykładem obrazu Ubuntu. Możemy utworzyć kontener 
na jego podstawie przez polecenie: 
```
docker run -ti ubuntu
```
Polecenie `docker run` odpowiada za utworzenie kontenera na podstawie obrazu `ubuntu`. Jako argumenty przyjmuje najpierw 
opcje takie jak `-ti`, a potem nazwę obrazu. Po uruchomieniu tego polecenia Docker próbuje znaleźć obraz lokalnie, ale 
jeżeli nie mieliśmy go na komputerze wcześniej to oczywiście nie znajdzie go. Wtedy sięgnie do znanych sobie rejestrów
Dockera i tam znajdzie obraz o takiej samej nazwie. Rozpocznie się jego pobieranie. Jest to proces jednorazowy, to znaczy 
dopóki nie usuniemy lokalnej wersji obrazu to Docker nie będzie go pobierał ponownie gdyż nie ma takiej potrzeby. Kiedy 
obraz zostanie pobrany to pod naszą sesję konsoli zostanie podpięty strumień wyjścia i wejścia z basha kontenera. Za ten 
efekt odpowiada opcja `-ti`: zapewnia ona tryb interaktywny, który pozwoli nam jako użytkownikom interagować z programem 
odpalonym w kontenerze, w tym przypadku z poleceniem `/bin/bash -c`

Na tym zakończymy część pierwszą. W następnej części przedstawimy więcej podstawowych komend i opcji uruchomieniowych
kontenerów. Są to podstawy niezbędne do tego aby w przyszłości zaprezentować używanie Dockera z aplikacjami i zapewniania
im zależności.

*- Dawid Dziedzic*

> Jeśli masz jakieś uwagi lub sugestie podeślij nam je na adres [kontakt@akai.org.pl](mailto:kontakt@akai.org.pl) lub kontrybuuj do naszego [repozytorium](https://github.com/akai-org/blog).
