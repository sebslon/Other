<h2 align="center">Opis testów do zadania searchOnFields </h2>

<br>

## Wymagana wiedza
- Solidne podstawy JS-a.
- Podstawowa znajomość testów z użyciem Jest
 
## Technologie potrzebne do zadania

- Typescript
- Jest

## Cele główne

* [ ] Wykonaj testy zadania opisanego tutaj - https://github.com/Przemocny/gladiators_of_js_questlist/blob/main/js_functional/searchOnFields.md
* [ ] Metoda zwracać błąd w przypadku gdy **phrase** ma mniej niż 3 litery
* [ ] Metoda ma zwracać błąd w przypadku gdy **data** nie będzie typi array
* [ ] Metoda ma zwracać błąd w przypadku gdy **conditions** nie będzie zawierać typów prostych
* [ ] Metoda ma zwracać wyniki posortowane alfabetycznie
* [ ] Przetestuj przypadek w którym przeszukiwane są tylko pola typu **number**, następnie pola typu **string**

## Cele opcjonalne do wykonania

* [ ] Brak

## Przydatne linki

- Dokumentacja Jest - https://jestjs.io/docs/en/getting-started

## Kawałek kodu dla lepszego początku!

```javascript
const stringsAndNumbers = ['string', 'number']

function searchOnFields(data, phrase, conditions = stringsAndNumbers) {
  // ...
}
```
