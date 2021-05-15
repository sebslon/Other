//@ts-nocheck
import { isRectangularTriangle } from "../06-isRectangularTriangle";

describe("isRectangularTriangle function", () => {
  it("Throws error if any of arguments is not number", () => {
    const errorMsg = "isRectangularTriangle function accepts only numbers.";
    const notNumber = "a";

    expect(() => isRectangularTriangle(notNumber, 1, 1)).toThrow(
      Error(errorMsg)
    );
    expect(() => isRectangularTriangle(1, notNumber, 1)).toThrow(
      Error(errorMsg)
    );
    expect(() => isRectangularTriangle(1, 1, notNumber)).toThrow(
      Error(errorMsg)
    );
  });

  it("Throws error if any of arguments is less than 0", () => {
    const errorMsg = "The sides of the triangle should be greater than 0";
    const negValue = -1;

    expect(() => isRectangularTriangle(negValue, 1, 1)).toThrow(
      Error(errorMsg)
    );
    expect(() => isRectangularTriangle(1, negValue, 1)).toThrow(
      Error(errorMsg)
    );
    expect(() => isRectangularTriangle(1, 1, negValue)).toThrow(
      Error(errorMsg)
    );
  });

  it("Throws error if one side is greater than sum of two others", () => {
    const errorMsg =
      "One of the sides is greater than the sum of two others, you can't create a triangle";

    expect(() => isRectangularTriangle(3, 1, 1)).toThrow(Error(errorMsg));
  });

  it("Returns true if triangle is rectangular", () => {
    const cond1 = isRectangularTriangle(3, 4, 5);
    const cond2 = isRectangularTriangle(4, 3, 5);

    expect(cond1).toBe(true);
    expect(cond2).toBe(true);
  });

  it("Returns false if triangle is not rectangular", () => {
    const cond1 = isRectangularTriangle(4, 3, 2);
    const cond2 = isRectangularTriangle(4, 4, 4);

    expect(cond1).toBe(false);
    expect(cond2).toBe(false);
  });
});
