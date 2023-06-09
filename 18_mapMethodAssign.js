const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`Original Array:`, arrayNumbers);
const arrayNumbersTrans = arrayNumbers.map((element) => {
  return element + 10;
});
console.log(`add 10 into each element:`, arrayNumbersTrans);
console.log('--------------------------------------------------------------------------------------');
const arrayNumbersTransform = arrayNumbers.map((element) => {
  return element * element;
});
console.log(`Original Array:`,arrayNumbers);
console.log(`Square of each array element:`);
console.log(arrayNumbersTransform);
console.log('--------------------------------------------------------------------------------------');
const arrayNumbersTranss = arrayNumbers.map((element, index) => {
  return element + index;
});
console.log(`Original Array:`, arrayNumbers);
console.log(`Adding index value to each array element:`);
console.log(arrayNumbersTranss);
