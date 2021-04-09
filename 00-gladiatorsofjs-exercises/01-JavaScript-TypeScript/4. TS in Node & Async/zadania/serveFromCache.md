<h2 align="center">Opis zadania serveFromCache </h2>

<br>

## Wymagana wiedza

- Podstawy Javascript
- Podstawy Typescript
- Asynchroniczność

## Technologie potrzebne do zadania

- Typescript
- Javascript

## Cele główne

- [ ] Stwórz fukcjonalność do pobierania i cachowania danych z https://www.googleapis.com/books/v1/volumes?q=clarcson która:
- [ ] Pobierze dane poprzez axiosa/fetcha z open api google books na podstawie danego query
- [ ] Dla każdego query (q=) który wpisze user, funkcja zapiszę plik json w folderze /cache z nazwą która jest slugiem query oraz wysle do użytkownika dane o tym query
- [ ] Ponowne wywołanie danej funkcjonalności z tym samym query powoduje zaserwowanie danych z pliku json

## Cele opcjonalne do wykonania

- [ ] Brak

## Przydatne linki

- Czym jest fetch i jak go używać - https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
- Czym jest Axios i jak działa - https://medium.com/codingthesmartway-com-blog/getting-started-with-axios-166cb0035237

## Kawałek kodu dla lepszego początku!

```javascript
const apiUrl = "https://www.googleapis.com/books/v1/volumes";

const functionWithFetch = (query) => {
  // fetch(apiUrl).then()...
};

const functionWithAxios = (query) => {
  // axios.get(apiUrl).then()...
};
```
