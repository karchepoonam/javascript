var greaterNumber = function number(num1, num2) {
  var result = num1 >= num2 ? `${num1}is greater` : `${num2}is greater`;
  console.log(result);
};

greaterNumber(10, -10);
greaterNumber(800, 899);

var isEvenOrOddNum = function (num) {
  var result = num % 2 == 0 ? `${num}is even` : `${num}is odd`;
  return result;
};
var result = isEvenOrOddNum(29);
var res = result == true ? "29 is even" : "29 is odd";
console.log(`${res}`);
var result = isEvenOrOddNum(44);
var res = result == true ? "44 is even" : "44 is odd";
console.log(`${res}`);

var result = isEvenOrOddNum(0);
var res = result == true ? "0 is even" : "0 is odd";
console.log(`${res}`);
var result = isEvenOrOddNum(101);
var res = result == true ? "101 is even" : "101 is odd";
console.log(`${res}`);

var wordlength = function (word) {
  var len = word.length;
  var result = len % 2 == 0 ? "Even" : "odd";
  return result;
};
var returnValue = wordlength("JavaScript");
console.log(`JavaScript has ${returnValue}`);
var returnValue = wordlength("Developer");
console.log(`Developer has ${returnValue}`);
var returnValue = wordlength("Google");
console.log(`Google has ${returnValue}`);
