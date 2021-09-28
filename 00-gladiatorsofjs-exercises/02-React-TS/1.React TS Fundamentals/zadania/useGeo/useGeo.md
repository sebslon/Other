<h2 align="center">useGeo hook</h2>

<br>

## Wymagana wiedza

- JavaScript, React

## Technologie potrzebne do zadania

- JavaScript, React

## Cele główne

- [ ] Stwórz custom hook `useGeo`, która zwraca następujące wartości:

* `geoData` - obiekt który zawiera longitude i latitude (długość i szerokość geograficzna) zależny od danej lokalizacji
* `toggleListening` - funkcja, która przyjmuje true/false i włącza lub wyłącza nasłuch na geolokalizację

## Przetestuj zadanie

- [ ] Sprawdź czy Twój hook działa poprawnie:

* zwraca poprawny typ danych = `[object, function]`
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
const useGeo = () => {
  // return [geoData, toggleListening]
};
```
