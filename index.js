//Exercise 8
// Sum of multiples of 3 and 5

function sum3n5(limit) {
  let sum = 0;
  for (let i = 0; i <= limit; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum = sum + i;
    }
  }
  return sum;
}

console.log(sum3n5(10));
