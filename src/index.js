class SmartCalculator {
  constructor(initialValue) {
    this.result = initialValue;
    this.array = [];
    this.sign = [];
    this.array.push(this.result);
  }

  add(number) {
    this.array.push(number);
    this.sign.push('+');
    return this;
  }
  
  subtract(number) {
    this.array.push(number);
    this.sign.push('-');
    return this;
  }

  multiply(number) {
    this.array.push(number);
    this.sign.push('*');
    return this;
  }

  devide(number) {
    this.array.push(number);
    this.sign.push('/');
    return this;
  }

  pow(number) {
    this.array.push(number);
    this.sign.push('**');
    return this;
  }

  toString(){
    while (this.sign.length != 0) {
      for (let i = 0; i < this.sign.length; i++) {
        if (this.sign[i] == '**') {
          let a = this.array[i];
          let b = this.array[i + 1];
          let res = this.array[i] ** this.array[i + 1];
          this.sign.splice(i, 1);
          this.array[i] = res;
          this.array.splice(i + 1, 1);
        }
      }
      for (let i = 0; i < this.sign.length; i++) {
        if (this.sign[i] == '*') {
          let a = this.array[i];
          let b = this.array[i + 1];
          let res = this.array[i] * this.array[i + 1];
          this.sign.splice(i, 1);
          this.array[i] = res;
          this.array.splice(i + 1, 1);
        }
        if (this.sign[i] == '/') {
          let a = this.array[i];
          let b = this.array[i + 1];
          let res = this.array[i] / this.array[i + 1];
          this.sign.splice(i, 1);
          this.array[i] = res;
          this.array.splice(i + 1, 1);
        }
      }
      for (let i = 0; i < this.sign.length; i++) {
        if (this.sign[i] == '+') {
          let a = this.array[i];
          let b = this.array[i + 1];
          let res = this.array[i] + this.array[i + 1];
          this.sign.splice(i, 1);
          this.array[i] = res;
          this.array.splice(i + 1, 1);
        }
        if (this.sign[i] == '-') {
          let a = this.array[i];
          let b = this.array[i + 1];
          let res = this.array[i] - this.array[i + 1];
          this.sign.splice(i, 1);
          this.array[i] = res;
          this.array.splice(i + 1, 1);
        }
      }
    }
    this.result = this.array[0];
    return this.result;
  } 
}

module.exports = SmartCalculator;
