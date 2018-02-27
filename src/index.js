class SmartCalculator {
  constructor(initialValue) {
    this.result = initialValue;
    this.array = [];
    this.output = [];
    this.sign = [];
    this.array.push(this.result);
  }

  add(number) {
    this.array.push('+');
    this.array.push(number);
    return this;
  }
  
  subtract(number) {
    this.array.push('-');
    this.array.push(number);
    return this;
  }

  multiply(number) {
    this.array.push('*');
    this.array.push(number);
    return this;
  }

  devide(number) {
    this.array.push('/');
    this.array.push(number);
    return this;
  }

  pow(number) {
    this.array.push('**');
    this.array.push(number);
    return this;
  }

  toString(){
    for (let i = 0; i < this.array.length; i++) {
      if (typeof (this.array[i]) == "number") {
        this.output.push(this.array[i]);
      } else {
        if (this.sign.length == 0) {
          this.sign.push(this.array[i]);
        } else {
          if (this.array[i] == '**') {
            this.sign.push(this.array[i]);
          }
          if (this.array[i] == '*' || this.array[i] == '/') {
            if (this.sign[this.sign.length - 1] == '+' || this.sign[this.sign.length - 1] == '-') {
              this.sign.push(this.array[i]);
            } else if (this.sign[i - 1] == '**' || this.sign[i - 1] == '*' || this.sign[i - 1] == '/') {
              this.output.push(this.sign.pop());
              this.sign.push(this.array[i]);
            }
          }
          if (this.array[i] == '+' || this.array[i] == '-') {
            this.output.push(this.sign.pop());
            this.sign.push(this.array[i]);
          }
        }
      }
    }
    while (this.sign.length != 0){
      this.output.push(this.sign.pop());
    }
    this.array = [];
    console.log(this.output);
    this.output = this.output.reverse();

    while (this.output.length != 0){
      let a = this.output.pop();
      if (typeof(a) != "number"){
        let b2 = this.array.pop();
        let b1 = this.array.pop();
        if (a == '**') {
          this.array.push(b1 ** b2);
        }
        if (a == '*') {
          this.array.push(b1 * b2);
        }
        if (a == '/') {
          this.array.push(b1 / b2);
        }
        if (a == '+') {
          this.array.push(b1 + b2);
        }
        if (a == '-') {
          this.array.push(b1 - b2);
        }
      } else {
        this.array.push(a);
      }
      
    }
    this.result = this.array.pop();
    return this.result;
  } 
}

module.exports = SmartCalculator;
