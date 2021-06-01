import { filterWith } from "../10-filterWith";

import { data } from "../constants";

describe("filterWith function", () => {
  const examplePhrase = "Juliet";

  it("Throws error if first argument is not an array", () => {
    const notAnArrayErr = "First argument must be an array.";
    const invalidInputs: any[] = [3, {}, true, "s"];

    invalidInputs.forEach((input) => {
      expect(() => filterWith(input, examplePhrase)).toThrow(
        Error(notAnArrayErr)
      );
    });
  });

  it("Throws error if phrase is not a string", () => {
    const invalidPhrases: any[] = [3, {}, true, []];
    const errorMsg = "Phrase must be a string";

    invalidPhrases.forEach((phrase) => {
      expect(() => filterWith(data, phrase)).toThrow(Error(errorMsg));
    });
  });

  it("Throws error if phrase length is lower or equal to 2", () => {
    const phrase = "aa";
    const errorMsg = "Phrase should have length greater than 2";

    expect(() => filterWith([], phrase)).toThrow(Error(errorMsg));
  });

  it("Throws error if array doesn't contain any object with given phrase", () => {
    const phrase = "111111";
    const errorMsg = "Array does not contain any object with that phrase.";

    expect(() => filterWith(data, phrase)).toThrow(Error(errorMsg));
  });

  it("Returns objects containing given phrase", () => {
    const expectedResult: any = [data[1]]

    expect(filterWith(data, examplePhrase)).toEqual(expectedResult)
  })
});
