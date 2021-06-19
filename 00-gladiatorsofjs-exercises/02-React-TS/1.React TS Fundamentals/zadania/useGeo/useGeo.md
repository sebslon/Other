<h2 align="center">useGeo hook</h2>

<br>

## Wymagana wiedza

- JavaScript, React

## Technologie potrzebne do zadania

- JavaScript, React

## Cele główne

- [ ] Stwórz custom hook `useGeo`, który dodaje do komponentu poniższe właściwości:

* `geoData` - zwraca wszystkie informacje geolokalizacyjne z window
* `toggleListening` - true/false - akcja, która przyjmuje true/false i włacza lub wyłącza nasłuch na geolokalizacji

## Przetestuj zadanie

- [ ] Sprawdź czy Twój hook działa poprawnie:

* zwraca poprawny typ danych = `[boolean, function]`
* włącza i wyłącza nasłuch na geolokalizacji
* zwraca latitude i longitude

- [ ] Zamockuj window oraz metody niezbędne do geolokalizacji ustawiając:

* defaultowo lat i long na Londyn
* ustawiając defaultowo nasłuch na wyłączony

## Przydatne linki

- latitude i longitude - https://www.latlong.net/
- Geolokacja w JS - https://developer.mozilla.org/pl/docs/Web/API/Geolocation_API
- Tworzenie własnych hooków - https://pl.reactjs.org/docs/hooks-custom.html

## Kawałek kodu na lepszy początek

```javascript
const useGeo = (ref) => {
  // return [geoData, toggleListening]
};
```
