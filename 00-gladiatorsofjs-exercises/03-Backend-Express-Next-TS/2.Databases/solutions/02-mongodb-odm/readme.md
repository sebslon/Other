<h2 align="center">MongoDB ODM</h2>

<p align="center" style="color:red; font-weight: bold;">Not finished</p>

<br>

- MongoODM is a simple ODM that mimics the functionality of Mongoose. It allows you to create, read, update and delete data from a MongoDB database.
- MongoODM implementation: `src/database/tools/own-mongo-odm.ts`
- Run tests with `yarn jest`

## Required Knowledge

- MongoDB

## Main Goals 

- [ DONE ] Create a database containing data about users of your application
- [ DONE ] Each user should have a name, date of birth (DD-MM-YYYY), a list of things they like, and an array of friends, holding the id of other users
- [ ] Create a simple ODM that mimics the functionality of Mongoose:
  - [ DONE ] .create()
  - [ DONE ] .findById()
  - [ DONE ] .findByIdAndDelete()
  - [ DONE ] .findByIdAndUpdate()
  - [ ] Additionally, it should allow you to:
    - find all users who were born before a given date
    - find all users who were born after a given date
    - find all users who like a given thing
    - find all people who have a given ID in their friends.
  - [ ] Each of these queries should return all information about the found user

## Optional Goals

- [ ] Choose 5 additional functions provided by Mongoose and implement them

## Useful Links

- CRUD with pure MongoDB: https://javascript.plainenglish.io/use-mongodb-with-node-js-14781ec11c0a

## Tips

- You can use the following code as a boilerplate:

```typescript
class OwnODM {

public create(data){}
public findById(id){}
public findByIdAndDelete(id){}
public findByIdAndUpdate(id,dataAboutUpdate){}
public findAllUsersBornBeforeDate(date:string){}
public findAllUsersBornAfterDate(date:string){}
public findAllUsersWhoLikesGivenItem(item:string){}
public findAllUsersWithGivenIdInFriends(id:string){}

}
```
