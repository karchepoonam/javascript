console.log("With no argument and no return value");
let display=("Good Morning, Today is Monday"); {

console.log(display);
}


let multiply=(n1,n2,n3)=>{
 result=n1*n2*n3
 console.log(`multiplication is:`,result);
}
multiply(5,5,2);
multiply(10,4,1);""

console.log("==================================================");

let add = (n1,n2,n3,n4,n5) => {
    let result1 = n1+n2+n3+n4+n5;
    return result1;
}
let result1 = add(100,100, 200,349,756);
console.log(`additon of given number is:`,result1);
console.log("===================================================");
 let values=("I am","learning","ES6",'features',"in depth");{
    let addition = (num1, num2,num3,num4,num5) => {
        let result = num1 + num2+num3+num4+num5;
        return result;
    }
    let result = addition("I am", " learning"," ES6",' features'," in depth");
    console.log(`addition is: ${result}`);
 }