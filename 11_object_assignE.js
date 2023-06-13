

const sbiBank={
    bankName: "State Bank of India",
    location:"Swargate",
    accountNo:45678943,
    ifsc:"SBI3987",
    interestRate:12.7,
    showDetails : function() {
    console.log(`sbiBank details: bankName: ${this.bankName}, location: ${this.location}, accountNo: ${this.accountNo}, isfc: ${this.ifsc},interestRate: ${this.interestRate}`);

      },
    }
    sbiBank.showDetails();

    
const axisBank={
    bankName: "Axis bank",
    location:"Wakad",
    accountNo:225678943,
    ifsc:"AXIS2987",
    interestRate:7.5,
    showDetails : function() {
    console.log(`axisBank details: bankName: ${this.bankName}, location: ${this.location}, accountNo: ${this.accountNo}, isfc: ${this.ifsc},interestRate: ${this.interestRate}`);

      },
    }
    axisBank.showDetails();

    const hdfcBank={
        bankName: "HDFC bank",
        location:"Wakad",
        accountNo:545678943,
        ifsc:"HDFC5487",
        interestRate:9.5,
        showDetails : function() {
        console.log(`hdfcBank details: bankName: ${this.bankName}, location: ${this.location}, accountNo: ${this.accountNo}, isfc: ${this.ifsc},interestRate: ${this.interestRate}`);
    
          },
        }
        hdfcBank.showDetails();

        const yesBank={
            bankName: "YES bank",
            location:"Katraj",
            accountNo:1234567,
            ifsc:"YES9843",
            interestRate:8.5,
            showDetails : function() {
            console.log(`yesBank details: bankName: ${this.bankName}, location: ${this.location}, accountNo: ${this.accountNo}, isfc: ${this.ifsc},interestRate: ${this.interestRate}`);
        
              },
            }
            yesBank.showDetails();