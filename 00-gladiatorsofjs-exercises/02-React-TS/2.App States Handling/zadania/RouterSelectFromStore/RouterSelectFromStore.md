<h2 align="center">Router Select from Store</h2>

<br>

## Wymagana wiedza

- JavaScript, React

## Technologie potrzebne do zadania

- JavaScript, React, Redux

## Cele główne

- [ ] Stwórz store za pomocą Reduxa lub ContextAPI, połączony z aplikacją, który zawiara array z itemami np w strukturze:

```javascript
const store = {items:["...",...]}
```

- [ ] Stwórz Router w którym będą 2 routy:

* `<ItemsListView>` na /items - pokazujący listę itemów
* `<ItemDetailView>` na /items/${id} - pokazyjący jeden item

- [ ] Stwórz taką funkcjonalność w aplikacji, aby:

* przy zmianie routa lub na GET `/items/<id>` wybierało ze store item o odpowiednim indexie i podawało item do routa `ItemDeailView` w propie item.

## Przydatne linki

- ContextAPI - https://pl.reactjs.org/docs/context.html#api
- React Redux - https://react-redux.js.org/
- ReactRouter - https://reactrouter.com/
- ReactRouter hooks - https://reactrouter.com/web/api/Hooks
