
const bankSBI={
    bankName: 'State Bank of India',
    accountNo:45678943,
    ifsc:'SBI3987',
    branch:'Swargate',
}
        console.table(bankSBI);


        const bankLocation={
            street: 'Shivaji Putala,Swargate',
            city:'Pune',
            pin:411008,
                }
              console.table(bankLocation);
              console.log("-----------------clone the objects---------------");
              Object.assign(bankSBI, bankLocation);   
              console.table (bankSBI) ;


              const rateOfInterest={
                homeLoanInterest:7.8,
                personalLoanInterest:8,
                dueInterest:7,
              }
              console.table(rateOfInterest);

              console.log("---------------- merged object---------------");
              Object.assign(bankSBI,bankLocation,rateOfInterest); 

const bankDetails = Object.assign(bankSBI,bankLocation,rateOfInterest);   
console.table(bankDetails);
console.log("-----------------traverese merged object---------------");
for (const key in bankDetails) { 
    if (Object.hasOwnProperty.call(bankDetails, key)) {
        const value = bankDetails[key];
        console.log(`${key}, ${value}`);
    }
}
