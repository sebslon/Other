<h2 align="center"> EmailEncryption / Encryption with PGP </h2>

<br>

## Required Knowledge

- Express.js
- Nodemailer
- Knowledge about encryption

## Main Goals

- [ ] Create server application that allows encryption/decryption of data with PGP algorithm,
- [ ] Server should have two endpoints for sending (encrypting) and receiving (decrypting) emails

## Optional

- [null]

## Przydatne linki

- What is cryptography and how does it work: https://medium.com/searchencrypt/what-is-encryption-how-does-it-work-e8f20e340537
- Node.js cryptography:
  - https://medium.com/@rjstech/getting-started-with-cryptography-in-nodejs-2b85949c5921
  - https://medium.com/@shivapendem/encrypt-and-decrypt-data-in-node-js-46255dfc7468
- PGP Encryption - https:/loginradius.com/blog/async/using-pgp-encryption-with-nodejs/
- Nodemailer - https://nodemailer.com/about/

## Example

```typescript
class CryptoService {
  public encryptEmail(dataToEncrypt) {}
  public decryptEmail(dataToDecrypt) {}
}

class EmailService {
  public sendEmail() {}
}
```
