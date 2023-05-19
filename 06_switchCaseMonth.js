function month(monthnum) {
  switch (monthnum) {

    case 2:
      console.log(`month is:Fabruary as month number is ${monthnum}`);
      break;
    case 5:
      console.log(`month is:May as month number is ${monthnum}`);
      break;
    case 12:
      console.log(`month is:December as month number is ${monthnum}`);
      break;

    default:
        console.log(`invalid input==> ${monthnum}`);
      break;
  }
}
month(0);
month(2);
month(5);
month(12);
month(15);
month(100);
month(null);
month(undefined);
