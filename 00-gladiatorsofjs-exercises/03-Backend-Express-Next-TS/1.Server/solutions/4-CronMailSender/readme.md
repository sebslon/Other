<h2 align="center">CRON - mail sender</h2>

My summary:

- Could be done in only Next.js - wanted to put docker-compose etc.

<br>

## Technologies

- Express.js / Next.js
- Nodemailer / Cron-schedulers

## Main Goals

- [x] Create a server which sends an email every 20 minutes to a given email
- [x] Create 3 different emails containing link to the page (3 different pages)
- [x] Emails should be kept in an array and should have properties: ID, receiver, how many times was visited, toggle on/off, content
- [x] Every page should contain number of visits and should show IP of the visitor
- [x] Every page should contain a link to the page where you can turn off this email
- [x] Email turn off should be handled by /stop/:emailId endpoint

## Optional

## Useful links

- CRON library: https://www.npmjs.com/package/node-cron
  - https://levelup.gitconnected.com/how-to-schedule-cron-jobs-and-set-health-checks-in-node-js-93cf88d2c247
- Next.js - https://medium.com/byteridge/next-js-the-react-framework-a719626f1e84
  - https://nextjs.org/
- PUG - https://www.youtube.com/watch?v=tt3PUvhOVzo
  - https://pugjs.org/api/getting-started.html
  - https://www.youtube.com/watch?v=kt3cEjjkCZA
