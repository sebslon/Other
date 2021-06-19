<h2 align="center">Mongo-Postgres-CRUD</h2>

<br>

## Wymagana wiedza

- Podstawy MongoDb/Mongoose oraz Postgress-a
- Podstawy Exspress.js

## Cele główne
- [ ] Stwórz serwer posiadający 4 endpointy CRUD, pozwalające na tworzenie danych na temat kotów w schronisku
- [ ] Kot powinien posiadać dane takie jak: imię, płeć, kolor, wiek.`
- [ ] Serwer powinien być połączony z bazą danych MongoDB oraz Postgress
- [ ] Każdy endpoint na podstawie body request-a który otrzymuje powinien przełączać się pomiędzy bazami danych
- [ ] MongoDb powinno być ubsługiwane przez ODM Mongoose, a Postgress bibliotekę knex

## Cele opcjonalne do wykonania

* [ ] Zachowaj spójność danych pomiędzy bazą Mongo i PostgreSQL. Dane które pojawiają się/są usuwane/modyfikowane w bazie Mongo powinny być też dodawnane/modyfikowane/usuwane w bazie PostgreSQL

## Przydatne linki
- Dokumentacja Mongoose: https://mongoosejs.com/
- Dokumentacja knex: https://www.npmjs.com/package/knex
- Czym jest crud: https://www.codecademy.com/articles/what-is-crud


## Kawałek kodu dla lepszego początku!

```typescript

class ShelterHandler {

public createCat(dataToCreateCat){}
public deleteCat(id){}
public changeCatProperty(id,propertyToChange,newValue){}
public adoptAKitten(id){}
}



```
