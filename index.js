//Function that checks includes ()
const numbers = [1,2,3,4];

//console.log (numbers.includes(6));

function includes (array,searchElement)
{
  for( let element of array){
    if(element === searchElement){
      return true;
    } 
  }
  return false;

 
}
console.log(includes(numbers,3));