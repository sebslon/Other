<h2 align="center">Opis zadania pagination </h2>

<br>

## Wymagana wiedza

- Solidne podstawy JS-a.

## Cele główne

- [ ] Stwórz funkcję paginateArray, która przyjmuje jako 1 argument tablicę, a jako 2 argument obiekt settings z następującymi kluczami :
  - „actualPageIndex” - numer strony
  - „entriesOnPage” – ilośc obiektów na pojedynczej stronie
- [ ] Funkcja zwraca **entriesOnSelectedPage**, który jest arrayem podzielonym według ustawień z settings

## Cele opcjonalne do wykonania

- [ ] Brak

## Przydatne linki

- Jak działa i czym jest paginacja - https://codereview.stackexchange.com/questions/183417/pagination-algorithm-in-js

## Kawałek kodu dla lepszego początku!

```javascript
// actualPageIdx to index wybranej strony
// entriesOnPage to maksymalna zwracana ilość elementów z dataEntries dla wybranej strony

const paginateArray = (dataEntries, settings) => {
  // ...
  // return entriesOnSelectedPage
};
```
