<h2 align="center">Etherscan</h2>

<br>

## Wymagana wiedza
- Podstawowa wiedza na temat tego czym jest ,,crawling'' stron
 
## Technologie potrzebne do zadania

- GraphQL
- Exspress.js
- MongoDb/PostgreSQL
- Chrono

## Cele główne
* [ ] Aplikacja powinna zbierać zbierać co godzinę informacje ze strony: https://etherscan.io/ przy pomocy crawlingu.
* [ ] Dane które powinny być zebrane:
    - Ethernet Price
    - Market Cap
    - Difficulty
    - Med Gas Price
    - Informacje na temat 5 ostatnich transakcji:
    - Na temat każdej transakcji powinny zostać zebrane informacje:
    - Od kogo (adres)
    - Do kogo (adres)
    - Cena gazu wykorzystana w transakcji
    - Podatek nałożony na transakcje
* [ ] Zebrane dane powinny być zapisywane w bazie danych
* [ ] Aplikacja powinna serwować wszystkie informacje za pomocą GraphQL
* [ ] Użytkownik aplikacji powinien móc określić ilość encji zwracanych za pomocą GraphQL
* [ ] Użytkownik aplikacji powinien móc określić filter dla danych (wszystkie transakcje gdzie podatek był mniejszy niż 8 dolarów)

## Cele opcjonalne do wykonania

* [ ] Brak

## Przydatne linki
- Czym jest Crawling- https://medium.com/@allisonmorgan/short-essay-on-web-crawling-scraping-8abf1b232b65

## Kawałek kodu dla lepszego początku!

```typescript
class EthernetCrawlerHandler{

public crawlEthernetScan()
 {
 ... crawlowanie danych
 }
}
```
