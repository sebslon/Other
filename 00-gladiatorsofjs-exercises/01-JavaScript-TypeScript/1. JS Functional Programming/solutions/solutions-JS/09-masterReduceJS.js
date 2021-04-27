const validateInput = (input, callback) => {
  const inputIsNotAnArray = !Array.isArray(input);

  if (inputIsNotAnArray) {
    throw new TypeError(input + " is not an array.");
  }

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function.");
  }
};

//Array methods with .reduce
function mapFn(array, callback) {
  validateInput(array, callback);

  return [...array].reduce((acc, currentValue, index, array) => {
    acc.push(callback(currentValue, index, array));
    return acc;
  }, []);
}

function filterFn(array, callback) {
  validateInput(array, callback);

  return [...array].reduce((acc, currentValue, index, array) => {
    if (callback(currentValue)) {
      acc.push(currentValue);
    }
    return acc;
  }, []);
}

function everyFn(array, callback) {
  validateInput(array, callback);

  return [...array].reduce((acc, currentValue, index, array) => {
    if (!callback(currentValue)) {
      acc = false;
    }
    return acc;
  }, true);
}

function someFn(array, callback) {
  validateInput(array, callback);

  return [...array].reduce((acc, currentValue, index, array) => {
    if (callback(currentValue)) {
      acc = true;
    }
    return acc;
  }, false);
}

// const res = mapFn([1, 2, 3], (el) => el * 2);
// const res = filterFn([1, 2, 3], (el) => el >= 2);
// const res = everyFn([1, 2, 3], (el) => el >= 0);
// const res = someFn([1, 2, 3], (el) => el >= 4);
// console.log(res);
