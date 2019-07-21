const numbers = [1,2];

const max = getMax(numbers);

console.log(max);

function getMax(array){
    // let max= array[0];
    // for (i=0;i<array.length;i++){
    //     if(max<array[i]){
    //         max=array[i]
    //     }
    // }
    // return max;
    if(array.length === 0) return undefined;
    
    // return array.reduce((accumulator, current)=>{
    // (accumulator<current) ? accumulator=current: accumulator;
    // },0);
    
    array.reduce((a,b)=>(a>b)?a:b);
}