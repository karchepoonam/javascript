function grade(mark) {
  if (mark >= 90 && mark <= 100) {
    console.log(`Fantastic! You got: ${mark} Marks, you recieved A+ Grade.`);
  } else if (mark >= 75 && mark < 90) {
    console.log(`Excellent: You got: ${mark} Marks,you recieved A Grade.`);
  } else if (mark >= 50 && mark < 75) {
    console.log(`Good: You got: ${mark} Marks,you recieved B Grade.`);
  } else if (mark >= 35 && mark < 50) {
    console.log(
      `No Worries: You got: ${mark} Marks,you recieved C Grade,need some Improvement.`
    );
  } else if (mark > 0 && mark < 35) {
    console.log(`Alas! You got: ${mark} Marks,you failed try next time.`);
  } else if (mark <= 0 || mark > 100 || mark == null) {
    console.log(
      `You entered invalid Marks: ${mark} Marks, Enter Correct Marks.`
    );
  }
}
grade(98);
grade(90);
grade(0);
grade(150);
grade(-7);
grade(35);
grade(29);
grade(64);
grade(49);
grade(91);
grade("Eighty");
grade(undefined);
grade(null);
