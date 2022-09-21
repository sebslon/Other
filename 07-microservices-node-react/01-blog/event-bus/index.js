const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(bodyParser.json());

const services = [
  'http://localhost:4000/events',
  'http://localhost:4001/events',
  'http://localhost:4002/events',
  'http://localhost:4003/events',
];

app.post('/events', async (req, res) => {
  const event = req.body;

  await Promise.allSettled(
    services.map((serviceUrl) => {
      axios
        .post(serviceUrl, event)
        .then((res) =>
          console.log('Successfully sent an event to ' + serviceUrl)
        )
        .catch((err) => console.log(err.message));
    })
  );

  res.send({ status: 'OK' });
});

app.listen(4005, () => {
  console.log('Listening on 4005');
});
