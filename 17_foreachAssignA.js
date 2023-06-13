
const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601]
console.log(`array Numbers:`, arrayNumbers);

console.log("----log the elements with index----");
arrayNumbers.forEach( (element,index) => {
 {
        console.log(element);
    }
} );

console.log("----Find Positive Numbers----");
arrayNumbers.forEach( (element) => {
    if (element>0) {
        console.log(element);
    }
} );

console.log("----Find Negative Numbers----");
arrayNumbers.forEach( (element) => {
    if (element<0) {
        console.log(element);
    }
} );

console.log("----Find even Numbers----");
arrayNumbers.forEach( (element) => {
    if (element%2==0) {
        console.log(element);
    }
} );

console.log("----sum of all array elements----");

let sum = 0;
arrayNumbers.forEach( (element,index) => {
    if ( index=0);
    sum += arrayNumbers[index]
 {
 console.log(sum);
}
})


console.log("----even index aaray value ----");
arrayNumbers.forEach( (element,index) => {
    if (index%2==0) {
        console.log(element);
    }
} );