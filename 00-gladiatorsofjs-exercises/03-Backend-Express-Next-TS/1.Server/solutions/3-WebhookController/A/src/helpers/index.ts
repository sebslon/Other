export function findValueInArray<T>(value: T, array: Array<T>) {
  return array.find((arg) => value === arg);
}
