let Professor={
    Name:'Poonam',
    Age:28,
    Subject:'Angular',
    city:'Pune',
    isMarries:true,

 degrees :{
    engineering: 'CSC',
    PHD: 'Adv Computing',
    Diploma: 'Web Designing',
 },
 details: function () {
   console.log(`Teacher degrees are total degrees are:degrees ${this.degrees}`);
 }
}
console.log(Professor);
console.log(`degrees:`,Professor.degrees);

var certificates= ['Hacker Rank Participation','Certificates in ife course','Certificate in Adv Computing'];
console.log(`certificates:`,certificates);


    var engineering='CSC';
   var PHD= ' Adv Computing';
   var Diploma=' Web Designing';
    var concatstring=engineering.concat(PHD).concat(Diploma);
    console.log(`Teacher degrees are total degrees are:`,concatstring);


Professor.totalExperience="14 years";
console.log(`Total Experience:`,Professor.totalExperience);
//console.log(Professor);

Professor.city = "Mumbai";
//console.log(`Professor City is : ${Professor.city}`);
console.log("after modifying city Pune to Mumbai:");
console.log(Professor);

certificates.push('Oracle Certified');
console.log(certificates);

let arrayLength = certificates.length;
const lastElement = certificates[arrayLength-1];
console.log(`Last Element: ${lastElement}`);


