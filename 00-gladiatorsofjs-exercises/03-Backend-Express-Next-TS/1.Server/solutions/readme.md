## Create two services A & B

### Server A:

- endpoint /addUser/:name - adds user to global array existing users
- endpoint /userLoggedIn/:name - adds user to global array of logged in users
- endpoint /userLoggedOut/:name - removes user from global array of logged in users and adds to loggedOut users array
- endpoint /userBoughtProduct/:name - adds user to global array of users who have bought something + his cart

### Server B:

- endpoint /sendData - takes userID and one of the events: 'userLoggedIn' | 'userLoggedOut' | 'userBoughtProduct' | 'addUser';
- create a class Webhook with method 'log' which depending on the event will send POST request to server A
