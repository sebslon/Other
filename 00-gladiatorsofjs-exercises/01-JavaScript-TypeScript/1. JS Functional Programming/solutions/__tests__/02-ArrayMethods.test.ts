//@ts-nocheck

import { forEachFn } from '../02-ArrayMethods';

describe('ArrayMethods', () => {
  const inputIsNotArrayErr = "Given input is not an array."

  describe('forEach function', () => {
    it('Throws type error if input is not an array', () => {
      expect(() => forEachFn(1, () => {})).toThrow(TypeError(inputIsNotArrayErr))
    });

    it('Calls function for every element', () => {
      const arr = [1, 2, 3];
      const fn = jest.fn();

      forEachFn(arr, fn);
      expect(fn).toBeCalledTimes(arr.length);
    });

    it('Doesnt return anything - returns undefined', () => {
      const result = forEachFn([1, 2], (el) => el);
      expect(result).toBe(undefined);
    })
  })
})