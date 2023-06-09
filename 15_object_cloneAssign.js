
const arrayNum=[20,3,4,56,90,400,49];

const clonedArray = [...arrayNum];
console.log(`Original array:`,arrayNum);
console.log(`cloned array:`,clonedArray);

arrayNum.push(55,66);
console.log(`cloned array after push:`,arrayNum);
console.log("-----------------------------------------------------------------------------------");
const arrayN=[20,3,4,56,90,400,49,55,66];

const clonedArrayN = [...arrayN];
console.log(`original Array:`,clonedArrayN);
arrayN.push(10,25);
console.log(`original array with update value:`,arrayN);
console.log(`cloned array:`,clonedArrayN);

const arrayEven=[2,30,14,8];
const arrayMerge= arrayN.concat(arrayEven);
console.log(`merge array:`,arrayMerge);
console.log("--------------------------------------------------------------------------------------");

const employee_info= {
    emp_id:27,
    emp_name:'John Doe',
    salary:{
        july_month:"40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR" ,
    },
    Address:{
        locality:{
            colony:"OM Vrindavan Society",
            street:"Kanch Pokli,431202"
           },
        City:"Mumbai",
        State: "Maharashtra",
        Country:"India",  
    },
    Mobiles:["+91 9800 4534 66","1800-4567 32","+91 9765 5600 77"]
}
    console.log(`Locality:`,employee_info.Address.locality);
    console.log(`City:`,employee_info.Address.City);
    console.log(`State:`,employee_info.Address.State);
    console.log(`Country:`,employee_info.Address.Country);
    console.log(`Mobile Numbers:`,employee_info.Mobiles);
console.log("---------------------------------------------------------------------------------------");
    const clonedObject = {...employee_info};

clonedObject.july_month = "80,000INR";
console.log(`original salary is:`,employee_info.salary.july_month);
console.log(`updated salary is:`,clonedObject.july_month);

clonedObject.Country = "United Kingdom";
console.log(`original Country is:`,employee_info.Address.Country);
console.log(`updated Country is:`,clonedObject.Country);

