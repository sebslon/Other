<h2 align="center">AuthContext</h2>

<br>

## Wymagana wiedza

- JavaScript, React

## Technologie potrzebne do zadania

- JavaScript, React, Context API

## Cele główne

- [ ] Stwórz context `AuthContext` który będzie odpowiedzialny za autoryzację w aplikacji.

- [ ] Aplikacja zawiera dwa routy: `/` - strona główna, `/login` - strona logowania

- [ ] Działanie contextu:

* Jeżeli użytkownik chce wejść na stronę główną i nie jest zalogowany (nie ma jego emaila w ciasteczkach), to jest on przenoszony na stronę logowania.
* Jeżeli użytkownik się zaloguje na stronie logowania to do ciasteczek jest zapisywany jego email i wtedy może wejść na stronę główną.
* Kiedy użytkownik się wyloguje, to email jest usuwany z ciasteczek i użytkownik jest przenoszony na stronę logowania.

* Na potrzeby zadania prawidłowy email to: "jankowalski@gmail.com", a hasło to "admin12345@", inne kombinacje kończą się błędem.

## Cele dodatkowe

- [ ] To ćwiczenie możesz wykonać z użyciem Reduxa

## Przydatne linki

- Context API - https://pl.reactjs.org/docs/context.html
- Biblioteka js-cookie - https://www.npmjs.com/package/js-cookie
