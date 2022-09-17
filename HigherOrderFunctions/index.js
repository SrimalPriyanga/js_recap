{
  function x() {
    // console.log("x");
  }

  // Higher order function can accepts functions as Parameters
  function y(x) {
    x();
  }

  y(x);
}

// console.log("--------------------------------------------");

{
  const radius = [3, 2, 5, 1];

  const area = function (rad) {
    return Math.PI * rad * rad;
  };

  const circumference = function (rad) {
    return 2 * Math.PI * rad;
  };

  const diameter = function (rad) {
    return 2 * rad;
  };

  // 1
  // Higher order function
  function calculate(radius, logic) {
    const results = [];
    for (let i = 0; i < radius.length; i++) {
      results.push(logic(radius[i]));
    }
    return results;
  }
  console.log(calculate(radius, area));
  console.log(calculate(radius, circumference));
  console.log(calculate(radius, diameter));

  //2
  // log same result using inbuilt map instead of calculate higher order function.
  // This explain that map also a Higher order function.
  console.log(radius.map(area));
  console.log(radius.map(circumference));
  console.log(radius.map(diameter));

  // 3
  // Use prototype to make calculate as an inbuilt function
  Array.prototype.calculate = function (callback) {
    const results = [];
    for (let i = 0; i < this.length; i++) {
      results.push(callback(this[i]));
    }
    return results;
  };
  console.log(radius.calculate(area));
  console.log(radius.calculate(circumference));
  console.log(radius.calculate(diameter));
}
