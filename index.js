//Exercise 1- Max of Two Numbers
//Write a function that takes two numbers and returns the maximum of the two

function checkMax(a, b) {
  if (a == b) {
    console.log("both same");
  } else if (a > b) {
    console.log(a + " is the max");
  } else if (b > a) {
    console.log(b + " is the max");
  }
}

checkMax(1, 3);
checkMax(4, 2);
checkMax(5, 5);

//recommended answer
function max(a, b) {
  return a > b ? a : b;
}
