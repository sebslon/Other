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
    console.log(workArray[id], id, workArray);
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

const reduceFn = (array, callback, initial) => {};

const everyFn = (array, callback) => {
  validateInput(array, callback);

  const workArray = [...array];
  
  for(const index in workArray) {
    const id = parseInt(index);

    if(!callback(workArray[id], id, workArray)) {
      return false;
    }
  }

  return true;
};
//
const someFn = (array, callback) => {};
