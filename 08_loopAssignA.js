console.log("Given String:I am very good IT Developer");
var word = "I am very good IT Developer";

var count = 0;
for (let index = 0; index < word.length; index++) {
  var char = word.charAt(index); //
  if (
    char == "a" ||
    char == "e" ||
    char == "i" ||
    char == "o" ||
    char == "u" ||
    char == "A" ||
    char == "E" ||
    char == "I" ||
    char == "O" ||
    char == "U"
  ) {
    count++;
  }
}
console.log(`Total Number of vowels are: ${count}`);
console.log("------------------------------------------------------------");

let i,
  a = 1;
cube = 1;
for (i = 1; i <= 300; i++) {
  cube = a * a * a;
}
console.log(`cube of 1 is:${cube}`);
a = 2;
cube = 2;
for (i = 2; i <= 300; i++) {
  cube = a * a * a;
}
console.log(`cube of 2 is:${cube}`);
a = 3;
cube = 3;
for (i = 3; i <= 300; i++) {
  cube = a * a * a;
}
console.log(`cube of 3 is:${cube}`);
a = 4;
cube = 4;
for (i = 4; i <= 300; i++) {
  cube = a * a * a;
}
console.log(`cube of 4 is:${cube}`);
a = 5;
cube = 5;
for (i = 5; i <= 300; i++) {
  cube = a * a * a;
}
console.log(`cube of 5 is:${cube}`);

const number = 5;

let sum = 0;

for (i = 0; i <= number; i++) {
  sum = sum + i * i * i;
}

console.log(`Total sum of cube is: `, sum);
console.log("------------------------------------------------------------");

function oddPositionedChars(gstring) {
  let output = "";
  for (index = 0; index < gstring.length; index++) {
    if (index % 2 !== 0 && gstring[index] !== " ") {
      output += gstring[index];
    }
  }
  console.log(`Odd positioned character of given string:-> ${output}`);
}
var str1 = "Hard work always pays back";
var str2 = "Soon i will be Angular IT champ";
console.log(` String 1:-> "${str1}"`);
oddPositionedChars("Hard work always pays back");
console.log(`String 2:-> "${str2}"`);
oddPositionedChars("Soon i will be Angular IT champ");
