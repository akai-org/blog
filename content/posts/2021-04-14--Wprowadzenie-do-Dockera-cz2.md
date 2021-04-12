---
title: Wprowadzenie do Dockera, cz. 2
date: "2021-04-14"
template: "post"
draft: false
slug: "/posts/docker2/"
category: "dev-ops"
tags:
  - "Docker"
  - "DevOps"
description: "Część druga z serii artykułów wprowadzających do Dockera"
---

![Dockerowy_wieloryb](/media/docker.png)

### Uruchamianie kontenerów Dockera
W [poprzedniej części](/posts/docker1/) pisałem o podstawowych pojęciach w Dockerze i poznaliśmy pierwsze polecenie
pozwalające na zobaczenie działania Dockera w praktyce. W tym wpisie skupię się na uruchamianiu kontenerów oraz opcjach,
jakie mamy do dyspozycji w trakcie ich uruchamiania.

### Tryb interaktywny
Zacznijmy od trybu interaktywnego. Uruchamiamy go przez dodanie opcji `-ti` podczas uruchamiania konsoli. Pozwala on na
wymianę informacji pomiędzy naszą konsolą a programem uruchomionym w kontenerze w czasie rzeczywistym. Jeżeli uruchomimy
kontener na podstawie obrazu Ubuntu poleceniem:
```
docker run -ti ubuntu
```
to natychmiast po uruchomieniu kontenera dostaniemy możliwość interakcji z domyślnie uruchamianym programem w tym kontenerze, 
tzw. entrypointem. W przypadku systemu Ubuntu jest to `/bin/bash -c`, ale w zależności od budowy obrazu entrypoint może 
się różnić. I tak na przykład w obrazie `redis` domyślnym entrypointem będzie program `redis`. Aby wyjść z trybu 
interaktywnego, należy użyć kombinacji klawiszy `ctrl + d`.

### Tryb odłączony
Tryb odłączony (ang. detached) jest wywoływany za pomocą polecenia `-d`. Potrzeba jego użycia pojawia się gdy, proces, który
jest uruchamiany w ramach entrypointa, nie potrzebuje interakcji z naszej strony, a dodatkowo nie chcemy, aby dane wyjściowe
entrypointa pojawiały się w naszej konsoli. Dzięki temu mamy możliwość dalszego pracowania w niej. Ważne jest, aby 
zrozumieć w tym miejscu jedną rzecz: technicznie celem kontenera jest tylko i wyłącznie wykonać polecenie entrypoint. 
Kiedy polecenie entrypoint zakończy się, to kontener Dockera jest automatycznie zatrzymywany. Stąd, jeżeli nie wejdziemy 
do kontenera Ubuntu w trybie interaktywnym `-it` tylko odłączonym `-d` to kontener zostanie zatrzymany niemal natychmiast 
po uruchomieniu się. Możemy jednak sprawdzić działanie opcji `-d` na kontenerze redis. Jeżeli uruchomimy go poleceniem:
```
docker run -d redis
```
a następnie wylistujemy wszystkie uruchomione kontenery poleceniem 
```
docker ps
```
to zobaczymy, że nasz redis działa i ma się dobrze. Pozostanie tak, dopóki sami go nie zakończymy.

### Zarządzanie kontenerami i obrazami
Mamy możliwość zarządzania kontenerami oraz obrazami obecnymi na naszym komputerze za pomocą serii poleceń:
- Aby wylistować wszystkie *uruchomione* kontenery używamy komendy: `docker ps`.
- Aby wylistować *wszystkie* kontenery używamy komendy: `docker ps -a`. Jest to lista wszystkich kontenerów jakie zostały 
uruchomione oraz zatrzymane.
- Aby zatrzymać działający kontener, używamy komendy: `docker stop <NAZWA_LUB_ID_KONTENERA>`. Nazwę lub ID kontenera pozyskujemy
przez polecenie `docker ps`. Pojawiają się one w pierwszej i ostatniej kolumnie. Nazwę możemy też nadać sami o czym więcej 
za chwilę.
- Aby usunąć *zatrzymany* kontener używamy komendy: `docker rm <NAZWA_LUB_ID_KONTENERA>`. Powoduje to usunięcie kontenera
i wszystkich zmian które zostały w nim dokonane (z wyjątkiem edycji wolumenów, o czym więcej za chwilę)
- Aby wylistować wszystkie pobrane i zbudowane obrazy dostępne na naszym komputerze używamy komendy: `docker images`.
- Aby usunąć obraz, na podstawie którego nie jest zbudowany żaden kontener używamy komendy: `docker rmi <NAZWA_LUB_ID_OBRAZU>`

