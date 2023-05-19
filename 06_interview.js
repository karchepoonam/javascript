function TCS(Name,Graduation,HSC,SSC){
    if (Graduation >= 70 || HSC  >= 80|| SSC>=90) {
        console.log(`Hey ${Name} Congratulations! You are Eligible for TCS Interview.`);
      } else if (Graduation < 70 || HSC < 80||SSC<90) {
        console.log(`Hey ${Name} Unfortunatly You are not Eligible for TCS Interview.`);
      }
    }

TCS("Poonam",80,88,90);
TCS("Supriya",69,80,89);
TCS("Vaibhav",68,77,83);