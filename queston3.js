// Problem 3
// Create an object Calculator with methods add, subtract, multiply, and divide. Demonstrate the usage of this
// within these methods such that method chaining of add, subtract, multiply and divide is possible.

const Calculator = {
  result: 0,

  add(value) {
    this.result += value;
    return this; // Enable method chaining
  },

  subtract(value) {
    this.result -= value;
    return this;
  },

  multiply(value) {
    this.result *= value;
    return this;
  },

  divide(value) {
    if (value !== 0) {
      this.result /= value;
    } else {
      console.log("Error: Division by zero");
    }
    return this;
  },

  getResult() {
    console.log(`Result: ${this.result}`);
    return this;
  },

  reset() {
    this.result = 0;
    return this;
  }
};

// Example
Calculator.add(10).subtract(2).multiply(3).divide(2).getResult(); // Output: Result: 12
