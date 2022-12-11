var assert = require('assert');

function pow(x, n) {
    return x**n;
}

describe("pow", function() {

    it("raises to 2-th power", function() {
      assert.equal(pow(2, 2), 4);
      
    });

    it("raises to 3-th power", function() {
        assert.equal(pow(2, 3), 9);
      });
  
  });