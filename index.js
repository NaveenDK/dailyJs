//Exercise 5
//write a function that will take a number and say ODD or EVEN printing out infront of the number
showNumbers(10);

// function showNumbers(limit) {
//   for (i = 1; i <= limit; i++) {
//     if (i % 2 == 0) {
//       console.log(i + " Even");
//     }

//     if (i % 2 != 0) {
//       console.log(i + " Odd");
//     }
//   }
// }

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, message);
  }
}
