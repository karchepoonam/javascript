
var Tata =function TCS(Name,Graduation,HSC,SSC){
    var result=Graduation>=70||HSC>=80||SSC>=90? `Hey ${Name} Congratulations! You are Eligible for TCS Interview.`:`Hey ${Name} Unfortunatly You are not Eligible for TCS Interview.`;
    
console.log(result);

}
Tata("Poonam",80,88,90);
Tata("Supriya",69,80,89);
Tata("Vaibhav",68,77,83);