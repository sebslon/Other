//Basic validating class made to validate data in JS/TS exercises.

class Validator {
  private static instance: Validator;
  private static key: string;
  private static value: string | number | (string | number)[];

  private constructor() {}

  static getInstance() {
    if (!Validator.instance) {
      return (Validator.instance = new Validator());
    }
    return Validator.instance;
  }

  static check(key: string, value: string | number | string[] | number[]) {
    this.key = key;
    this.value = value;
    return this;
  }

  static isNotEmpty() {
    if (
      (typeof this.value === "string" || Array.isArray(this.value)) &&
      this.value.length === 0
    ) {
      throw new Error(this.key + " should not be empty.");
    }
    return this;
  }

  static isString() {
    if (typeof this.value !== "string") {
      throw new Error(this.key + " should be a string.");
    }
    return this;
  }

  static isArray() {
    if (!Array.isArray(this.value)) {
      throw new Error(this.key + " is not an array.");
    }
    return this;
  }

  static isNumber() {
    if (typeof this.value !== "number") {
      throw new Error(this.key + " should be a number.");
    }
    return this;
  }

  static isValidEmail() {
    const validEmailRegex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const value = this.value.toString();

    if (!validEmailRegex.test(value)) {
      throw new Error("Invalid email format");
    }
    return this;
  }

  static min(minValue: number) {
    if (typeof minValue !== "number") {
      throw new Error("Minimum value should be a number");
    }

    if (typeof this.value === "string" || Array.isArray(this.value)) {
      this.value = this.value.length;
      this.key = this.key + " length";
    }

    if (this.value < minValue) {
      throw new Error(`${this.key} should be greater than ${minValue}`);
    }

    return this;
  }

  static max(maxValue: number) {
    if (typeof maxValue !== "number") {
      throw new Error("Maximum value should be a number");
    }

    if (typeof this.value === "string" || Array.isArray(this.value)) {
      this.value = this.value.length;
      this.key = this.key + " length";
    }

    if (this.value > maxValue) {
      throw new Error(`${this.key} should be lower than ${maxValue}`);
    }

    return this;
  }

  static between(min: number, max: number) {
    if (typeof this.value === "string" || Array.isArray(this.value)) {
      this.value = this.value.length;
      this.key = this.key + " length";
    }

    if (this.value > max && this.value < min) {
      throw new Error(`${this.key} should be between ${min} and ${max}`);
    }

    return this;
  }
}

export default Validator;