### Uruchamianie kontenera z ustawionymi zmiennymi środowiskowymi
Za pomocą opcji `-e` możemy ustawić zmienne środowiskowe w kontenerze. Jeżeli chcemy uruchomić [kontener bazy danych MySQL](https://hub.docker.com/_/mysql)
to wymaga on od nas podania jednej z trzech zmiennych środowiskowych. My podamy mu MYSQL\_ROOT\_PASSWORD:
```
docker run -d -e MYSQL_ROOT_PASSWORD=pass mysql
```
Do zmiennej środowiskowej kontener może uzyskać dostęp w taki sam sposób, w jaki uzyskiwałby go Linux w formie zwyczajnego, 
tradycyjnego systemu. MySQL używa podanej zmiennej środowiskowej, aby zasetupować hasło dla roota do bazy danych. 

### Uruchamianie kontenera z własną nazwą
Kontenery możemy nazwać. Służy temu opcja `--name`:
```
docker run -d --name=test redis
```
Jeżeli po uruchomieniu tego polecenia wylistujemy kontenery `docker ps` to zobaczymy w skrajnie prawej kolumnie, że nasz 
kontener otrzymał nazwę, którą mu nadaliśmy.

### Uruchamianie kontenera z mapowaniem portów
Wróćmy do kontenera z bazą danych MySQL. Załóżmy, że chcemy mieć do niej dostęp z naszego komputera lokalnego. Domyślnie
kontenery nie udostępniają hostowi (naszemu komputerowi) swoich portów. W związku z tym nie będziemy w stanie połączyć
się do takiej bazy przez klienta MySQL. Jeżeli natomiast uruchomimy obraz MySQL z opcją:
```
-p <PORT_HOSTA>:<PORT_KONTENERA>
```
to dokonamy przekierowania żądań wysłanych na podany port hosta na podany port kontenera. Inaczej mówiąc po wykonaniu
polecenia:
```
docker run -d -e MYSQL_ROOT_PASSWORD=pass -p 3306:3306 mysql
```
będziemy w stanie połączyć się z bazą danych uruchomioną na tym kontenerze przez adres localhost:3306. Spróbujcie sami!
Można do tego użyć wbudowanego narzędzia w IDE JetBrains (jak np. PHPStorm czy IntelliJ, które są darmowe dla studentów i
pracowników Politechniki) lub innego klienta jak na przykład MySQL workbench. Oczywiście porty można zmapować dowolnie, 
czyli możemy osiągnąć ten sam efekt, ale na porcie 3307 przez polecenie:
```
docker run -d -e MYSQL_ROOT_PASSWORD=pass -p 3307:3306
```

### Uruchamianie kontenera z podpiętymi katalogami
Pisałem wcześniej o ostatniej warstwie w kontenerze Dockera. Jest ona nietrwała, to znaczy zmiany w niej
dokonane przepadają po usunięciu kontenera. Jest jednak sposób, aby przechować wyniki działań kontenera. Załóżmy, że na 
komputerze hosta znajduje się katalog `/home/tutorial/notatki`. Możemy sprawić, aby jego treść była widzialna i edytowalna
wewnątrz kontenera Dockera. W tym celu wykonujemy polecenie:
```
docker run -ti -v /home/tutorial/notatki:/notatki ubuntu
```
W kontenerze pojawia nam się katalog `/notatki` który jest zlinkowany do katalogu `/home/tutorial/notatki` hosta. Zmiany
dokonane tutaj przez kontener zostaną zapisane w systemie plików hosta a zmiany dokonane przez hosta lub inny kontener 
w katalogu `/home/tutorial/notatki` będą widoczne w tym kontenerze. Opcję `-v` używamy w sposób następujący:
```
-v <KATALOG_HOSTA>:<KATALOG_KONTENERA>
```
Katalog nie musi być pusty, a w kontenerze zostanie utworzony, jeżeli nie istnieje. Możemy w ten sposób podpinać również 
pojedyncze pliki, co może być przydatne na przykład przy przekazywaniu konfiguracji do kontenerów z serwerem nginx:
```
-v /custom/dir/site.conf:/etc/nginx/conf.d/default.conf
```
W ten sposób plik `site.conf` jest widoczny w kontenerze jako `default.conf`.

To tyle z najbardziej podstawowych działań związanych z uruchamianiem kontenerów Dockera. Następnym razem opisane zostanie 
tworzenie własnych obrazów Dockera przy pomocy pliku Dockerfile.


#### Źródła
* [Docker Hub](https://hub.docker.com/)
* [Docker. Projektowanie i wdrażanie aplikacji, Jaroslaw Krochmalski](https://helion.pl/ksiazki/docker-projektowanie-i-wdrazanie-aplikacji-jaroslaw-krochmalski,docpro.htm#format/d)

*- Dawid Dziedzic*

> Jeśli masz jakieś uwagi lub sugestie podeślij nam je na adres [kontakt@akai.org.pl](mailto:kontakt@akai.org.pl) lub kontrybuuj do naszego [repozytorium](https://github.com/akai-org/blog).
