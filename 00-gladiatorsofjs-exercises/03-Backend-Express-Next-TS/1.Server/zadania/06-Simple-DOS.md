<h2 align="center">Opis zadania Simple-DOS </h2>

<br>

## Wymagana wiedza

- Podstawy Express.js
- Podstawowa wiedza na temat ataków DOS

## Cele główne

- [ ] Stwórz serwer wystawiający dwa endpointy: /getFirstImage, /getSecondImage, które zwracają dwa różne zdjęcia
- [ ] Stwórz dodatkowy serwer który wystawia endpoint: /attack.
- [ ] Endpoint: /attack dostaje url na który ma przeprowadzić pseud-atack DOS.
- [ ] Zabezpiecz pierwszy serwer według wytycznych : https://itnext.io/make-security-on-your-nodejs-api-the-priority-50da8dc71d68.
- [ ] Przeprowadź symulacje ataku na swój serwer.
- [ ] Endpoint: /attack powinien zwracać ilość zablokowanych ataktów
 

## Cele opcjonalne do wykonania
- [ ] Czym jest atak DoS: https://www.youtube.com/watch?v=HqzCP7f7vTM
- [ ] Różnica pomiędzy atakiem DoS a DDoS :https://www.youtube.com/watch?v=c9EjuOQRUdg&t=55s

## Przydatne linki

-  Jak zaobserwować zużycie zasobów przez program w VS Code - https://www.youtube.com/watch?v=9UI0JT8y2c4
-  Ciekawostkowy artykuł na temat DDoS: https://javascript.plainenglish.io/website-ddos-f96e20f9ad40
```javascript

const router = express.Router()

router.get('/getFirstImage', (req,res) =>{


})
router.get('/getSecondImage', (req,res) =>{

  // ... wysyłanie zdjęcia

})

anotherServer:

router.post('/attack', (req,res) =>{

  // ... symulacja ataku DoS

})


```
