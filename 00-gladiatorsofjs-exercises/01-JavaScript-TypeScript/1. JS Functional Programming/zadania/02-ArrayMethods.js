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

  return  workArray[Symbol.iterator]();;
};

const filterFn = (array, callback) => {};

const reduceFn = (array, callback, inital) => {};

const everyFn = (array, callback) => {};

const someFn = (array, callback) => {};

const iterator = entriesFn([1, 4, 7, 8, "s", "a", {a: 5}]);
console.log(iterator);
for (const el of iterator) {
  console.log(el);
}
