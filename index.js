//Section 2 Exercise 1
//Create an address object with, street city,zipCode
//showAddress(address) , object that displays all properties, with values

let address ={
  street:"a",
  city :"b",
  zipCode: "c"
};

function showAddress(address){
  for (let key in address)
    console.log(key,address[key]);
}
console.log(address);