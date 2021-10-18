import { Person } from "../types";
import { femaleNames, genders, maleNames, surnames } from "../data";

export function generatePerson(): Person {
  const sex = randomArrayElement(genders);
  const surname = randomArrayElement(surnames);
  const age = Math.round(Math.random() * 50) + 10;
  let photo = "";
  let name = "";

  if (sex === "Male") {
    name = randomArrayElement(maleNames);
    photo = `https://randomuser.me/api/portraits/men/${Math.round(Math.random() * 90)}.jpg`
  } else {
    name = randomArrayElement(femaleNames);
    photo = `https://randomuser.me/api/portraits/women/${Math.round(Math.random() * 90)}.jpg`
  }

  return {
    name,
    surname,
    sex,
    age,
    photo
  }
}

function randomArrayElement(array: unknown[]) {
  if (!array.length || !Array.isArray(array)) throw new Error("Invalid array");

  const lastIndex = array.length - 1;
  const randomIndex = Math.round(Math.random() * lastIndex);

  return array[randomIndex];
}

export const persons = Array(100).fill("").map(() => generatePerson());