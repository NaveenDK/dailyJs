//Exercise 6
//Count truthy values of  an array

//All Falsy
//undefined
//null
//' '
//false
//0
//NaN
// for example const array = [0,null,undefined,'',1,2,3]
//countTruthy in the above case will return 3
const array = [0, null, undefined, "", 1, 2, 4, 4, 3];
function countTruthy(array) {
  var trueCount = 0;
  for (let value of array) if (value) trueCount++;
  return trueCount;
}

console.log(countTruthy(array));
