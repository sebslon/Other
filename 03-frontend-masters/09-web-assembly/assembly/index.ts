declare function log(n: i32): void;

export function minusOne(n: i32): i32 {
  log(n);
  if (n === 44) {
    abort(); //example of imported functions
  }
  return n - 1;
}

export function fizzbuzz(n: i32): String | null {
  if (n % 15 === 0) {
    return "FizzBuzz";
  }

  if (n % 3 === 0) {
    return "Fizz";
  }

  if (n % 5 === 0) {
    return "Buzz";
  }

  return null;
}
