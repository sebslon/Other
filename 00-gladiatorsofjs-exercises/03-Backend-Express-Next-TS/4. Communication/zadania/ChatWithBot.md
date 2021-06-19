<h2 align="center">Chat With Bot</h2>

<br>

## Wymagana wiedza
- Solidne podstawy JS-a.
- Asynchroniczność(promise, async/await).
- Podstawowa wiedza na temat Telegrama
 
## Technologie potrzebne do zadania

- Express.js lub Next.js.
- MongoDB lub postgreSQL
- Telegram API

## Cele główne

* [ ] Zbudowanie funkcjonalności, która będzie symulować czat z botem
* [ ] Wiadomości powinny być przesyłane pomiędzy serwerem i telegramem.
* [ ] W momencie wysłania wiadomości za pomocą serwera, wiadomośc powinna pojawić się także w aplikacji Telegrama
* [ ] W momencie wysłania wiadomości za pomocą Telegrama, serwer powinien odebrać tą wiadomość
* [ ] Ze strony telegrama na wiadomości powinien odpowiadać bot, rzucający losowymi sentencjami

## Cele opcjonalne do wykonania

* [ ] Brak

## Przydatne linki
- Telegram API - https://core.telegram.org/
- Tworzenie bota w Telegramie - https://dev.to/benjami51033333/build-a-bot-with-telegram-and-ibm-watson-io5

## Kawałek kodu dla lepszego początku!

```typescript
class TelegramHander{
public sendMsg(msg:string){
... korzystanie z Telegram API do wysłania wiadomości
}

```
