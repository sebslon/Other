import { Person } from "./types";
import { femaleNames, genders, maleNames, surnames } from "./data";

export function generatePerson(): Person {
  const sex = randomArrayElement(genders);
  const surname = randomArrayElement(surnames);
  const age = Math.round(Math.random() * 50) + 10;
  const photo = "https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg";

  if (sex === "Male") {
    var name = randomArrayElement(maleNames);
  } else {
    var name = randomArrayElement(femaleNames);
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