import { getMyAge } from "../07-getMyAge";

describe("getMyAge function", () => {
  let actualYear: number;

  beforeAll(() => {
    actualYear = new Date().getFullYear();
  });

  it("Throws error if string input is not valid format of year", () => {
    const errorMsg = "Input is invalid format of year";

    expect(() => getMyAge("a123")).toThrow(Error(errorMsg));
  });

  it("Throws error if Date has invalid format", () => {
    const invalidDate = new Date("foo");
    const errorMsg = "Invalid date format";

    expect(() => getMyAge(invalidDate)).toThrow(Error(errorMsg));
  });

  it("Throws error if input is of any invalid type", () => {
    const invalidType: any = {};
    const errorMsg = "Enter proper input to calculate your age..";

    expect(() => getMyAge(invalidType)).toThrow(Error(errorMsg));
  });

  it("Works properly - Date object as an argument", () => {
    const year = new Date(1990, 1, 1).getFullYear();

    const result = getMyAge(year);

    const expectedResult = actualYear - year;

    expect(result).toBe(expectedResult);
  });

  it("Works properly - number as an argument", () => {
    const result = getMyAge(2000);

    const expectedResult = actualYear - 2000;

    expect(result).toBe(expectedResult);
  });

  it("Works properly - string as an argument", () => {
    const result = getMyAge("2000");

    const expectedResult = actualYear - 2000;

    expect(result).toBe(expectedResult);
  });

  it("Returns years to your birth date if passed date is in the future", () => {
    const futureYear = 2100;

    const result = getMyAge(`${futureYear}`);
    const result2 = getMyAge(futureYear);
    const result3 = getMyAge(new Date(futureYear, 1, 1));

    const yearToBirth = -(actualYear - 2100);
    const expectedResult = `You will be born in ${yearToBirth} years`;

    expect(
      [result, result2, result3].every((result) => result === expectedResult)
    ).toBe(true);
  });
});
