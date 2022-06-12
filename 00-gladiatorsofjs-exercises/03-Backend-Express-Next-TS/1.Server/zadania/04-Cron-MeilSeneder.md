<h2 align="center">Opis zadania Cron-MailSender </h2>

<br>

## Wymagana wiedza

- Podstawy Exspress.js/Next.js
- Znajomośc Nodemailer-a

## Cele główne
- [ ] Stwórz serwer wysyłający co 20 minut maile na podany adres.
- [ ] Stwórz trzy rodzaje emaili i stron, do których dany email będzie zawierać odnośnik.
- [ ] Emailie powinny być trzymane w tablicy i posiadać następujące właściwości:
- Identyfikator
- Do kogo ma być wysłany
- Ile razy został odwiedzony
- Przełącznik on/off
- Treść emailia
- [ ] Każda ze stron powinna posiadać licznik liczący ilość wejść na daną stronę oraz wyświetlać ip użytkownika.
- [ ] Na każej ze stron powinien znajdować się link do strony na której można wyłączyć wysyłanie danego emaila
- [ ] Wyłączenie emaila powinno odbywać się przez endpoint /stop/:emailNmr, gdzie emailNmr jest identyfikatorem emaila 
     którego wysyłanie chcemy wyłączyć. W momencie użycia tego endpointu, email powinien zmienić wartość on/off na off.


## Cele opcjonalne do wykonania


## Przydatne linki

- Biblioteka cron: https://www.npmjs.com/package/node-cron
- Jak jej używać: https://levelup.gitconnected.com/how-to-schedule-cron-jobs-and-set-health-checks-in-node-js-93cf88d2c247 
- Next.js - freamwork umożliwiający tworzenie stron serwowowanych za pomocą serwera: https://medium.com/byteridge/next-js-the-react-framework-a719626f1e84
- Link do dokumentacji: https://nextjs.org/
- Playlista na youtubie: https://www.youtube.com/watch?v=tt3PUvhOVzo
- Pug Template Engine - pakiet npm umożliwijacy serwowanie HTML za pomocą exspress.js:
- Link do dokumentacji: https://pugjs.org/api/getting-started.html
- Playlista na youtubie: https://www.youtube.com/watch?v=kt3cEjjkCZA

## Kawałek kodu dla lepszego początku!

```typescript
// część backendowa opowiedzialna za wysyłanie emaili i ich wyłączanie

class ChronHandler {
private emailSender: IEmailSender;
private emailData = [{id:1,content:'Random content' },{id:2,content:'Random content' },{id:3,content:'Random content' }]

constructor(){
this.chronoHandler.startSendingEmails();
}

public stopSendingEmailWithGivenId(id:number){...}
private startSendingEmails(){...}

}

const router = express.Router()

router.post('/stop/:emailId', (req,res) =>{

  // ... logika obsługująca stopowanie chrono

})



```
