import { promiseAll } from "../promiseAll";
import { promiseRace } from "../promiseRace";
import { rejectAfter100ms } from "./rejecting-promises";
import {
  resolveAfter100ms,
  resolveAfter150ms,
  resolveImmediately,
} from "./resolving-promises";

describe("Promise Methods", () => {
  describe("promiseAll function", () => {
    it("Should resolve with empty array if argument is an empty array", async () => {
      const result = await promiseAll([]);
      const nativePromiseAll = await Promise.all([]);

      expect(result).toEqual(nativePromiseAll);
      expect(result).toEqual([]);
    });

    it("Should resolve with array of resolved promises when all promises are resolved (in order)", () => {
      const expectedResult = ["100ms", "150ms", "now"];

      promiseAll([
        resolveAfter100ms,
        resolveAfter150ms,
        resolveImmediately,
      ]).then((res) => {
        expect(res).toEqual(expectedResult);
      });
    });

    it("Should reject if any of promises is rejected", async () => {
      let result;

      await Promise.all([resolveImmediately, rejectAfter100ms])
        .then((res) => (result = res))
        .catch((err) => (result = err));

      expect(result).toBe("reject 100ms");
    });
  });

  describe("promiseRace function", () => {
    it("Should return value of first resolved/rejected promise", async () => {
      let result;

      try {
        result = await promiseRace([resolveImmediately, rejectAfter100ms]);
      } catch (err) {
        result = err;
      }

      expect(result).toBe("now");

      try {
        result = await promiseRace([
          Promise.reject("reject now"),
          resolveAfter100ms,
        ]);
      } catch (err) {
        result = err;
      }

      expect(result).toBe("reject now");
    });
  });
});
