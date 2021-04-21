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

const mapFn = (array, callback) => {
  validateInput(array, callback);

  const workArray = [...array];
  const result = [];

  for (const index in workArray) {
    const id = parseInt(index);
    result.push(callback(workArray[id], id, workArray));
  }
  return result;
};

const entriesFn = (array) => {
  const workArray = [...array];

  return workArray[Symbol.iterator]();
};

const filterFn = (array, callback) => {
  validateInput(array, callback);

  const workArray = [...array];
  const result = [];

  for (const index in workArray) {
    const id = parseInt(index);
    if (callback(workArray[id], id, workArray)) {
      result.push(workArray[id]);
    }
  }

  return result;
};

const everyFn = (array, callback) => {
  validateInput(array, callback);

  const workArray = [...array];

  for (const index in workArray) {
    const id = parseInt(index);

    if (!callback(workArray[id], id, workArray)) {
      return false;
    }
  }

  return true;
};

const someFn = (array, callback) => {
  validateInput(array, callback);

  const workArray = [...array];

  for (const index in workArray) {
    const id = parseInt(index);

    if (callback(workArray[id], id, workArray)) {
      return true;
    }
  }

  return false;
};

const reduceFn = (array, callback, initial) => {
  validateInput(array, callback);
  
  if (array.length === 0 && !initial)
    throw new TypeError("Reduce of empty array with no initial value");

  const workArray = [...array];
  let accumulator = initial ? initial : workArray[0];

  for (const index in workArray) {
    let id = parseInt(index);
    accumulator = callback(accumulator, workArray[id], id, workArray);
  }

  return accumulator;
};