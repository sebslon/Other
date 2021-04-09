<h2 align="center">Next Awesome SCSS Grid</h2>

<br>

## Wymagana wiedza

- Podstawy html oraz JavaScript, SASS, Flexbox


## Technologie potrzebne do zadania

- Podstawy html oraz JavaScript, SASS, Flexbox

## Cele główne

* [ ] Wykorzystując SASS oraz flex-box, stwórz grid a`la Bootstrap 4:
- grid ma być wg podejścia mobile first i ma mieć podział na 10 column - col-10 zajmuje 100% szerokości, col-1 zajmuje 10% szerokości,
- do wygenerowania klas związanych z kolumnami oraz szerokością ekranu użyj pętli for,
- w klasach .flex-column i .flex-row domyślna pozycja elementów ma być na środku w pionie i w poziomie oraz domyślnie elementy nie mieszczące się w poprzednim wierszu mają przeskakiwać do następnych (wrap)

* [ ] Klasy do wygenerowania:
- flex-column, flex-row
- flex-sm-column, flex-sm-row, flex-md-column, flex-md-row, flex-lg-column, flex-lg-row, flex-xl-column, flex-xl-row
 - col-* (od col-1 do col-10)
 - col-sm-*, col-md-*, col-lg-*, col-xl-*

 * [ ] Po napisaniu kodu SASS wygeneruj plik CSS


## Przydatne linki

- Pętla w SASS - https://sass-lang.com/documentation/at-rules/control/for?fbclid=IwAR31fpA8qiceF_FPghRdFnzwldrRhs62tzg4FQfHVvK5zdFylUbZR8xq_08
- FlexBox - https://developer.mozilla.org/pl/docs/Learn/CSS/CSS_layout/Flexbox

## Kawałek kodu dla lepszego początku!

```scss
.flex-column {},
.flex-sm-column {},
.flex-sm-row {}, 
.flex-md-column {}, 
.flex-md-row {}, 
.flex-lg-column {}, 
.flex-lg-row {}, 
.flex-xl-column {}, 
.flex-xl-row {}
```
