
function stringHandsOn(givenstring) {
    console.log("givenstring:",givenstring);

}
stringHandsOn("  Hey You Are Doing Good,Keep It Up   ");

var stringHandsOn="  Hey You Are Doing Good,Keep It Up   ";
var stringHandsOnLength = stringHandsOn.length;
console.log("Total number of character in string is: ", stringHandsOnLength);
console.log("------------------------------------------------");

var trimmedstringHandsOn = stringHandsOn.trim();
var lengthAfterTrim = trimmedstringHandsOn.length;
console.log("length of stringHandsOn is: ", trimmedstringHandsOn.length );
console.log(" total extra spaces are : ", stringHandsOnLength-lengthAfterTrim);
console.log("-------------------------------------------------");
var stringHandsOn="Hey You Are Doing Good,Keep It Up";
var charAtZeroIndex = stringHandsOn.charAt(0);
console.log("Char at first index: ",charAtZeroIndex);

var charAtLastIndex = stringHandsOn.charAt(stringHandsOn.length-1);
console.log("Char at last index: ",charAtLastIndex);

console.log("--------------------------");

var stringHandsOn="Hey You Are Doing Good,Keep It Up";
var resultSplit = stringHandsOn.split(" ");

//console.log("After slipt words are:",resultSplit, "Total number of words: ",resultSplit.length);
console.log(`Total number of words ${resultSplit.length} `);

var indexOfGood = stringHandsOn.indexOf("Good")

var result =  stringHandsOn.indexOf("Good");
console.log(` index of good  are: ${result}`);
console.log("------------------------------------");

var subStringResult =stringHandsOn .substring(22);
console.log("Substring result is: ", subStringResult);
var sliceResult =stringHandsOn.slice(22);
console.log("Slice Result is: ", sliceResult);
console.log("---------------------------------------");
var stringHandsOn="Hey You Are Doing Good,Keep It Up";
var result = stringHandsOn.endsWith("Up");
console.log(` Is ${stringHandsOn} ends with word "Up" : ${result}`);
console.log("----------------------------------------------------");
var stringHandsOn="Hey You Are Doing Good,Keep It Up";
var result =  stringHandsOn.startsWith("Hey");
console.log(` Is ${ stringHandsOn} starts with character "Hey" : ${result}`);





