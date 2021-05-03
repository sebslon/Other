class Validator {
  key;
  value;

  static check(key, value) {
    this.key = key;
    this.value = value;
    return this;
  }

  static isNotEmpty() {
    if (this.value.length === 0) {
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
    if (!(typeof this.value === "number")) {
      throw new Error(this.key + " should be a number.");
    }
    return this;
  }

  static min(minValue) {
    if (typeof minValue !== "number") {
      throw new Error("Minimum value should be a number");
    }

    if (typeof this.value === "string" || Array.isArray(this.value)) {
      this.value = this.value.length;
      this.key = this.key + " length";
    }

    if (this.isNumber(this.value) && this.value >= minValue) {
      return this;
    }

    throw new Error(`${this.key} should be greater than ${minValue}`);
  }

  static max(maxValue) {
    if (typeof maxValue !== "number") {
      throw new Error("Maximum value should be a number");
    }

    if (typeof this.value === "string" || Array.isArray(this.value)) {
      this.value = this.value.length;
      this.key = this.key + " length";
    }

    if (this.isNumber(this.value) && this.value <= maxValue) {
      return this;
    }

    throw new Error(`${this.key} should be lower than ${maxValue}`);
  }

  static between(min, max) {
    if (typeof this.value === "string" || Array.isArray(this.value)) {
      this.value = this.value.length;
      this.key = this.key + " length";
    }

    if (this.isNumber(this.value) && this.value <= max && this.value >= min) {
      return this;
    }
    throw new Error(`${this.key} should be between ${min} and ${max}`);
  }
}

module.exports = Validator;
