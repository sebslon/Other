import { concat, head, length, tail } from "./helpers";

// recursive implementations
function filter(predicateFn, array) {
  if (length(array) === 0) return [];
  const firstItem = head(array);
  const filteredFirst = predicateFn(firstItem) ? [firstItem] : [];
  return concat(filteredFirst, filter(predicateFn, tail(array)));
}

function map(fn, array) {
  if (length(array) === 0) return [];
  const firstItem = head(array);
  const mappedFirst = [fn(firstItem)];
  return concat(mappedFirst, map(fn, tail(array)));
}

export function reduce(reducerFn, initialValue, array) {
  if (length(array) === 0) return initialValue;
  const newInitialValue = reducerFn(initialValue, head(array));
  return reduce(reducerFn, newInitialValue, tail(array));
}
