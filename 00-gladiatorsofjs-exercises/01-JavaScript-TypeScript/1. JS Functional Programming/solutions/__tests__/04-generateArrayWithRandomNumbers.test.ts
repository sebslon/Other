import {
  generateArrayWithRandomNumbers,
  generateArrayOfArraysWithRandomNumbers,
} from "../04-generateArrayWithRandomNumbers";

describe("generateArrayWithRandomNumbers function", () => {
  it("Generates array with ten random numbers between 1 and 10 array if no arguments passed", () => {
    const result = generateArrayWithRandomNumbers();

    expect(result.every((el) => el >= 1 && el <= 10)).toBe(true);
    expect(result.length).toBe(10);
  });

  it("Works properly with proper arguments", () => {
    const result = generateArrayWithRandomNumbers(5, 0, 5);

    expect(result.length).toBe(5);
    expect(result.every((num) => num >= 0 && num <= 5));
  });

  it("Throws errors if any of arguments is not integer", () => {
    const notIntegerValue = 1.5;

    expect(() =>
      generateArrayWithRandomNumbers(notIntegerValue, 1, 1)
    ).toThrowError();
    expect(() =>
      generateArrayWithRandomNumbers(1, notIntegerValue, 1)
    ).toThrowError();
    expect(() =>
      generateArrayWithRandomNumbers(1, 1, notIntegerValue)
    ).toThrowError();
  });

  it("Throws error if argument howManyNumbers is less than 0", () => {
    expect(() => generateArrayWithRandomNumbers(-1, 1, 1)).toThrowError();
  });

  it("Throws error if value of argument min is greater than max", () => {
    expect(() => generateArrayWithRandomNumbers(10, 5, 1)).toThrowError();
  });
});

describe("generateArrayOfArraysWithRandomNumbers function", () => {
  it("Generates array with 10 arrays with random numbers between 1 and 10 if arguments are not passed", () => {
    const result = generateArrayOfArraysWithRandomNumbers();

    expect(result.every((arr) => arr.every((el) => el >= 1 && el <= 10))).toBe(
      true
    );
    expect(result.length).toBe(10);
  });

  it("Works properly with proper arguments", () => {
    const arraysAmount = 5;
    const elemInArrayAmount = 5;
    const minValue = 0;
    const maxValue = 5;
    const result = generateArrayOfArraysWithRandomNumbers(
      arraysAmount,
      elemInArrayAmount,
      minValue,
      maxValue
    );

    expect(result.length).toBe(5);
    expect(result.every(arr => arr.every(num => num >= 0 && num <= 5)));
  });

  it("Throws error if howManyArrays argument is not integer", () => {
    expect(() => generateArrayOfArraysWithRandomNumbers(10.1)).toThrowError();
  });
});
