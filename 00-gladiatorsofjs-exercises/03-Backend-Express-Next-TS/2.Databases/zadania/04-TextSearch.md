<h2 align="center">TextSearch</h2>

<br>

## Wymagana wiedza

- Podstawy MongoDb/Mongoose oraz Postgress-a
- Podstawy Exspress.js

## Cele główne
- [ ] Stwórz serwer połączony z MongoDb i Postgress
- [ ] Serwer przy inicjalizacji powinien czyścić obie bazy danych, oraz pobierać nowe informacje na temat dań z API: https://www.themealdb.com/ (minimalnie 10 dań)
- [ ] Każda baza danych powinna otrzymać unikalne dania przy inicjalizacji serwera
- [ ] Dla obu baz danych napisz odpowiednie funkcje, umożliwiające wyszukiwanie w bazie danych potraw na podstawie tekstu
- [ ] Funkcje te powinny wyszukać każdy posiłek zawierajacy w swoich polach szukaną frazę
- [ ] Serwer powinien wystawiać endpoint /findMeal?phraseToSearchBy=Wyszukiwana fraza
- [ ] Endpoint ten powinien zwracać wyszukane dane z obu baz danych

## Cele opcjonalne do wykonania
- [ ] Informacje o pobieranych posiłkach, powinny być w momencie przetwarzane w celu pozbycia się znaków specjalnych

## Przydatne linki
- Dokumentacja Mongoose: https://mongoosejs.com/
- Dokumentacja knex: https://www.npmjs.com/package/knex

## Kawałek kodu dla lepszego początku!

```typescript

class TextSearchHandler {

public findDishesByText(text:string){
this.findDishesByTextInMongo(text);
this.findDishesByTextInPostgreSQL(text);
}

private findDishesByTextInMongo(text){}
private findDishesByTextInPostgreSQL(text){}

```

