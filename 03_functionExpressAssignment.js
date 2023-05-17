var square = function (one,) {
    var result =one*one ;
    return `square of 5 : ${result}`;
}
    var result = square(5 );
console.log(result);
var square = function (one,) {
var result =one*one ;
return `square of 6: ${result}`;
}
var result = square(6 );
console.log(result);
var square = function (one,) {
    var result =one*one ;
    return `square of 25 : ${result}`;
    }
    var result = square(25);
    console.log(result);
    var square = function (one,) {
        var result =one*one ;
        return `square of 100 : ${result}`;
        }
        var result = square(100);
        console.log(result);
        
        var typeofsquare = typeof square;
        console.log("typeof square:",typeof square);
        console.log("------------------------------------");
        var areaOfRectangle = function (length,width) {
            var result = length*width;
            return `areaOfRectangle: ${result}`;
        }
        var result =areaOfRectangle(499,917 );
        console.log(result);
        console.log("-------------------------------");
        function swapValues(argOne, argTwo){ 
            console.log("before Swap: ", argOne, argTwo);
            var temp = argOne;
             argOne = argTwo; 
            argTwo = temp;
            console.log("After Swap: ", argOne, argTwo);
        }
        swapValues("Virat", "Anushka"); 
        swapValues(1000, 2000);
        console.log('-------------------------------------');
        
function string(givenstring) {
    console.log("givenstring:",givenstring);

}
string("JS the most popular language of intenet");

var string="JS the most popular language of intenet";
var stringLength = string.length;
console.log("Total number of character in string is: ", stringLength);


var charAtIndexsix= string.charAt(6);
console.log("Char at index 6 is:", charAtIndexsix);
var charAtIndexeleven= string.charAt(11);
console.log("Char at index 11 is:", charAtIndexsix);
var charAtLastIndex = string.charAt(string.length-1);
console.log("last character using length property: ",charAtLastIndex);
var charAtZeroIndex = string.charAt(0);
console.log("very first character using given string: ",charAtZeroIndex);



var string="JS the most popular language of intenet";
var resultSplit = string.split(" ");

//console.log("After slipt words are:",resultSplit, "Total number of words: ",resultSplit.length);
console.log(`Total number of words ${resultSplit.length} `);
var square = function (one,) {
    var result =one*one ;
    return `square of 7 : ${result}`;
}

var result = square(7 );
console.log(result);
