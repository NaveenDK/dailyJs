const numbers = [1,2,3,4];

const output = move(numbers,0,2)///move element at index 0 , 2 elements

function move(array,index,offset){

    const position = index + offset;
    if(position>=array.length || position <0){
        console.error('Invalid Offset');
        return;
    }
  
    const output = [...array];
    const element = output.splice(index,1)[0];
    output.splice(position,0,element);
     
    //output.splice(index + offset, 0,element);
    return output
}

console.log(output);