<h2 align="center">MLM APP</h2>

<br>

## Wymagana wiedza
- Express.js lub Next.js.
- MongoDb/PostgreSQL
- Nodemailer

## Cele główne

* [ ] Stwórz aplikację naśladującą marketing wielopoziomowy
* [ ] Aplikacja powinna posiadać możliwość tworzenia, edytowania oraz usuwania użytkowników.
* [ ] Każdy użytkownik powinien posiadać reflink, dzięki któremu inni użytkownicy mogą zalogować się poprzez Googla/FB/Githuba
* [ ] Za każdą zalogowaną osobę z reflinku użytkownik dostaje 10 punktów
* [ ] Użytkownicy zalogowani z poziomu reflinku mogę wygenerować własny reflink, mający takie samo zastosowanie jak reflink pierwszego użytkownika,
      z tą różnicą, że ten reflink przy tworzeniu kolejnego użytkownika przyznaje dodatkowe 4 punkty pierwszemu użytkownikowi
      
## Cele opcjonalne do wykonania
* [ ] Stwórz cztery poziomy prowizji od reflinku, zamiast dwóch:
* [ ] Pierwszy poziom powinien przyznawać 10 punktów użytkownikowi
* [ ] Drugi poziom powinien przyznawać 8 punktów użytkownikowi
* [ ] Trzeci poziom powinien przyznawać 6 punktów użytkownikowi
* [ ] Czwarty poziom powinien przyznawać 4 punktów użytkownikowi

## Przydatne linki

- Czym jest MLM - https://wlasnybiznes.pl/mlm-co-to-jest-biznes-mlm

## Kawałek kodu dla lepszego początku!

```typescript
class MLMHandler{

public handleAddingProvisionsToUsers(reflink:string){}

```
