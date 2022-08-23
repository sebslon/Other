<h2 align="center">Mongo/Postgres CRUD</h2>

<br>

## Technologies

- Express.js
- MongoDB/Postgres

## Goals

- [ ] Create a server with 4 CRUD endpoints, for creating data about cats in a shelter
- [ ] Every Cat should have : name, sex, colour, age
- [ ] Server should be connected with MongoDB and PostgreSQL databases
- [ ] Every endpoint - based on the request body - should switch between databases
- [ ] MongoDB should be handled with Mongoose and Postgres with knex

## Optional

- [ ] Maintain data consistency between Mongo and PostgreSQL. Data that appears / is deleted / modified in the Mongo database should also be added / modified / deleted in the PostgreSQL database

## Links

- Mongoose: https://mongoosejs.com/
- knex: https://www.npmjs.com/package/knex
- crud: https://www.codecademy.com/articles/what-is-crud

## Example

```typescript
class ShelterHandler {
  public createCat(dataToCreateCat) {}
  public deleteCat(id) {}
  public changeCatProperty(id, propertyToChange, newValue) {}
  public adoptAKitten(id) {}
}
```
