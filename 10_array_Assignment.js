
var arrayFruits =["Banana","Orange","Apple","Mango","WaterMelon"];
console.log(`Given array:`, arrayFruits);
console.log("------------------------------------------------------------------------------");

const zerothIndexValue = arrayFruits[0];
console.log(`First Element: ${zerothIndexValue}`);

// Accessing last element
let arrayLength = arrayFruits.length;
const lastElement = arrayFruits[arrayLength-1];
console.log(`Last Element: ${lastElement}`);
console.log("---------------------------------------------------------------------------");

// Adding element in the first position
console.log(`Adding element in the first position`);
arrayFruits.unshift("Papaya");
console.log(arrayFruits);

arrayFruits.splice(4, 1);
console.log( `Removing Mango:`,arrayFruits);
// Adding element in the last position
console.log(`Adding element in the last position`);
arrayFruits.push("PineApple");
console.log(arrayFruits);
console.log("---------------------------------------------------------------------------------------");
arrayFruits.splice(5, 0,"Dragon Fruit")
console.log(`insert element before water melon:`);
console.log(arrayFruits);
console.log("------------------------------------------------------------------------------------");
console.log(`Replacing the array value`);
arrayFruits.splice(2,1, "Kiwi")
console.log(arrayFruits);
console.log("------------------------------------------------------------------------------");
;
const sliceArr = arrayFruits.slice(1,4);
console.log(`Elements from 1 to 4:`,sliceArr);

console.log("---------------------------------------------------------------------------------");

const sliceArray = arrayFruits.slice(5,8);
console.log(`Last 3 Elements of Array:`,sliceArray);




