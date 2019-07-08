//Exercise 5
//write a function that will take a number and say ODD or EVEN printing out infront of the number
showNumbers(3);

function showNumbers(limit) {
  if (limit % 2 == 0) {
    console.log(limit + " Even");
  }

  if (limit % 2 != 0) {
    console.log(limit + " Odd");
  }
}
