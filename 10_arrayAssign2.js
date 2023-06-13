var arrayNumber=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`Given array is:`, arrayNumber);
console.log("---------------------------------------------------------------");
let lengthOfArray =arrayNumber.length;
console.log(`Length of array is : ${lengthOfArray}`);
console.log("---------------------------------------------------------------");
const zerothIndexValue =arrayNumber[0];
console.log(`First Element is: ${zerothIndexValue}`);

let arrayLength = arrayNumber.length;
const lastElement =arrayNumber[arrayLength-1];
console.log(`Last element: ${lastElement}`);
console.log("---------------------------------------------------------------");

const thirdlastElement =arrayNumber[arrayLength-3];
console.log(`Third Last element in array is: ${thirdlastElement}`);
console.log("---------------------------------------------------------------");
var arrayNumber=[20,31,40,25,23,11,29,9,60,2,11];
var even = [];
for(let i = 0; i < arrayNumber.length; i++) {
       if (arrayNumber[i] % 2 == 0)
       even.push(arrayNumber[i]);
}
  
console.log(`Even numbers in an array are: ${even}`);

var odd = [];
for(let i = 0; i < arrayNumber.length; i++) {
       if (arrayNumber[i] % 2 == 1)
       odd.push(arrayNumber[i]);
}
  
console.log(`odd numbers in an array are: ${odd}`);

console.log("Even positioned numbers in Array:");
for (const index in arrayNumber) {
    if (index%2==0) {
     console.log(`${arrayNumber[index]}`);
    }
 }

 const sumEvens = (arrayNumber) => {
    let sum = 0;
    for (let i = 0; i < arrayNumber.length; i++) {
      if (i % 2 === 0){ 
      sum = sum + arrayNumber[i];
      }
    }
    return sum;
  }
   
  console.log(`Sum of Even positioned elements:`,sumEvens(arrayNumber));
  console.log("---------------------------------------------------------------");
  console.log("odd positioned numbers in Array:");
for (const index in arrayNumber) {
    if (index%2==1) {
     console.log(`${arrayNumber[index]}`);
    }
 }

 const sumOdds = (arrayNumber) => {
    let sum = 0;
    for (let i = 0; i < arrayNumber.length; i++) {
      if (i % 2 === 1){ 
      sum = sum + arrayNumber[i];
      }
    }
    return sum;
  }
   
  console.log(`Sum of Odd positioned elements:`,sumOdds(arrayNumber));

  console.log("---------------------------------------------------------------");
let sum = 0;
for (let i = 0; i < arrayNumber.length; i++) {
  sum += arrayNumber[i]
}
console.log(`Sum off all elements in array is:`,sum) 
 var arrayNumber=[20,31,40,25,23,11,29,9,60,2,11];
var multipleof5 = [];
for(let i = 0; i < arrayNumber.length; i++) {
       if (arrayNumber[i] % 5 == 0)
       multipleof5.push(arrayNumber[i]);
}
  
console.log(`multiple of 5 numbers in an array are: ${multipleof5}`)
console.log("---------------------------------------------------------------");
console.log("is 115 available in array: ");
let array=[20,31,40,25,23,11,29,9,60,2,11];
let el = 115; //Element to be searched
for (let i = 0; i < array.length; i++) {
  if (el === array[i]) {
    console.log('number is not available');
  } else {
    console.log('number is not available');
  }
}

console.log("is 23 available in array: ");
let arrays=[20,31,40,25,23,11,29,9,60,2,11];
let elm = 23; //Element to be searched
for (let i = 0; i < arrays.length; i++) {
  if (elm === arrays[i]) {
    console.log('number is available');
  } 
  }console.log("---------------------------------------------------------------");

var arrayNumber = [20,31,40,25,23,11,29,9,60,2,11];
arrayNumber.splice(3, 0, 55, 66)
console.log(`Insert Numbers:`,arrayNumber);
console.log("---------------------------------------------------------------");
arrayNumber.splice(4,3);
console.log(`Delete 3 elements starting from index 4:`,arrayNumber);




