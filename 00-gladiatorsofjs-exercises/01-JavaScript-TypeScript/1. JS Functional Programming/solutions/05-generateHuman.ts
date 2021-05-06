import fetch from "node-fetch";
import { v4 as uuid } from "uuid";

import { randomNumberInRange } from "./helpers";

const url = "https://random-data-api.com/api/users/random_user";

type UserInfo = [string, string, string];

interface User {
  id: string;
  name: string;
  surname: string;
  age: number;
  phoneNumber: string;
  email: string;
  country: string;
}

async function generateHuman(): Promise<User> {
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

const getPerson = async (): Promise<UserInfo> => {
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
    throw new Error(err);
  }
};

const generatePhoneNumber = (): string => {
  let phoneNumber = "";
  while (phoneNumber.length < 9) {
    const randomNumber = Math.floor(Math.random() * 10);

    phoneNumber += randomNumber;
  }
  return phoneNumber;
};
