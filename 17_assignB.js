

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;

    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

array_employees.forEach( (employee)=> {
    if (employee.emp_company=="TCS") {
        console.log(employee);
    }
});
console.log("--------------------------------------------------------------------------------------------------------");
array_employees.forEach( (employee)=> {
    if (employee.emp_dept=="Finance") {
        console.log(employee);
    }
});
console.log("--------------------------------------------------------------------------------------------------------");
//for(const employee of array_employees ){
    //if (employee.name.startsWith("R")) {
       // console.log(employee.name);//
    
//
const employeeNames = array_employees.filter( (employee)=>{
    return employee.emp_name.startsWith("R")   
       }
)
// console.log(employeeNames);
for (const emp of employeeNames) {
   console.log(`Employee name: ${emp.emp_name}`);
}


array_employees.forEach( (employee)=> {
    if (employee.emp_salary=">75000") {
        console.log(employee);
    }
});
console.log("--------------------------------------------------------------------------------------------------------");
array_employees.forEach( (employee)=> {
    if (employee.emp_salary==">=50000"&& employee.emp_dept=="IT") {
        console.log(employee);
    }
});

console.log("-----------------------------------------------------------------------");
array_employees.forEach( (employee)=> {
    if (employee.emp_company=="Infy") {
        console.log(employee);
    }
});