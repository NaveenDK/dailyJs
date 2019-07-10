//Exercise 9
//
const marks = [80, 80, 50];
//Calculate average and give the grade based on the citeria
//1-59 :F
//60-69  : D
//70-79 : C
//80-89 : B
//90-100 : A

console.log(calculateGrade(marks));

// function calculateGrade(marks) {
//   let sum = 0;
//   for (i = 0; i < marks.length; i++) {
//     sum = sum + marks[i];
//   }
//   console.log(sum);
//   console.log(marks.length);
//   let average = sum / marks.length;
//   if (average < 60) {
//     return "F";
//   }
//   if (average < 70 && average >= 60) {
//     return "D";
//   }
//   if (average < 80 && average >= 70) {
//     return "C";
//   }
//   if (average < 90 && average >= 80) {
//     return "B";
//   }
//   if (average < 100 && average >= 90) {
//     return "A";
//   }
// }

function calculateGrade(marks) {
  const average = calculateAverage(marks);
  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array) sum += value;

  return sum / array.length;
}
