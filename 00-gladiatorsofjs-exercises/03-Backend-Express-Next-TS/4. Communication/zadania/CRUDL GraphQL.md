<h2 align="center">CRUDL GraphQL</h2>

<br>

## Wymagana wiedza
- Solidne podstawy JS-a.
- Asynchroniczność(promise, async/await).
 
## Technologie potrzebne do zadania

- Express.js lub Next.js.
- GraphQL
- mongoDB lub postgreSQL

## Cele główne

* [ ] Zbudowanie funkcjonalności, która będzie miała za zadanie tworzyć, odczytywać, updatować, usuwać i wylistować userów z bazy danych.
* [ ] Każda z funkcjonalności ma być serwowana za pomocą GraphQL.

## Cele opcjonalne do wykonania

* [ ] Brak

## Przydatne linki
- Czym jest GraphQL - https://www.youtube.com/watch?v=eIQh02xuVw4
- Wprowadzenie do GraphQL - https://www.freecodecamp.org/news/a-beginners-guide-to-graphql-86f849ce1bec/
- Budowa podstawowego serwera przy pomocy GraphQL i Exspress.js - https://medium.com/codingthesmartway-com-blog/creating-a-graphql-server-with-node-js-and-express-f6dddc5320e1

## Kawałek kodu dla lepszego początku!

```typescript
//GraphlQL przykład 
const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({}) .... tutaj logika jak wyżej
})
```
