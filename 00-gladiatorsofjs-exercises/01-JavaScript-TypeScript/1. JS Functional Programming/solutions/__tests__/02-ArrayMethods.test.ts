//@ts-nocheck

import { forEachFn, mapFn } from "../02-ArrayMethods";

describe("ArrayMethods", () => {
  const inputIsNotArrayErr = "Given input is not an array.";

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

    it("Calls function for every element", () => {
      const arr = [1, 2, 3];
      const fn = jest.fn();

      forEachFn(arr, fn);
      expect(fn).toBeCalledTimes(arr.length);
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

    it("Returns new array with given callback", () => {
      const callback = element => element * 2;
      
      expect(mapFn([1, 2, 3], callback)).toEqual([2, 4, 6]);
    });
  });
});
