//@ts-nocheck

import { entriesFn, forEachFn, mapFn } from "../02-ArrayMethods";

describe("ArrayMethods", () => {
  const inputIsNotArrayErr = "Given input is not an array.";
  let testArray: number[];

  beforeEach(() => {
    testArray = [1, 2, 3];
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

  describe("forEach function", () => {
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

  describe("map function", () => {
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

  describe("entries function", () => {
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
});
