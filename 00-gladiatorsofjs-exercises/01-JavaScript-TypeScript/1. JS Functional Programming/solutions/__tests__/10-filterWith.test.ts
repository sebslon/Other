import { filterWith } from "../10-filterWith";

import { data } from "../constants";

describe("filterWith function", () => {
  const examplePhrase = "Juliet";

  it("Throws error if first argument is not an array", () => {
    const notAnArrayErr = "First argument must be an array.";
    const data: any = "s";

    expect(() => filterWith(data, examplePhrase)).toThrow(Error(notAnArrayErr));
  });

  it("Throws error if phrase is not a string", () => {
    const invalidPhrases: any[] = [3, {}, true, []];
    const errorMsg = "Phrase must be a string";

    invalidPhrases.forEach((phrase) => {
      expect(() => filterWith(data, phrase)).toThrow(Error(errorMsg));
    });
  });
});
