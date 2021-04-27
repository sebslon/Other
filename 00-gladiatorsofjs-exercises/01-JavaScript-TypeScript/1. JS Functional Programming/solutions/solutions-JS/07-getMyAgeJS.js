function getMyAge(input) {
  const actualYear = new Date().getFullYear();

  let yourAge;

  if (input instanceof Date) {
    const inputYear = input.getFullYear();
    yourAge = actualYear - inputYear;
  };

  if (typeof input === 'number') {
    yourAge = actualYear - input;
  };

  if (typeof input === 'string') {
    const regexp = new RegExp(/([^0-9])/, "g");
    if(regexp.test(input)) throw new Error('Input is invalid format of year');

    yourAge = actualYear - input;
  } 

  if (yourAge < 0) {
    return `You will be born in ${-yourAge} years`;
  }
  return yourAge;
}

const result1 = getMyAge(new Date(1990, 1, 1));
const result2 = getMyAge("19");
const result3 = getMyAge(2100);

console.log(result1, result2, result3);