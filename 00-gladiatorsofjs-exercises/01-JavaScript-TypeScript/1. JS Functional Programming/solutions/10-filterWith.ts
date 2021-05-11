import { data } from './constants';

function filterWith<T>(array: T[], phrase: string): T[] {
  if (!Array.isArray(array)) throw new Error("First argument must be an array.");
  if (typeof phrase !== "string") throw new Error("Phrase must be a string");
  if (phrase.length <= 2) throw new Error('Phrase should have length greater than 2'); 

  const regexp = new RegExp(`\\w*(${phrase.toLowerCase()})\\w*`, "g");

  const elementsContainingPhrase: T[] = array.filter((object) => {
    const values = Object.values(object);

    const result = filterData(values, regexp);

    return result.length > 0;
  });

  if (!elementsContainingPhrase.length)
    throw new Error("Array does not contain any object with that phrase.");

  return elementsContainingPhrase;
}

function filterData<T>(array: T[], regexp: RegExp): T[] {
  const result = array.filter((element) => {

    if (Object.prototype.toString.call(element) === "[object Object]") {
      const values = Object.values(element);
      return filterData(values, regexp).length;
    }

    if (Array.isArray(element)) {
      return filterData(element, regexp).length;
    }

    if (typeof element === "string") {
      return regexp.test(element.toLowerCase());
    }

    if (typeof element === "number") {
      return regexp.test(element.toString().toLowerCase());
    }

    return false;
  });

  return result;
}

// console.log(filterWith(data, "nisi"));
filterWith(data, "nisi");
