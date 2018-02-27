class SmartCalculator {
  constructor(initialValue) {
    this.initialValue = initialValue.toString();
  }

  add(number) {
    this.initialValue += '+' + number.toString();
    return this;
  }

  subtract(number) {
    this.initialValue += '-' + number.toString();
    return this;
  }

  multiply(number) {
    this.initialValue += '*' + number.toString();
    return this;
  }

  devide(number) {
    this.initialValue += '/' + number.toString();
    return this;
  }

  pow(number) {
    this.initialValue += '**' + number.toString();
    return this;
  }

  toString() {
    return eval(this.initialValue);
  }
}

module.exports = SmartCalculator;