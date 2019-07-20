//Function to exclude an element from an array

const numbers = [1,2,3,4];

const output = except (numbers,[1,3]);

console.log(output);

function except(array,excluded){
  let newArray=[];
  for (let element of array){
    if(!excluded.includes(element)){
      newArray.push(element);
    }
  }
  return newArray;

}