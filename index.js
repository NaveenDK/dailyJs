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
showPrimes(10);
//recommended Answer, functions with single responsibility

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    isPrime(number);
    console.log(number);
  }
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++) {
    if (number % factor == 0) return false;
  }
}
