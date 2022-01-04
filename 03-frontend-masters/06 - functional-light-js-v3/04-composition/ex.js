"use strict";

function increment(x) {
  return x + 1;
}
function decrement(x) {
  return x - 1;
}
function double(x) {
  return x * 2;
}
function half(x) {
  return x / 2;
}

// COMPOSING FUNCTIONS

function compose(...fns) {
  return pipe(...fns.reverse());
}

function pipe(...fns) {
  return function piped(result) {
    for (const fn of fns) {
      result = fn(result);
    }
    return result;
  };
}

const f1 = compose(increment, decrement);
const f2 = pipe(decrement, increment);
const f3 = compose(decrement, double, increment, half);
const f4 = pipe(half, increment, double, decrement);
const f5 = compose(increment);
const f6 = pipe(increment);

console.log(f1(3) === 3);
console.log(f1(3) === f2(3));
console.log(f3(3) === 4);
console.log(f3(3) === f4(3));
console.log(f5(3) === 4);
console.log(f5(3) === f6(3));
