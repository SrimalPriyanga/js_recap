// Map
{
  const arr = [1, 2, 3, 4];

  // Double: [2, 4, 6, 8]
  let outputDouble = arr.map((val) => val * 2);
  console.log(outputDouble);

  // Triple: [3, 6, 9, 12]
  let outputTriple = arr.map((val) => val * 3);
  console.log(outputTriple);

  // Binary: ["101", "", "", ""]
  let outputBinary = arr.map((val) => val.toString(2));
  console.log(outputBinary);
}
