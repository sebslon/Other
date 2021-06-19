<h2 align="center">4-DimensionalData</h2>

<br>

## Wymagana wiedza

- Podstawy Postgress
- Podstawy Prisma ORM
- Exspress

## Cele główne
- [ ] Stwórz bazę danych reprezentującą sieć sklepów i informacji o nich
- [ ] Każda sieć sklepów powinna posiadać id, unikalną nazwę, listę sklepów do niej należących, a także właściciela.
- [ ] Każdy sklep powinien posiadać id, nazwę, adres, tablicę ocen wraz z komenentarzami, średnią ocen wyliczaną na podstawie tej tablicy, oraz listę kategorii w których sprzedaje produkty.
- [ ] Każda kategoria powinna posiadać id, nazwę, listę podobnych kategorii, oraz listę produktów.
- [ ] Każdy produkt powinien posiadać id, nazwę, cenę, ilość sztuk dostępnych w magazynie, a także opinie.
- [ ] Wszystkie obiekty reprezentowane w bazie danych powinny być walidowane przy tworzeniu.
- [ ] Każdy obiekt powinien posiadać funkcje CRUD.

## Cele opcjonalne do wykonania

* [ ] Stwórz logikę pozwalającą na:
- wyświetlenie wszystkich sieci sklepów posiadających podany produkt
- wyświetlenie wszystkich sklepów sprzedających produkty w danej kategorii
- wyświetlenie wszystkich kategori w którzy można znaleść produkt posiadający daną frazę w nazwie
- wyświetlenie wszystkich produktów których ilość w magazynie jest większa niż podana liczba
## Przydatne linki
- Jak projektować architekutrę baz danych typu PostgreSQL: 
- https://medium.com/swlh/architecture-of-postgresql-db-d6b1ac4cc231
- https://severalnines.com/database-blog/understanding-postgresql-architecture
- Prisma ORM: https://www.prisma.io/
- Film na temat Prismy: https://www.youtube.com/watch?v=SvtXgRA7KsE

## Kawałek kodu dla lepszego początku!

```typescript

class StoresChainHandler {
public getStoresChain(){}
public getStoreChain(id){}
public createStoreChain(dataToCreateShop){}
public changeStoreChainProperty(id,propertyToChange,newValue){}
public deleteStoreChain(id){}

}

class ShopHandler {
public getShop(id){}
public getShops(){}
public createShop(dataToCreateShop){}
public changeShopProperty(id,propertyToChange,newValue){}
public deleteShop(id){}
}

class CategoryHandler {
public getCategory(id){}
public getCategories(){}
public createCategory(dataToCreateCategory){}
public changeCategory(id,propertyToChange,newValue){}
public deleteCategory(id){}
}

```
