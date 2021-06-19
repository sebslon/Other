<h2 align="center">Opis zadania aplikacji al'a messanger</h2>

<br>

## Wymagana wiedza
- Solidne podstawy JS-a.
- Asynchroniczność(promise, async/await).
- Podstawowa znajomość jednej z niżej wymienionych baz danych.
- Znajomość zagadnienia szyfrowania End-To-End
 
## Technologie potrzebne do zadania

- Express.js lub Next.js.
- Socket.io.
- MongoDB lub PostgreSQL(ew mySQL).
- Biblioteka szyfrująca bcrypt/crypto.

## Cele główne

* [ ] Użytkownik w tej aplikacji, będzie mógł rozmawiać z innymi użytkownikami na chacie działającym real-time o oparciu o socket.io
* [ ] Każdy użytkownik dostaje własny klucz prywatny i publiczny.
* [ ] Klucz publiczny służy do szyfrowania wiadomości, a klucz prywatny do deszyfrowania wiadomości.
* [ ] Każdy użytkownik wchodzący na pokój dostaje dostęp do wszystkich kluczy publicznych użytkowników znajdujących się w pokoju
* [ ] W momencie gdy chce wysłać wiadomość do konkretnego użytkownika znajdującego się w pokoju, aplikacja używa klucza publicznego danego użytkownika do zaszyfrowania danych
* [ ] Użytkownik do którego została wysłana wiadomość, może kliknąć na nią co powoduje odszyfrowanie jej za pomocą klucza prywatnego


## Cele opcjonalne do wykonania

* [ ] Wysyłający po wysłaniu wiadomości ma widzieć status wiadomości i datę odczytania(wysłane/odczytane) tak jak to jest w przypadku messengera.
* [ ] Wytworzenie i podłączenie się do bazy aby przechowywać wiadomości(archwizowanie historii wiadomości).

## Przydatne linki

- Przykładowa apka dla zarysu(express + socket.io) - https://www.youtube.com/watch?v=jD7FnbI76Hg&t=2521s
- Czym jest i jak działa socket.io - https://www.ably.io/topic/socketio
- Jak działa i czym jest kryptografia(opis crypto) - https://www.youtube.com/watch?v=heldAl8Cfr4&t=151s
- Dodatkowe źródło uzupełniające kodowanie i dekodowanie wiadomości - https://lollyrock.com/posts/nodejs-encryption/

## Kawałek kodu dla lepszego początku!

```javascript
import io from 'socket.io'
import express from 'express'
import http from 'http'

const app = express()
const server = http.createServer(app)

io.on('connection', socket => {
  console.log("zostałeś połaczony")
}
```
