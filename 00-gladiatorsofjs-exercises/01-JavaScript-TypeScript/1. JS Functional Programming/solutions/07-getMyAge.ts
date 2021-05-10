function getMyAge(input: Date | string | number): (string | number) {
  const actualYear = new Date().getFullYear();

  let myAge;

  if (input instanceof Date) {
    const inputYear = input.getFullYear();
    myAge = actualYear - inputYear;
  };

  if (typeof input === 'number') {
    myAge = actualYear - input;
  };

  if (typeof input === 'string') {
    const regexp = new RegExp(/([^0-9])/, "g");
    if(regexp.test(input)) throw new Error('Input is invalid format of year');

    myAge = actualYear - parseInt(input);
  } 

  if (myAge && myAge < 0) {
    return `You will be born in ${-myAge} years`;
  }
  
  if(typeof myAge === 'undefined') {
    throw Error('Enter proper input to calculate your age..');
  }

  return myAge;
}

const result1 = getMyAge(new Date(1990, 1, 1));
const result2 = getMyAge("19");
const result3 = getMyAge(2100);

console.log(result1, result2, result3);