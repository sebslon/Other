//@ts-ignore
//@ts-nocheck

import Validator from "../utils/Validator";

describe("Validator", () => {
  it("isNotEmpty throws an error if input is empty", () => {
    expect(() => Validator.check("Value", "").isNotEmpty()).toThrowError();
    expect(() => Validator.check("Value", []).isNotEmpty()).toThrowError();
  });

  it("isString throws an error if input is not a string", () => {
    expect(() => Validator.check("Value", {}).isString()).toThrowError();
    expect(() => Validator.check("Value", 1).isString()).toThrowError();
    expect(() => Validator.check("Value", null).isString()).toThrowError();
  });

  it("isArray throws an error if input is not an array", () => {
    expect(() => Validator.check("Value", {}).isArray()).toThrowError();
    expect(() => Validator.check("Value", 1).isArray()).toThrowError();
    expect(() => Validator.check("Value", null).isArray()).toThrowError();
  });

  it("isNumber throws an error if input is not a number", () => {
    expect(() => Validator.check("Value", {}).isNumber()).toThrowError();
    expect(() => Validator.check("Value", "a").isNumber()).toThrowError();
    expect(() => Validator.check("Value", null).isNumber()).toThrowError();
  });

  it("isValidEmail throws an error if input is not a valid email format", () => {
    expect(() => Validator.check("Value", {}).isValidEmail()).toThrowError();
    expect(() => Validator.check("Value", "a").isValidEmail()).toThrowError();
    expect(() => Validator.check("Value", null).isValidEmail()).toThrowError();
  });

  it("isStrongPassword throws an error if input doesn't contain capital letter, special char, number", () => {
    expect(() => Validator.check("Value", "Password1").isStrongPassword()).toThrowError();
    expect(() => Validator.check("Value", "Password!").isStrongPassword()).toThrowError();
    expect(() => Validator.check("Value", "a").isStrongPassword()).toThrowError();
    expect(() => Validator.check("Value", null).isStrongPassword()).toThrowError();
  });

  it("min throws an error if input is lower than min value", () => {
    expect(() => Validator.check("Value", 2).min(5)).toThrowError();
    expect(() => Validator.check("Value", "test").min(5)).toThrowError();
  });

  it("max throws an error if input is higher than max value", () => {
    expect(() => Validator.check("Value", 6).max(5)).toThrowError();
  });

  it("between throws an error if input (or its length) is higher than max value", () => {
    expect(() => Validator.check("Value", 6).between(0, 5)).toThrowError();
    expect(() => Validator.check("Value", "testtest").between(0, 5)).toThrowError();
    expect(() => Validator.check("Value", [1, 2, 3, 4, 5, 6]).between(0, 5)).toThrowError();
  });
});
