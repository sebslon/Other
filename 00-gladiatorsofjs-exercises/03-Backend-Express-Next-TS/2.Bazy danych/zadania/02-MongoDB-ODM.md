<h2 align="center">MongoDB-ODM</h2>

<br>

## Wymagana wiedza

- MongoDb

## Cele główne
- [ ] Stwórz bazę danych zawierającą dane o użytkownikach twojej aplikacji
- [ ] Każdy użytkownik powinien posiadać imię, datę urodzenia(DD-MM-YYYY), listę rzeczy które lubi, oraz tablicę znajomych, trzymającą id innych użytkowników
- [ ] Stwórz prostu ODM naśladujący funkcje Mongoose:
- [ ] .create()
- [ ] .findById()
- [ ] .findByIdAndDelete()
- [ ] .findByIdAndUpdate()
- [ ] Dodatkowo powinien pozwalać na:
- znajdywanie wszystkich użytkowników którzy urodzili się przed podaną datą
- znajdywanie wszystkich użytkowników którzy urodzili się po podanej dacie
- znajdywanie wszystkich użytkowników którzy lubią określoną rzecz
- znajdywanie wszystkich ludzi posiadających wśród swoich znajomych osobę o podanym ID.
- [ ] Każde z tych zapytań powinno zwracać wszystkie informacje dotyczące znalezionego użytkownika

## Cele opcjonalne do wykonania
- [ ] Wybierz 5 dodatkowych funkcji udostępnianych przez Mongoose i je zaimplementuj

## Przydatne linki
- CRUD za pomocą czystego MongoDB: https://javascript.plainenglish.io/use-mongodb-with-node-js-14781ec11c0a


## Kawałek kodu dla lepszego początku!

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
