const array = [10, 5, 'a', 'b','h', 11];
console.log(`Given Array:`,array);

// Ex:Numbers: 5,10,11
// Alphabets: a,b,h

// array.sort();
// console.log(array);

const arrayLetters = array.filter((element) => {
    if (typeof element=='string') {
        return element;
    }
});
//console.log(arrayLetters);
const sortedLetter = arrayLetters.sort();
console.log(`Alphabets in array :`,sortedLetter);

const arrayNumber = array.filter((element) => {
    if (typeof element=='number') {
        return element;
    }
});
//console.log(`Numbers in array :`,arrayNumber);
const sortedArrayNo = arrayNumber.sort((num1,num2) => {
    return num1 > num2 ? 1 : -1;
});
console.log('Numbers in array :',sortedArrayNo);
