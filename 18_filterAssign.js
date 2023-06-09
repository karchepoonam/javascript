

const arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19];
console.log(`Original Array:`,arrayNumbers);

const arrayGreaterThan50 = arrayNumbers.filter( (element)=> {
    return element>50;
} );
console.log(`greater than50 array numbers:`,arrayGreaterThan50);


const evenNumbers = arrayNumbers.filter( (element)=> {
    return element%2==0;
} );
console.log(`even numbers:`,evenNumbers);


const oddNumbers = arrayNumbers.filter( (element)=> {
    return element%2==1;
} );
console.log(`odd numbers:`,oddNumbers);


const multiplyBy5 = arrayNumbers.filter( (element)=> {
    return element%5==0;
} );
console.log(`numbers which are multiply by 5 :`,multiplyBy5 );


const numbersBetween20and50 = arrayNumbers.filter( (element)=> {
    return element>20&& element<50;
} );
console.log(`numbers Between 20 and50:`,numbersBetween20and50);



