const users = [
  { first: "srimal", last: "priyanga", age: 31 },
  { first: "Rock", last: "Alice", age: 24 },
  { first: "Bob", last: "Nick", age: 18 },
  { first: "john", last: "Mark", age: 50 },
  { first: "Mark", last: "Anne", age: 31 },
];

// Map
{
  const arr = [1, 2, 3, 4];

  // Double: [2, 4, 6, 8]
  let outputDouble = arr.map((val) => val * 2);
  //console.log(outputDouble);

  // Triple: [3, 6, 9, 12]
  let outputTriple = arr.map((val) => val * 3);
  //console.log(outputTriple);

  // Binary: ["101", first
  // users.map((user) => console.log(`${user.first} ${user.last}`));

  /* Find full name of users whose age is below 30
   * Method chaining
   */
  const results = users
    .filter((user) => user.age < 30)
    .map((filterResult) => filterResult.first + " " + filterResult.last);

  // console.log(results);
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
  //console.log(oddResults);
  const evenResults = numbers.filter(evenNumbers);
  //console.log(evenResults);
  const greaterThan5Results = numbers.filter(greaterThan5);
  //console.log(greaterThan5Results);

  // Simple way using es6 syntax
  //console.log(numbers.filter((x) => x > 5));

  // Find users whose age is below 30
  const results = users.filter((user) => user.age < 30);
  // console.log(results);
}

// Reduce
{
  const values = [9, 4, 5, 7, 2, 3, 10];

  function sum(params) {
    let sum = 0;
    for (let i = 0; i < params.length; i++) {
      sum = sum + params[i];
    }
    return sum;
  }
  // console.log(sum(values));

  // console.log(values.reduce((acc, curr) => acc + curr, 0));

  /*
  console.log(
    values.reduce(
      // renaming acc as max
      function (max, curr) {
        if (max < curr) max = curr;
        return max;
      },
      0
    )
  ); */

  // to get acc = [age: number of times]
  const results = users.reduce((acc, cur) => {
    if (acc[cur.age]) {
      acc[cur.age] = ++acc[cur.age];
    } else {
      acc[cur.age] = 1;
    }
    return acc;
  }, {});
  // console.log(results);

  // Get users full name whose age is below 30
  const reduceResults = users.reduce((acc, cur) => {
    if (cur.age < 30) {
      acc.push(cur.first + " " + cur.last);
    }
    return acc;
  }, []);
  // console.log(reduceResults);
}
