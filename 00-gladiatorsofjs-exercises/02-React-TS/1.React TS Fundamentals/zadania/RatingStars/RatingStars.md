<h2 align="center">Rating Stars</h2>

<br>

## Wymagana wiedza

- React, JavaScript

## Technologie potrzebne do zadania

- React, JavaScript

## Cele główne

- [ ] Twoim zadaniem jest stworzyć komponenty funkcyjne `RatingsList`, `AverageScore`, `Rating`.

- [ ] `RatingsList`:

* w propsach otrzymuje `ratings`,
* wyświetla komponent `AverageScore`,
* oraz listę pierwszych 10 elementów tablicy ratings w komponentach `Rating`

- [ ] `AverageScore`:

* w propsach otrzymuje `ratings`,
* zawiera 5 ikon gwiazdek (pełnych/pustych),
* komponent liczy średnią z ocen zaokrąglając ją do pełnej liczby całkowitej,
* jeśli przykładowo średnia ocena to 4.3 to komponent ma zamalować na żółto pierwsze 4 gwiazdki a ostatnią 5 ma zostawić na szaro

- [ ] `Rating` ma mieć:

* w propsach otrzymuje `rating`,
* wyświetla:
  - imię i nazwisko wystawiającego
  - jego ocenę w formie gwiazdek - podobnie do AverageScore
  - treść komentarza do oceny, przycięta do długości 120 znakoów

## Kawałek kodu dla lepszego początku!

```javascript
const RatingsList = ({ ratings }) => {
  return null;
};

const AverageScore = ({ ratings }) => {
  return null;
};

const Rating = ({ rating }) => {
  return null;
};
```
