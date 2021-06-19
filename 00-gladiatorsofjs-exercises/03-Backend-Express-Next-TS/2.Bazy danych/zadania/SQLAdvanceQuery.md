<h2 align="center">SQLAdvanceQuery</h2>

<br>

## Wymagana wiedza

- SQL
- Podstawy integracji z serwisami zewnętrznymi
- Exspress
- Knex

## Cele główne
- [ ] Stwórz bazę danych reprezentującą użytkowników StackOverflow
- [ ] Wypełnij ją 500 użytkownikami za pomocą StackExchange API /users
- [ ] Serwer powinien wystawiać 3 endpointy:
- [ ] - /getUsersFromEurope - endpoint powinien zwracać wszystkich użytkowników z bazy danych którzy jako miejsce zamieszkania mają podany jeden 
      z krajów znajdujących się w Europie, posiadających więcej niż 200 brązowych odznak. Wyniki powinny zostać przed zwróceniem posortowane alfabetycznie
      według krajów i nicków
- [ ] - /getCountryByUsersReputationBy - endpoint powinien zwracać łączną reputację użytkowników dla każdego kraju znajdującego się w bazie danych. Wyniki powinny być
      posortowane według ilości reputacji malejąco.
- [ ] - /getBestUserForEachCountry - endpoint powinien zwracać dla każdego kraju użytkownika, który posiada największą ilość reputacji

## Cele opcjonalne do wykonania
* [ ] Brak
## Przydatne linki
- Bardzo dobry poradnik do SQL: https://www.samouczekprogramisty.pl/kurs-sql/ 



```typescript
class UsersController{

public getUsersFromEurope(req,res){}
public getCountryByUsersReputationBy(req,res){}
public getBestUserForEachCountry(req,res){}
}
```
