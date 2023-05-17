function squareOfWord(string1) {
  console.log("string1:", string1);
}
squareOfWord("JavaScript");
var string1 = "JavaScript";
var string1Length = string1.length;
console.log("length of word in string is: ", string1Length);
var square = function (one) {
  var result = one * one;
  return `square of 10 : ${result}`;
};
var result = square(10);
console.log(result);

function squareOfWord(string2) {
  console.log("string2:", string2);
}
squareOfWord("Google Chrome");
var string2 = "Google Chrome";
var string2Length = string2.length;
console.log("length of word in string is: ", string2Length);
var square = function (one) {
  var result = one * one;
  return `square of 13: ${result}`;
};
var result = square(13);
console.log(result);

function squareOfWord(string3) {
  console.log("string3:", string3);
}
squareOfWord("Developer Smart");
var string3 = "Developer Smart";
var string3Length = string3.length;
console.log("length of word in string is: ", string3Length);
var square = function (one) {
  var result = one * one;
  return `square of 15 : ${result}`;
};
var result = square(15);
console.log(result);
console.log("---------------------------------------------------");

function NewFun() {
  var newStr = "I am Angular Developer";
  console.log("string:", newStr);
  var len = newStr.length;
  console.log("string length:", len);
  var wordSplit = newStr.split(" ");
  var splitlen = wordSplit.length;
  console.log("Total number of word is:", splitlen);
  var divideResult = len / splitlen;
  console.log("Divide result is:", divideResult);
  var multiplyResult = len * splitlen;
  console.log("multiplication result is:", multiplyResult);
}
NewFun();
