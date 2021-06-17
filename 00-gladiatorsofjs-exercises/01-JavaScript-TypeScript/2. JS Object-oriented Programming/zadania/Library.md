<h2 align="center">Opis zadania Library </h2>

<br>

## Wymagana wiedza
- Podstawy Javascript
- Podstawy Typescript
- Podstawy Object Oriented Programming(OOP)
 
## Technologie potrzebne do zadania

- Typescript
- Javascript

## Cele główne

* [ ] Stwórz strukturę danych związaną z biblioteką, pełen opis znajduję się w kodzie poniżej
* [ ] Wypracuj obiekt charakteryzujący książkę
* [ ] Wypracuj obiekt charakteryzujący wypożyczenie
* [ ] Wypracuj obiekt charakteryzujący bibliotekę

## Cele opcjonalne do wykonania

* [ ] Brak

## Przydatne linki

- Czym jest OOP - https://www.freecodecamp.org/news/how-javascript-implements-oop/
- Object w JS - https://www.digitalocean.com/community/tutorials/understanding-objects-in-javascript

## Kawałek kodu dla lepszego początku!

```javascript
class Book {
    // Ma miec: Tytuł, Autora, uuid, losowe zdjęcie oraz krótki opis -- DONE
}

class Booking {
    // Ma mieć: datę wypożyczenia, datę zwrotu( +7d od wypożyczenia), id wypożyczonej, pozycji, jej tytuł. kara
    // Ma umożliwiać: 
    // - wypożyczenie ksiązki (jesli książki nie ma w liście - jest niedostepna/
    // wypożyczona ma zwracać informację) jesli jest dostępna usuwać książkę z listy
    // dostępnych, 
    // - zwrot - jeśli odbędzie się terminowo kara jest 0 - jesli nie - 
    // każdy dzień zwłoki to naliczenie jakiejś kary. 
}

class Library {
    // Ma miec: listę książek, listę wypożyczeń oraz listę wypożyczonych książek
    // Ma umożliwiać: 
    // - dodawanie książek do listy
    // - usuwanie książek z listy
    // - wypożyczanie książki dla usera X
    // - oddanie wypożyczania książki
}
```
