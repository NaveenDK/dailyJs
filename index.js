const numbers = [1,2,3,4,1];

const count = countOccurences(numbers,3);

// function countOccurrences(array,searchElement){
//     let i=0;
//     for(let element of array){

//         if (element==searchElement){
//             i++;
//         }
//     }
//     return i;
// }

function countOccurences(array,searchElement){
   // const reducer = (accumulator,currentValue) => accumulator+ currentValue
  return  array.reduce(function(acc,current){
 //  console.log(acc);
       let occurences = searchElement=== current? 1:0;
 //  console.log(count);
      return occurences +acc;   
  },0);
}

console.log(count);