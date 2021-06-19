<h2 align="center">ApiActorWithMemory</h2>

<br>

## Wiedza pitrzebna do zadania
- Podstawowa wiedza na temat współbieżności aplikacji
- Wiedza na temat architektury mikroserwisów
- Wiedza na temat tego czym jest ,,actor model''

## Technologie potrzebne do zadania

- Express.js + Next.js
- RabbitMq
- Docker, Docker-Compose
- Cron
- PostgreSQL/MongoDb
- Nodemailer

## Cele główne

* [ ] Stwórz aplikację wysyłającą wiadomości do użytkowników w określonych godzinach.
* [ ] Aplikacja powinna pozwalać na stworzenie użytkownika i zapisanie go w bazie danych. Użytkownik powinien posiadać emaila, hasło, status: admin || zwykły, oraz listę emaili które nie powinny być do niego wysyłane
* [ ] Użytkownik może dodać emaili wysłany w określonej godzinie do emaili które nie powinny być do niego wysyłane, poprzez endpoint /stopSendingEmail/:userId?emailId='emailKtóryWyłączyć'
* [ ] Aplikacja powinna wystawiać endpoint /addRequest który przyjmuje następujące informację: treść emaila, godzina wysłania go oraz jaka grupa użytkowników powinna go dostać - admini, zwykli lub wszyscy.
* [ ] Informacje na temat emaili powinny być zapisywane w bazie danych. Jeden email może mieć wiele godzin nadawania.
* [ ] Email powinien otrzymywać także jeden z przygotowanych templatów zapisanych w bazie danych. Dodatkowo można dodać template dla emailia za pomocą endpointu /addEmailTemplate
* [ ] Aplikacja powinna się dzielić na poszczególne mikroserwisy:
* [ ] ClientHandler - odpowiada za komunikację pomiędzy klientem a mikroserwisami. Przyjmuje wszystkie requesty i rozsyła je do odpowiednich mikroserwisów.
* [ ] UserHanlder - odpowiada za akcje związane z użytkownikami - tworzenie,modyfikowanie, usuwanie, dodawanie emaili które nie powinny byc do niego wysyłane.
* [ ] ChronHandler - odpowiada za odpytywanie bazy danych z zapisanych emaili i ich godzin. W momencie gdy zbliża się godzina 14, wszystkie emailie które powinny byc wysłane o tej godzinie powinny być przesłane do serwisu EmailHandler
* [ ] EmailHandler - odpowiada za wysyłanie emaili


## Cele opcjonalne do wykonania

* [ ] Brak

## Przydatne linki
* [ ] Czym jest ,,aktor model'' - https://medium.com/@alex_karaberov/everything-you-always-wanted-to-know-about-the-actor-model-but-were-afraid-to-ask-b6eee8722953

