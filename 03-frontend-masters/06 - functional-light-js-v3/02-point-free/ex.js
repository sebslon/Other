"use strict";

function not(predicate) {
  return function negate(...args) {
    return !predicate(...args);
  };
}

function when(fn) {
  return function (predicate) {
    return function (...args) {
      if (predicate(...args)) {
        return fn(...args);
      }
    };
  };
}

// -------------------------------- //

const output = console.log;
const printIf = when(output);
const isLongEnough = not(isShortEnough);

function isShortEnough(str) {
  return str.length <= 5;
}

const msg1 = "Hello";
const msg2 = msg1 + " World";

printIf(isShortEnough)(msg1); // Hello
printIf(isShortEnough)(msg2);
printIf(isLongEnough)(msg1);
printIf(isLongEnough)(msg2); // Hello World
