export function head(array) {
  return array[0];
}

//returns the rest of the array
export function tail(array) {
  return array.slice(1);
}

export function length(array) {
  return array.length;
}

export function concat(array1, array2) {
  return array1.concat(array2);
}
