//Section 4 Question 1
//return Sum of Arguments in a functio
//take a set of numbers and return sum
//take an array and return sum

function sum (...items){

    if(items.length === 1 && Array.isArray(items[0]))
    {
        items = [...items[0]];
    }
    return items.reduce((a,b)=>a + b);
}

//See, either way you get the sum now 
console.log(sum(1,2,4,5));
console.log(sum([1,2,4,5]));