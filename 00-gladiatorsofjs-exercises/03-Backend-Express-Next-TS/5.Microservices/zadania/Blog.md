<h2 align="center">Blog</h2>

<br>

## Wymagana wiedza
- Podstawowa wiedza na temat założenia architektury mikroserwisów
- Podstawowa wiedza na temat Dockera, Docker-Composa
- Podstawowa wiedza na temat RabbitMq
## Technologie potrzebne do zadania

- Express.js + Next.js
- MongoDB lub postgreSQL

## Cele główne

* [ ] Stwórz prosty blog, na którym użytkownicy mogę umieszczać posty, dodawać do nich komentarze oraz reakcje
* [ ] Serwer powinien dodatkowo łączyć się z serwerem Discora i w momencie dodania posta, post ten powinien być dodawany jako wiadomośc na głównym kanale
* [ ] Blog powinien być podzielony na następujące mikroserwiy:
      - za tworzenie i autoryzację użytkowników powinien odpowiadać user-service
      - za posty wraz z komentarzami i reakcjami na nie powinny być obsługiwane przez obsługiwać post-service
      - za dodawanie postów jako wiadomości na serwerze discord powinien być odzpowiedzialny discord-service
      - za przesył informacji pomiędzy frontendem a backendem powinien odpowiadać api-handler-service
* [ ] Frontend powinien być wystawiony jako prosty interfejs graficzny w Next.js i komunikować się tylko z api-handler-service
## Cele opcjonalne do wykonania

* [ ] Brak

## Przydatne linki
- Czym jest architektura mikroserwisów: https://medium.com/hashmapinc/the-what-why-and-how-of-a-microservices-architecture-4179579423a9
- Podstawy mikroserwisów w Node.js: https://nodesource.com/blog/microservices-in-nodejs/
- Dwugodzinny filmik na temat Dockera i Docker-Compose: https://www.youtube.com/watch?v=3c-iBn73dDE
- Czym jest RabbitMq: https://faun.pub/rabbitmq-an-introduction-b84370fcf31
- RabbitMq + Node.js: https://betterprogramming.pub/implementing-rabbitmq-with-node-js-93e15a44a9cc

