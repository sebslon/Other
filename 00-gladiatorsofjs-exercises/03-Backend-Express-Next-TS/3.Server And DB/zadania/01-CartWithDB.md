<h2 align="center">Opis zadania CartWithDB </h2>

<br>

## Wymagana wiedza

- Podstawy Express.js
- Podstawy REST API
- Znajomość PostgreSQL/MongoDB

## Cele główne

- [ ] Dokonaj refaktoryzacji zadania CartRestApi
- [ ] Wszystkie działania podejmowane na koszyku powinny być zapisywane w bazie danych
- [ ] Przy inicjalizacji serwera, baza danych powinna być zapełniana 10 produktami z API Allegro (dowolnej kategorii)
- [ ] Dodaj logikę związaną z użytkownikami. Aplikacja powinna posiadać możliwość:
- tworzenie użytkownika
- usuwanie użytkownika
- edycja danych użytkownika
- [ ] Użytkownik powinien posiadać id, imię oraz listę produktów które zakupił.

## Cele opcjonalne do wykonania
- [ ] Dodaj autoryzację poprzez JWT Token

## Przydatne linki

-  Bardzo dobra dokumentacja Allegro API - https://developer.allegro.pl/
-  Przykład implementacji JWT Token - https://www.youtube.com/watch?v=wKddzNMDnaQ


```typescript

class UserControler{
public addUser(req:Request,res:Response){}
public deleteUser(req:Request,res:Response){}
public changeAmountOfProduct(req:Request,res:Response){}
}

class CartControler {
public addProductToUserCart(req:Request,res:Response){}
public deleteFromCart(req:Request,res:Response){}
public changeAmountOfProduct(req:Request,res:Response){}
public getProductsAndCalculatePrice(req:Request,res:Response){}
public buyProducts(req:Request,res:Response){}
}
```
