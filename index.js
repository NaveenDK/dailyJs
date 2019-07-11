//Exercise 11
//Print all prime numbers in the limit
//Basic Answer
// function showPrimes(limit) {
//   for (let number = 2; number <= limit; number++) {
//     let isPrime = true;
//     for (let factor = 2; factor < number; factor++) {
//       if (number % factor === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) console.log(number);
//   }
// }

//recommended Answer, functions with single responsibility
showPrimes(10);
function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    if (isPrime(number)) {
      console.log(number);
    }
    //   break;
  }
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) {
      return false;
    }
  }
  return true;
}

//singular use ,if (isPrime(3)) console.log("three is prime");
