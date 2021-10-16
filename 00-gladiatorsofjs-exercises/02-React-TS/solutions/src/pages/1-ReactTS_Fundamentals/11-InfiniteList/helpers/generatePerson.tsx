function generatePerson() {
  const sex = randomArrayElement(genders);
  const surname = randomArrayElement(surnames);
  const age = Math.round(Math.random() * 50) + 10;
  const photo = "https://www.thispersondoesnotexist.com/";

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

function randomArrayElement(array: string[]) {
  if (!array.length) throw new Error("Invalid array");

  const lastIndex = array.length - 1;
  const randomIndex = Math.round(Math.random() * lastIndex);

  return array[randomIndex];
}

const maleNames = [
  "Liam", "Noah", "Oliver", "Elijah", "William", "Sebastian",  "James", "Benjamin", "Lucas", "Henry", "Alexander", "Mason", "Michael", "Ethan", "Daniel"
];

const femaleNames = [
  "Olivia", "Emma", "Ava", "Charlotte", "Sophia", "Amelia", "Isabella", "Mia", "Evelyn", "Harper", "Camila", "Gianna", "Abigail", "Luna", "Ella"
];

const surnames = [
  "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzales", "Jackson", "Martin", "Lee", "White", "Sanchez"
];

const genders = ["Male", "Female"];

export const persons = Array(100).map(() => generatePerson());