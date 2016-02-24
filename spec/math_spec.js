// tell the spec where to find our code
var math = require('../math');

describe("A math program to do arithmetic", function() {
 
  it("can add two numbers", function() {
    expect(math.add(3,5)).toBe(8);
  });

  it ("can subtract two numbers", function () {
  	expect(math.subtract(7,3)).toBe(4);
  });

  it ("can multiply two numbers", function() {
  	expect(math.multiply(5,3)).toBe(15);
  });

  it ("can divide two numbers", function() {
  	expect(math.divide(10,2)).toBe(5);
  });
});

