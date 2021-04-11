const validateInput = (input, callback) => {
  const inputIsNotAnArray = !Array.isArray(input);

  if (inputIsNotAnArray) {
    throw new TypeError(input + " is not an array.");
  }

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function.");
  }
};

const forEachFn = (array, callback) => {
  validateInput(array, callback);
  const workArray = [...array];

  for (const index in workArray) {
    const id = parseInt(index);
    callback(workArray[id], id, workArray);
  }
};

const mapFn = (array, callback) => {};

const entriesFn = (array) => {};

const filterFn = (array, callback) => {};

const reduceFn = (array, callback, inital) => {};

const everyFn = (array, callback) => {};

const someFn = (array, callback) => {};

forEachFn([1, 5, "s", "x"], (el) => console.log(el));
