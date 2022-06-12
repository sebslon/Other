import axios from 'axios';

class Webhook {
  static log(event: WebhookEvent) {
    switch (event) {
      case 'addUser':
        axios.post
    }
  }
}

type WebhookEvent =
  | "userLoggedIn"
  | "userLoggedOut"
  | "userBoughtProduct"
  | "addUser";
