<h2 align="center">Opis zadania WebhookController </h2>

<br>

## Wymagana wiedza

- Podstawy Express.js
- Znajomość axios/fetch

## Cele główne

* [ ] Stwórz dwa serwery A i B. Serwer A powinien wystawiać endpointy:
-  /addUser/:name - dodaje nazwę użytkownika do globalnej tablicy istniejących użytkowników
-  /userLoggedIn/:name - dodaje nazwę użytkownika do globalnej tablicy zalogowanych użytkowników
-  /userLoggedOut/:name - usuwa nazwę użytkownika z globalnej tablicy zalogowanych użytkowników i dodaje ją do globalen tablicy wylogowanych użytkowników
-  /userBoughtProduct/:name - dodaje nazwę użytkownika do globalnej tablicy użytkowników którzy coś zakupili, wraz z ilością zakupów
* [ ] Serwer B powinien posiadać jeden endpoint: 
- /sendData - endpoint ten powinien przyjmować Id użytkownika oraz jeden z czterech eventów:  'userLoggedIn' | 'userLoggedOut' | 'userBoughtProduct' | 'addUser';
* [ ] Dla serwera B napisz klasę Webhook która posiada metodę log. W zależności od otrzymanej nazwy eventu w endpoincie /sendData, klasa ta powinna wysyłać
      za pomocą metody post informacje na odpowiedni endpoint serwera A.
- [ ] W przypadku wywołania /addUser/:name z nazwą użytkownika który jest istnieje, endpoint powinien zwracać informacje o błędzie
- [ ] W przypadku wywołania /userLoggedIn/:name z nazwą użytkownika który jest już zalogowany, endpoint powinien zwracać informacje o błędzie
- [ ] W przypadku wywołania /useLoggedOut/:name z nazwą użytkownika który nie jest zalogowany, endpoint powinien zwracać informacje o błędzie
- [ ] Gdy /userBoughtProduct:/nazwę stało wywołane ponownie dla tej samej nazwy użytkownika, liczba wykonanych zakupów dla użytkownika powinna zostać zinkrementowana
- [ ] Gdy któryś z endpointów zwrócił kod błędu, klasa Webhook powinna wyświetlić o tym informacje, wraz z informacją dlaczego tak się stało

## Cele opcjonalne do wykonania

* [ ] Brak

## Przydatne linki

- Czym są webhooki: https://medium.com/wineofbits/what-is-a-webhook-3327b6e470e4
- Jak stworzyc prosty serwer w Express https://medium.com/weekly-webtips/how-to-create-a-rest-api-with-express-js-and-node-js-3de5c5f9691c
- Kody HTTP stosowane w REST API: https://medium.com/@s.birntachas/http-status-codes-the-ultimate-guide-c7d78130a60a

## Kawałek kodu dla lepszego początku!

```typescript

interface ILogData<T> {
timestamp: string,
data: T
}

type WebhookAction = 'userLoggedIn' | 'userLoggedOut' | 'userBoughtProduct';

class WebhookControler {

public log<T>(action:WebhookAction, data:T) {}

```
