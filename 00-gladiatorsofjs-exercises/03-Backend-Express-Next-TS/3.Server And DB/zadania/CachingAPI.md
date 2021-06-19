<h2 align="center">CachingAPI</h2>

<br>

## Wymagana wiedza
- Express.js lub Next.js.
- Podstawy Redis
- Umiejętność integracji z zewnętrznymi API

## Cele główne

* [ ] Za pomocą Exspress.Js stwórz aplikację wyszukującą karty z API Hearthstona: https://hearthstoneapi.com/#data
* [ ] Skorzystaj z endpointa: /cards/search/{name}
* [ ] Jeżeli karta nie była jeszcze wyszukiwana przez serwer, dane o niej powinny być zapisywane w bazie danych Redis.
* [ ] Jeżeli karta była już wyszukiwana, serwer powinien zwracać informację na jej temat z bazy danych.
* [ ] Dane o karcie które powinny być zwracane przez aplikację to: nazwa karty, jej rzadkość oraz opis

## Cele opcjonalne do wykonania

* [ ] Brak

## Przydatne linki

- Czym jest Redis - https://medium.com/swlh/the-amazing-redis-620a621f3b2
- Czym jest Caching: https://medium.com/system-design-blog/what-is-caching-1492abb92143
- Redis + Node: https://medium.com/swlh/caching-in-node-js-using-redis-3b5400f41699

## Kawałek kodu dla lepszego początku!

```typescript
class HeartsoneController{

 public findCard(req,res){
 const {phraseToFind} = req.body
 const cart = await this.heartStoneHandler.findCart(phraseToFind);
 res.json(cart)
 
}


```
