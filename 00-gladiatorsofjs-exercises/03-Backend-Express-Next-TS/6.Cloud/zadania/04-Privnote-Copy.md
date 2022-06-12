<h2 align="center">Privnote-Copy</h2>

<br>

## Wymagana wiedza
- Znajomość architektury mikroserwisów
- Podstawowa wiedza na temat deplopymentu na instancji EC2 AWS

## Technologie potrzebne do zadania

- EC2 AWS
- Exspress
- Docker
- MongoDb/PostgreSQL

## Cele główne
* [ ] Skopiuj działanie aplikacji: https://privnote.com za pomocą architektury mikroserwisów
* [ ] Aplikacja powinna składać się z czterech mikroserwisów
- frontend-for-writing-note: strona pozwalająca na napisanie notatki i uzyskanie do niej linku
- frontend-for-reading: strona pozwalająca na odczytanie notatki. W momencie jej odczytywania notatka powinna być usuwana z bazy danych
- backend-for-writing-note: aplikacja exspressa zajmująca się zapisywaniem notatek oraz generowaniem linku dzięki któremu notatka może zostać odczytana
- backend-for-reading-note: aplikacja exspressa usuwająca notatkę z bazy danych po jej przeczytaniu
* [ ] Mikroserwisy powinny komunikować się pomiędzy sobą za pomocą Amazon SQS
* [ ] Wystaw aplikację na AWS EC2

## Cele opcjonalne do wykonania
* [ ] Przy tworzeniu notatki, aplikacja powinna ją szyfrować oraz zwracać jej twórcy klucz umożliwiający jej odczytanie
* [ ] Przy odczytywaniu notatki aplikacja powinna pytać o klucz do jej odszyfrowania. Jeżeli zostanie podany błędny klucz notatka powinna zostać usunięta, bez możliwości jej odczytania

## Przydatne linki
- Czym jest Amazon SQS - https://aws.amazon.com/sqs/

- Jak korzystać z Amazon SQS + Node.js - https://medium.com/@drwtech/a-node-js-introduction-to-amazon-simple-queue-service-sqs-9c0edf866eca
