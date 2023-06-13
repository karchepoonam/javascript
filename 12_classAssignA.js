
class Vehicle {
    constructor(name, model,color,mileage,price){
        this.name = name;
        this.model = model;
        this.color = color;
        this.mileage = mileage;
        this.price = price;
    }
    showDetails(){
        console.log(`Details of vehicke is=>Name:${this.name},Model:${this.model},Color:${this.color},Mileage:${this.mileage},Price:${this.price} `);

    }
}
const BMW = new Vehicle("BMW", 2020, "White", "8km/hr","50lac");
const Jupiter = new Vehicle("jupiter", 2021, "Black", "6km/hr","30lac" );
const Ferrari = new Vehicle("Ferrari", 2022, "red", "7km/hr","2.3cr.");
const Audi = new Vehicle("Audi", 2023, "blue", "5km/hr","55lac");
const Jauguar = new Vehicle("Juaguar", 2023, "black", "15km/hr","1cr")
const arrayOfVehicles = [BMW,Jupiter , Ferrari, Audi,Jauguar];


BMW.showDetails(); 
Jupiter.showDetails();
Ferrari.showDetails();
Audi.showDetails();
Jauguar.showDetails();

class College {
    constructor(Name,City,Department,phoneNumber){
        this.Name = Name;
        this.City = City;
        this.Department = Department;
        this.phoneNumber = phoneNumber;

    }
    showDetails(){
        console.log(`Name:-${this.Name},City:-${this.City},Department:-${this.Department},PhoneNumber:-${this.phoneNumber}`);

    }
}
const PVGCOET = new College("PVG COET", "Pune","Printing Technology",9065113190);
const ModernCollege = new College("Modern College","Satara","E&TC",911885420);
const PICT = new College("PICT", "Mumbai","Computer Technology",9767501234);
const VIT = new College("VIT", "Pune", "Mechanical",9600653210);
console.log("-----------------------------------------------------");
traverse(PVGCOET);
console.log("-----------------------------------------------------");
traverse(ModernCollege);
console.log("-----------------------------------------------------");
traverse(PICT);
console.log("-----------------------------------------------------");
traverse(VIT);

function traverse(collegeObject) {

    for (const key in collegeObject) {
        if (Object.hasOwnProperty.call(collegeObject, key)) {
            const element = collegeObject[key];
            console.log(`${ key},${element}`);
            
        }
    }
    
}