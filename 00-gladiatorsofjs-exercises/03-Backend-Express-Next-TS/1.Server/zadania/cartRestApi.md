<h2 align="center">Opis zadania CartRestApi </h2>

<br>

## Wymagana wiedza

- Podstawy Express.js
- Podstawy REST API

## Cele główne

- [ ] Napisz kontroler Cart symulującą koszyk sklepowy.
- [ ] Produkty na potrzeby zadania są trzymane tablicy.
- [ ] Kontroler posiada własną tablicę do której może dodawać produkty i je z niej usuwać, a także zwiększać ich liczbę.
- [ ] Kontroler wystawia endpointy:
- [ ] - put: /addProductToCart
- [ ] - delete: /deleteProductFromCart
- [ ] - post: /changeProductAmount/:id
- [ ] - get: /checkCart
- [ ] - post: /buyCart (przekierowuje użytkownika na stronę, gdzie wyświetlany jest koszt jego zakupów, oraz przycisk zatwierdzający zakup. Po kliknięciu
        go koszyk powinien zostać wyczyszczony)
## Cele opcjonalne do wykonania
- [ ] dodaj logikę związaną z użytkownikami. Aplikacja może stworzyć użytkownika, określić ile ma pieniędzy, oraz przydziela odzielny koszyk dla każdego użytkownika.
- [ ] dodaj logikę związaną z kuponami na koszyk oraz pojedyńcze produkty

## Przydatne linki

-  Czym jest REST API - https://medium.com/edureka/what-is-rest-api-d26ea9000ee6
-  Lepsza architektura w express.js - https://sodocumentation.net/node-js/topic/10785/route-controller-service-structure-for-expressjs

## Kawałek kodu dla lepszego początku!

```typescript

const productDB:Array<IProduct> = [
{id : '1', productName: 'Zabawka', price: 100},
{id : '2', productName: 'Ekspres do kawy', price: 1600},
{id : '3', productName: Motyka', price: 200}
];
interface IProduct{ id: string, productName :string, price: number};
interface ICartProduct { product: IProduct, amountOfProduct:number };

class CartControler {

private cart: Array<ICartProduct> = [];

public addToCart(req:Request,res:Response){}
public deleteFromCart(req:Request,res:Response){}
public changeAmountOfProduct(req:Request,res:Response){}
public getProductsAndCalculatePrice(req:Request,res:Response){}
public buyProducts(req:Request,res:Response){}
}
```
