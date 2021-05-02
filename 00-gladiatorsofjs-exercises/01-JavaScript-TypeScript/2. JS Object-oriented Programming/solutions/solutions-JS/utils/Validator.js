class Validator {
  key;
  value;

  static check(key, value) {
    this.key = key;
    this.value = value;
    return this;
  }

  static isNotEmpty() {
    if(this.value.length === 0) {
      throw new Error(this.key + ' should not be empty.')
    }
    return this;
  }
  
  static isString() {
    if(!(typeof this.value === 'string')) {
      throw new Error(this.key + ' should be a string.')
    };
    return this;
  }

  static isNumber() {
    if(!(typeof this.value === 'number')) {
      throw new Error(this.key + ' should be a number.')
    };
    return this;
  }
}

module.exports = Validator;