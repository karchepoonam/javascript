
function fullName(firstName,lastName) {
    console.log("fullName:",firstName,lastName);
}
fullName("Poonam", "Godse");

function address(address) {
    console.log("Address:",address);
}
address("Vaibhavnagar,Pimpri,Pune");

console.log("------Personal Details--------");
function personalDetails(firstName,lastName,collegeName) {
           console.log("My Personal Detail is");
           console.log("firstName:",firstName);
           console.log("lastName:",lastName);
           console.log("collegeName:",collegeName);
}
personalDetails("Poonam","Godse","PVG COET,PUNE");

console.log("---------swapValueDude-----------------"); 
function swapValueDude(argOne, argTwo){ // Arguments: valueOne =100  valueTwo = 200 var valueThree;
    console.log("before Swap: ", argOne, argTwo);
    var temp = argOne;
     argOne = argTwo; 
    argTwo = temp;
    console.log("After Swap: ", argOne, argTwo);
}
swapValueDude("Virat", "Anushka"); 
swapValueDude(1000, 2000);



console.log("---------AddThreeValue-----------------"); 

function addThreeValue(valueOne,valueTwo,valueThree){
    var result=valueOne+valueTwo+valueThree;
    console.log("additionIs:",result);
}
addThreeValue(10.23,600,40);
addThreeValue("Hello", "Good", "Morning");

