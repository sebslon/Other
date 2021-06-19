<h2 align="center">Opis zadania EmailEncryption </h2>

<br>

## Wymagana wiedza

- Podstawy Express.js
- Znajomość Nodemailer
- Podstawowa wiedza na temat tego czym jest szyfrowanie

## Cele główne

- [ ] Napisz aplikację umożliwiającą zaszyfrowanie danych według alogrytmu PGP i wysłanie ich jako emaila oraz odszyfrowywanie otrzymanej wiadomości.
- [ ] Serwer powinien wystawiać dwa endpointy służące do wysyłania i odszyfrowywania emaili.

## Cele opcjonalne do wykonania

* [ ] Brak

## Przydatne linki

-  Czym jest kryptografia i jak działa: https://medium.com/searchencrypt/what-is-encryption-how-does-it-work-e8f20e340537
-  Artykuły dotyczące kryptografi w Node.js:
-  https://medium.com/@rjstech/getting-started-with-cryptography-in-nodejs-2b85949c5921
-  https://medium.com/@shivapendem/encrypt-and-decrypt-data-in-node-js-46255dfc7468
-  PGP Encryption - https:/loginradius.com/blog/async/using-pgp-encryption-with-nodejs/
-  Nodemailer - https://nodemailer.com/about/

## Kawałek kodu dla lepszego początku!

```typescript

class CryptoService {

public encryptEmail(dataToEncrypt){}
public decryptEmail(dataToDecrypt){}

}

class EmailService {

public sendEmail(){}

}
```
