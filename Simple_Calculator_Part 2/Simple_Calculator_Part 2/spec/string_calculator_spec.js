let myTest = require("../src/string_calculator");
let myTest = myTest.Calculator;

describe("A simple calculator that can add two numbers", function () {
  it("should add two or more", function () {
    expect(calculator.add(3, 5)).toBe(8);
  });
});

describe("Checking simple calculator that multiply multiple numbers", function () {
  it("should be able to multiply two or more numbers", function () {
    expect(calculator.multiply(30, 2)).toEqual(60);
  });
});

describe("A simple calculator that can add multiple numbers", function () {
  it("should add two or more", function () {
    expect(calculator.add(3, 5, 2)).toBe(10);
  });
});

describe("simple calculator that can return the last result", function () {
  it("should be able to add two numbers", function () {
    expect(calculator.add(1, 2)).toBe(3);
  });
});

describe("simple calculator that can use the last result as a parameter", function () {
  it("should be able to use the last result as a parameter", function () {
    expect(calculator.multiply("LAST", 5)).toEqual(15); // the value of "LAST" is now 15
  });
});

describe("simple calculator that can return the last result", function () {
  it("should be able to add two numbers", function () {
    expect(calculator.add(1, 2)).toBe(3);
  });
});

describe("simple calculator that can return the last result", function () {
  it("should be able to add two numbers", function () {
    expect(calculator.add(10, 20)).toBe(30);
  });
});

describe("simple calculator that can return the last result", function () {
  it("should be able to add two numbers", function () {
    expect(calculator.add(100, 200)).toBe(300);
  });
});

describe("simple calculator that can use the last result as a parameter", function () {
  it("should be able to use the last result as a parameter", function () {
    expect(calculator.multiply("LAST", 10)).toEqual(310); // the value of "LAST" is now 310
  });
});

describe("simple calculator that can use the slot function result as a parameter", function () {
  it("should be able to use the last result as a parameter", function () {
    expect(calculator.multiply("SLOT_1", 5)).toEqual(8);
  });
});

describe("simple calculator that can use the slot function result as a parameter", function () {
  it("should be able to use the last result as a parameter", function () {
    expect(calculator.add("SLOT_2", 2)).toEqual(60);
  });
});