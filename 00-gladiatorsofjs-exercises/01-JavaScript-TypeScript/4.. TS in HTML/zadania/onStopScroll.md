<h2 align="center">On Stop Scroll</h2>

<br>

## Wymagana wiedza

- Podstawy html oraz JavaScript, CSS


## Technologie potrzebne do zadania

- HTML, Podstawy JavaScript, CSS

## Cele główne

* [ ] Stwórz skrypt, który działa wg. poniższych zasad:
- dodaje do elementu `body` klasę `scrolling` jeśli użytkownik scrolluje,
- dodaje do elementu `body` klasę `not-scrolling` jeśli użytkownik nie scrollował od przynajmniej `500ms`, jednocześnie usuwając klasę `scrolling`

* [ ] Stwórz w elemencie `body` diva o id `sticky__menu` który działa w oparciu o klasy `scrolling/not-scrolling`:
- `#sticky__menu` ma miec `position:fixed` i ma być "przyklejony" do górnej części ekranu
- `#sticky__menu` ma mieć `width: 100px` oraz `height: 50px`, jeśli aktualnie występuje w klasie `scrolling`,
- `#sticky__menu` ma mieć `width: 100%` oraz `height: 80px`, jeśli aktualnie występuje w klasie `not-scrilling`,
- `#sticky__menu` ma animować zarówno wysokość jak i szerokość w czasie .3s

## Przydatne linki

- Właściwości window - https://www.w3schools.com/jsref/obj_window.asp

## Kawałek kodu dla lepszego początku!

```html
<body>
    <div>
    </div>
</body>
```
