//@ts-nocheck
import { paginateArray, Settings } from "../08-pagination";

describe("paginateArray function", () => {
  const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  it("Throws error if data input is not an array", () => {
    const invalidInput = "string";
    const errorMsg = "Given input is not an array.";

    expect(() => paginateArray(invalidInput)).toThrow(Error(errorMsg));
  });

  it("Throws errors if actualPageIndex is lower than 0 or is not an integer", () => {
    const settings = { actualPageIndex: -1, entriesOnPage: 5 };
    const settings1 = { actualPageIndex: 1.5, entriesOnPage: 5 };
    const settings2 = { actualPageIndex: "s", entriesOnPage: 5 };

    const errorMsg = "actualPageIndex is invalid number.";

    expect(() => paginateArray(input, settings)).toThrow(Error(errorMsg));
    expect(() => paginateArray(input, settings1)).toThrow(Error(errorMsg));
    expect(() => paginateArray(input, settings2)).toThrow(Error(errorMsg));
  });

  it("Throws errors if entriesOnPage is lower than 1 or is not an integer", () => {
    const settings = { actualPageIndex: 0, entriesOnPage: 0 };
    const settings1 = { actualPageIndex: 0, entriesOnPage: 1.5 };
    const settings2 = { actualPageIndex: 0, entriesOnPage: "s" };

    const errorMsg = "entriesOnPage is invalid number.";

    expect(() => paginateArray(input, settings)).toThrow(Error(errorMsg));
    expect(() => paginateArray(input, settings1)).toThrow(Error(errorMsg));
    expect(() => paginateArray(input, settings2)).toThrow(Error(errorMsg));
  });

  it("Paginates array, returns first 5 entries for default values", () => {
    const result = paginateArray(input);

    expect(result).toEqual(input.slice(0, 5));
  });

  it("Paginates array, returns 5 entries from 3 page", () => {
    const settings: Settings = { actualPageIndex: 3, entriesOnPage: 5 };

    const page = settings.actualPageIndex;
    const entries = settings.entriesOnPage;

    const result = paginateArray(input, settings);
    const expectedResult = input.slice(page * entries, entries);

    expect(result).toEqual(expectedResult);
  });

  it("Returns empty array if there are no elements on actual page", () => {
    const result = paginateArray(input, { actualPageIndex: 100, entriesOnPage: 5});

    expect(result).toEqual([]);
  })
});
