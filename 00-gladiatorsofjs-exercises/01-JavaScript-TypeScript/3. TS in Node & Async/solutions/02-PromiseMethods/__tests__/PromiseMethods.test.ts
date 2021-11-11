import { promiseAll } from "../promiseAll";
import { promiseIgnoreErrors } from "../promiseIgnoreErrors";
import { promiseLast } from "../promiseLast";
import { promiseRace } from "../promiseRace";

import { rejectAfter100ms } from "./test-utils/rejecting-promises";
import {
  resolveAfter100ms,
  resolveAfter150ms,
  resolveImmediately,
} from "./test-utils/resolving-promises";

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

      await promiseRace([resolveImmediately, rejectAfter100ms])
        .then((res) => (result = res))
        .catch((err) => (result = err));

      expect(result).toBe("now");

      await promiseRace([Promise.reject("reject now"), resolveAfter100ms])
        .then((res) => (result = res))
        .catch((err) => (result = err));

      expect(result).toBe("reject now");
    });
  });

  describe("promiseLast function", () => {
    it("Should return value of last resolved promise", async () => {
      const result = await promiseLast([
        resolveImmediately,
        resolveAfter100ms,
        resolveAfter150ms,
      ]);

      expect(result).toBe("150ms");
    });

    it("Should reject if any of promises is rejected", async () => {
      let result;

      await promiseLast([
        resolveImmediately,
        resolveAfter100ms,
        rejectAfter100ms,
      ]).catch((err) => (result = err));

      expect(result).toBe("reject 100ms");
    });
  });

  describe("promiseIgnoreErrors function", () => {
    it("Should return values of resolved promises even if any of promises is rejected", async () => {
      const result = await promiseIgnoreErrors([
        Promise.reject("rejected"),
        resolveImmediately,
        resolveAfter100ms,
        resolveAfter150ms,
        rejectAfter100ms,
      ]);
      const expectedResult = ["now", "100ms", "150ms"];

      expect(result).toEqual(expectedResult);
    });
  });
});
