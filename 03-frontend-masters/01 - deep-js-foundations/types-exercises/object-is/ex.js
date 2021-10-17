// TODO: define polyfill for `Object.is(..)`

// Fixed Object.is version for some corner cases
if (!Object.is || true) {
  Object.is = function ObjectIs(x, y) {
    const xNegZero = isItNegativeZero(x);
    const yNegZero = isItNegativeZero(y);

    // Check two booleans if both of them are true (negative zeros) return true.
    if (xNegZero || yNegZero) {
      return xNegZero && yNegZero;
    } else if (isItNaN(x) && isItNaN(y)) {
      // If both values are NaN - return true
      return true;
    } else if (x === y) {
      // Equality check for rest
      return true;
    }

    return false;

    // **********

    function isItNegativeZero(value) {
      // value divided by -0 returns -Infinity
      return value === 0 && 1 / value === -Infinity;
    }

    // NaN is the only value in JS that is not equal to yourself.
    function isItNaN(value) {
      return value !== value;
    }
  };
}

// tests:
// should console "true" for all
console.log(Object.is(42, 42) === true);
console.log(Object.is("foo", "foo") === true);
console.log(Object.is(false, false) === true);
console.log(Object.is(null, null) === true);
console.log(Object.is(undefined, undefined) === true);
console.log(Object.is(NaN, NaN) === true);
console.log(Object.is(-0, -0) === true);
console.log(Object.is(0, 0) === true);

console.log(Object.is(-0, 0) === false);
console.log(Object.is(0, -0) === false);
console.log(Object.is(0, NaN) === false);
console.log(Object.is(NaN, 0) === false);
console.log(Object.is(42, "42") === false);
console.log(Object.is("42", 42) === false);
console.log(Object.is("foo", "bar") === false);
console.log(Object.is(false, true) === false);
console.log(Object.is(null, undefined) === false);
console.log(Object.is(undefined, null) === false);
