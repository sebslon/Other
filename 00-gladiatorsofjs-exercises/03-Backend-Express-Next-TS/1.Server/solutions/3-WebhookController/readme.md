<h2 align="center"> Webhook Controller </h2>

<br>

## Required knowledge

- Express.js
- axios/fetch

## Main goals

- [ ] Create two servers A and B.
  - Server A: should have endpoints for creating, logging in, logging out and adding user to the users who already have bought any product
    - Everything may be represented by an arrays
  - Server B: should havee one endpoint which accepts userID and one of the events 'userLoggedIn' | 'userLoggedOut' | 'userBoughtProduct' | 'addUser'
    - Create a Webhook class with log method which based on event will send a POST request to server A on a proper endpoint.

## Optional

- none

## Additional links

- Webhooks: https://medium.com/wineofbits/what-is-a-webhook-3327b6e470e4
- Express REST API: https://medium.com/weekly-webtips/how-to-create-a-rest-api-with-express-js-and-node-js-3de5c5f9691c
- HTTP codes in REST API: https://medium.com/@s.birntachas/http-status-codes-the-ultimate-guide-c7d78130a60a

## Little bit of code for a better start!

```typescript
interface ILogData<T> {
timestamp: string,
data: T
}

type WebhookAction = 'userLoggedIn' | 'userLoggedOut' | 'userBoughtProduct';

class WebhookControler {

public log<T>(action:WebhookAction, data:T) {}

```
