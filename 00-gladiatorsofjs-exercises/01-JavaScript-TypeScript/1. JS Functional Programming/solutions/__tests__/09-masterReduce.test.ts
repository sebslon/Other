import { validateInput, mapFn, filterFn, everyFn, someFn } from '../09-masterReduce';

describe('masterReduce', () => {
  const isNotArrayErr = " is not an array.";
  const isNotAFunctionErr = " is not a function.";

  let testArray: number[];

  beforeAll(() => {
    testArray = [1, 2, 3, 4, 8, 10, 12, 2];
  });

  describe('validateInput function - used in every function', () => {
    it("Throws type error if array input is not an array", () => {
      const invalidInput: any = 1;

      expect(() => validateInput(invalidInput, () => {})).toThrow(TypeError(invalidInput + isNotArrayErr));
    });

    it("Throws type error if callback input is not a function", () => {
      const notFunction = {};

      expect(() => validateInput([], notFunction)).toThrow(TypeError(notFunction + isNotAFunctionErr))
    })
  })

  describe('mapFn function', () => {
    it("Works properly - like native .map", () => {
      const native = testArray.map((el) => el * 2);
      const tested = mapFn(testArray, (el) => el * 2);

      expect(tested).toEqual(native);
    });

    it("Returns new array with given callback", () => {
      const callback = (element: number) => element * 2;

      expect(mapFn([1, 2, 3], callback)).toEqual([2, 4, 6]);
    });
  });

  describe('filterFn function', () => {
    it("Works properly - like native .filter", () => {
      const native = testArray.filter((el) => el === 2);
      const tested = filterFn(testArray, (el) => el === 2);

      expect(tested).toEqual(native);
    });
  });

  describe('everyFn function', () => {
    it("Works properly - like native .every", () => {
      const native = testArray.every((el) => el === 2);
      const tested = everyFn(testArray, (el) => el === 2);

      expect(tested).toEqual(native);
    })
  })

  describe('someFn function', () => {
    it("Works properly - like native .some", () => {
      const native = testArray.some((el) => el === 2);
      const tested = someFn(testArray, (el) => el === 2);

      expect(tested).toEqual(native);
    })
  })
})