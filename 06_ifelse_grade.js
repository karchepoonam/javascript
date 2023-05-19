console.log("--------if else grade assignment................");
function eligibility(age) {
  console.log(`your age is:${age}`);
  if (age <= 0 || age > 120 || age == undefined) {
    console.log(`- Invalid data,please enter valid age.`);
  } else if (age > 0 && age < 18) {
    console.log("-You are not Eligible for voting.");
  } else if (age >= 18 && age <= 120) {
    console.log("- You are Eligible for voting.");
  }
}
var x;
eligibility(45);
console.log("----------------------------------------------------");
eligibility(17);
console.log("----------------------------------------------------");
eligibility(8);
console.log("----------------------------------------------------");
eligibility(20);
console.log("----------------------------------------------------");
eligibility(-10);
console.log("----------------------------------------------------");
eligibility(200);
console.log("----------------------------------------------------");
eligibility(x);
console.log("----------------------------------------------------");
eligibility(null);
