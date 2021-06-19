<h2 align="center">CRUDL GraphQL</h2>

<br>

## Wymagana wiedza
- Podstawowa wiedza na temat założenia architektury mikroserwisów
- Podstawowa wiedza na temat Dockera, Docker-Composa
- Podstawowa wiedza na temat RabbitMq
## Technologie potrzebne do zadania

- Socket.io
- Express.js + Next.js
- MongoDB lub postgreSQL

## Cele główne

* [ ] Stwórz aplikację czatu.
* [ ] Czat powinien być stworzony z trzech mikroserwisów - frontend-service, socket-service, db-service
* [ ] Frontend-service powinien być aplikacją Next.js, udostępniającą użytkownikowi prosty interfejs graficzny czatu.
* [ ] Socket-service powinien zajmować się przesyłaniem informacji pomiędzy klientami na temat zdarzeń:
- wysłanie wiadomości
- dodanie do wiadomości + lub -
- dołączenie użytkownika do czatu
- odejściem użytkownika z czatu
* [ ] Socket-service powinien także dla każdego z tych zdarzeń przesyłać wiadomości na jego temat(jaki użytkownik dołączył, treść wiadomości, +/- pod wiadomością) do serwisu db-service
* [ ] Db-service ma zajmować się zapisywaniem i odczytem wiadomości do bazy danych.
* [ ] W momencie dołączenia do czatu nowego użytkownika, socket-service powinien dodatkowo pobierać informacje na temat ostatnich 20 wiadomości,i je wyświetlać.
* [ ] Aplikacja powinna obsługiwać też sytuację w której użytkownik będzie chciał zobaczyć więcej niż 20 ostatnich wiadomości

## Cele opcjonalne do wykonania

* [ ] Brak

## Przydatne linki
- Socket.io + Node.js + Microserwisy - https://medium.com/swlh/real-time-exchange-information-with-microservices-and-nodejs-e6bf6623bca6

