<h2 align="center">Opis zadania PassportAuth </h2>

<br>

## Wymagana wiedza

- Express.js
- Podstawowa wiedza na temat autoryzacji poprzez oAuth
- Podstawowa wiedza na temat middlewarów
- Podstawowa wiedza na temat baz danych

## Cele główne
- [ ] Stwórz serwer który umożliwia autoryzacją za pomocą oAuth googla, facebooka i githuba
- [ ] Wykorzystaj pakiet passportJs

## Cele opcjonalne do wykonania
- Brak

## Przydatne linki

-  Czym jest Middleware - https://medium.com/@jamischarles/what-is-middleware-a-simple-explanation-bb22d6b41d01
-  Czym jest oAuth - https://medium.com/swlh/understanding-oauth-2-0-dc7ef422d915
-  PassportJs - http://www.passportjs.org/docs/oauth/
-  PassportJs + FB - https://www.loginradius.com/blog/async/facebook-authentication-using-node-and-passport/
-  PassportJs + Github - https://medium.com/swlh/node-and-passport-js-github-authentication-e33dbd0558c
-  PassportJs + Google - https://www.loginradius.com/blog/async/google-authentication-with-nodejs-and-passportjs/


## Kawałek kodu dla lepszego początku!

```typescript

class AuthRoutes {
  public router: Router;

  private authController = new AuthController();

  routes() {
    this.router.post(
      '/google',
      passport.authenticate('google', ...)
    );

    this.router.get(
      '/google/callback', endpoint do którego google wysyła informacje na temat autoryzacji
    );
   }
}


```
