//@ts-nocheck

import {
  entriesFn,
  forEachFn,
  mapFn,
  filterFn,
  everyFn,
  reduceFn,
} from "../02-ArrayMethods";

describe("ArrayMethods", () => {
  const inputIsNotArrayErr = "Given input is not an array.";
  let testArray: number[];

  beforeEach(() => {
    testArray = [1, 2, 3, 4, 8, 10, 12, 2];
  });

  describe("valdateInput function - included in all below functions", () => {
    it("Throws type error if input is not an array", () => {
      expect(() => forEachFn(1, () => {})).toThrow(
        TypeError(inputIsNotArrayErr)
      );
    });

    it("Throws type error if callback is not a function", () => {
      expect(() => mapFn([1, 2, 3], {})).toThrow(
        TypeError("[object Object] is not a function.")
      );
    });
  });

  describe("forEachFn function", () => {
    it("Throws type error if input is not an array", () => {
      expect(() => forEachFn(1, () => {})).toThrow(
        TypeError(inputIsNotArrayErr)
      );
    });

    it("Works properly - like native .forEach", () => {
      const native = testArray.forEach((el) => el * 2);
      const tested = forEachFn(testArray, (el) => el * 2);

      expect(tested).toBe(native);
    });

    it("Doesnt return anything - returns undefined", () => {
      const result = forEachFn([1, 2], (el) => el);
      expect(result).toBe(undefined);
    });
  });

  describe("mapFn function", () => {
    it("Throws type error if input is not an array", () => {
      expect(() => mapFn(1, () => {})).toThrow(TypeError(inputIsNotArrayErr));
    });

    it("Works properly - like native .map", () => {
      const native = testArray.map((el) => el * 2);
      const tested = mapFn(testArray, (el) => el * 2);

      expect(tested).toEqual(native);
    });

    it("Returns new array with given callback", () => {
      const callback = (element) => element * 2;

      expect(mapFn([1, 2, 3], callback)).toEqual([2, 4, 6]);
    });
  });

  describe("entriesFn function", () => {
    it("Works properly - returns iterator like .entries", () => {
      const native = testArray.entries();
      const tested = entriesFn(testArray);

      const nativeFnResult = [];
      const testedFnResult = [];

      for (let i of tested) {
        testedFnResult.push(i);
      }
      for (let j of native) {
        nativeFnResult.push(j);
      }

      expect(testedFnResult).toEqual(nativeFnResult);
    });
  });

  describe("filterFn function", () => {
    it("Works properly - like native .filter", () => {
      const native = testArray.filter((el) => el > 1);
      const tested = filterFn(testArray, (el) => el > 1);

      const anotherArr = ["egg", "frog", "dog"];

      expect(tested).toEqual(native);
      expect(anotherArr.filter((el) => el === "dog")).toEqual(
        filterFn(anotherArr, (el) => el === "dog")
      );
    });
  });

  describe("everyFn function", () => {
    it("Works properly - like native .every", () => {
      let cb = (el) => el > 1;
      let native = testArray.every(cb);
      let tested = everyFn(testArray, cb);

      expect(tested).toBe(native);

      cb = (el) => el !== 0;
      native = testArray.every(cb);
      tested = everyFn(testArray, cb);

      expect(tested).toBe(native);
    });
  });

  describe("someFn function", () => {
    it("Works properly - like native .some", () => {
      let cb = (el) => el > 1;
      let native = testArray.every(cb);
      let tested = everyFn(testArray, cb);

      expect(tested).toBe(native);

      cb = (el) => el === 0;
      native = testArray.every(cb);
      tested = everyFn(testArray, cb);

      expect(tested).toBe(native);
    });
  });

  describe("reduceFn function", () => {
    it("Throws error if array is empty and has not initial value", () => {
      const cb = jest.fn();
      const errorMsg = "Reduce of empty array with no initial value";

      expect(() => reduceFn([], cb)).toThrow(TypeError(errorMsg));
    });

    it("Returns passed initial value if array is empty", () => {
      const cb = jest.fn();
      let initialValue = 1;

      expect(reduceFn([], cb, initialValue)).toBe(initialValue);
    });

    it("Works properly - like native .reduce", () => {
      //flat array
      const sumCb = (a, b) => a + b;

      const firstNativeFnResult = testArray.reduce(sumCb);
      const secondNativeFnResult = testArray.reduce(sumCb, 25);
      const thirdNativeFnResult = [].reduce(sumCb, 5);

      const firstTestedFnResult = reduceFn(testArray, sumCb);
      const secondTestedFnResult = reduceFn(testArray, sumCb, 25);
      const thirdTestedFnResult = reduceFn([], sumCb, 5);

      expect(firstTestedFnResult).toBe(firstNativeFnResult);
      expect(secondTestedFnResult).toBe(secondNativeFnResult);
      expect(thirdTestedFnResult).toBe(thirdNativeFnResult);

      //array of objects
      const randomPeople = [
        { name: "john", type: "employee" },
        { name: "justin", type: "employee" },
        { name: "jarek", type: "employer" },
      ];

      const modifyObject = (acc: any, item: any) => {
        acc[item.name] = { type: item.type };
        return acc;
      };

      const testedFnReducedObjectsArray = reduceFn(
        randomPeople,
        modifyObject,
        {}
      );
      const nativeFnReducedObjectsArray = randomPeople.reduce(modifyObject, {});

      expect(testedFnReducedObjectsArray).toEqual(nativeFnReducedObjectsArray);

      //array of arrays
      const arrayOfArrays = [
        [1, 2],
        [3, 4],
        [5, 6],
      ];

      const testedFnConcatArray = reduceFn(arrayOfArrays, (a, b) => a.concat(b));
      const nativeFnConcatArray = reduceFn(arrayOfArrays, (a, b) => a.concat(b));

      expect(testedFnConcatArray).toEqual(nativeFnConcatArray);
    });
  });
});
