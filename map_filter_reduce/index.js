// Map
{
  const arr = [1, 2, 3, 4];

  // Double: [2, 4, 6, 8]
  let outputDouble = arr.map((val) => val * 2);
  //console.log(outputDouble);

  // Triple: [3, 6, 9, 12]
  let outputTriple = arr.map((val) => val * 3);
  //console.log(outputTriple);

  // Binary: ["101", "", "", ""]
  let outputBinary = arr.map((val) => val.toString(2));
  //console.log(outputBinary);
}

// Filter
{
  const numbers = [1, 3, 5, 6, 7, 8, 10];

  const oddNumbers = function (x) {
    return x % 2 === 1;
  };
  const evenNumbers = function (x) {
    return x % 2 === 0;
  };
  const greaterThan5 = function (x) {
    return x > 5;
  };

  const oddResults = numbers.filter(oddNumbers);
  console.log(oddResults);
  const evenResults = numbers.filter(evenNumbers);
  console.log(evenResults);
  const greaterThan5Results = numbers.filter(greaterThan5);
  console.log(greaterThan5Results);

  // Simple way using es6 syntax
  console.log(numbers.filter((x) => x > 5));
  
}

// Reduce
