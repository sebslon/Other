const fetch = require("node-fetch");
const { v4: uuid } = require("uuid");

const { randomNumberInRange } = require("./helpers");

const url = "https://random-data-api.com/api/users/random_user";

const generatePhoneNumber = () => {
  let phoneNumber = "";
  while (phoneNumber.length < 9) {
    const randomNumber = Math.floor(Math.random() * 10);

    phoneNumber += randomNumber;
  }
  return phoneNumber;
};

const getPerson = async () => {
  try {
    const response = await fetch(url);
    const person = await response.json();
    const {
      first_name,
      last_name,
      address: { country: country },
    } = person;

    return [first_name, last_name, country];
  } catch (err) {
    console.log(err);
  }
};

async function generateHuman() {
  const personId = uuid();
  const [name, surname, country] = await getPerson();
  const email = `${name.toLowerCase()}${surname.toLowerCase()}@gmail.com`;
  const age = randomNumberInRange(18, 85);
  const phoneNumber = generatePhoneNumber();

  return {
    id: personId,
    name,
    surname,
    age,
    phoneNumber,
    email,
    country,
  };
}
