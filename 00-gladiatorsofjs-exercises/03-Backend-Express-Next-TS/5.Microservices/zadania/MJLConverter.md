<h2 align="center">CRUDL GraphQL</h2>

<br>

## Wymagana wiedza
- Podstawowa wiedza na temat biblioteki MJML
- Podstawowa wiedza na temat Dockera, Docker-Composa
- Podstawowa wiedza na temat RabbitMq

## Technologie potrzebne do zadania

- Express.js + Next.js
- MongoDB lub postgreSQL
- Nodemailer

## Cele główne

* [ ] Stwórz trzy mikroserwisy - ClientConnector, MJMLConverter, EmailSender
* [ ] Mikroserwis ClientConnector powinien otrzymywać za pomocą endpointu /sendEmailWithPhrase tablicę emaili, oraz tekst który ma zostać wysłany w emailu
* [ ] ClientConnector przesyła te informacje do mikroserwisu MJMLConverter który przygotowuje email za pomocą biblioteki MJML, z otrzymanego tekstu.
* [ ] Przygotowany email jest przesyłany do mikroserwisu EmailSender, który jest odpowiedzialny za wysłanie emaili.
* [ ] W przypadku jakiegokolwiek błędu, informacja o nim powinna być wysyłana do mikroserwisy ClientConnector i wyświetlana.
* [ ] Frontend powinien być wystawiony jako prosty interfejs graficzny w Next.js i komunikować się tylko z api-handler-service

## Cele opcjonalne do wykonania

* [ ] Mikroserwis MJMLConverter powinien posiadać cztery różne templaty dla emaili. Klient powinien móc za pomocą odpowiedniego parametru wybrać który z nich powinien zostać użyty.

## Przydatne linki
- Dokumentacja MJML: https://mjml.io/
- Jak używać MJML: https://medium.com/tech-tajawal/developing-responsive-emails-with-mjml-framework-452f4e6322cd


