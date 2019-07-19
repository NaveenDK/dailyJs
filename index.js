//Section 2 Exercise 2, Initialize address object with constructor and factory function

let address ={
  street:"a",
  city :"b",
  zipCode: "c"
};

function addressObject (street,city,zip){
  this.street=street;
  this.city= city;
  this.zip=zip;
}

const constructorObject = new addressObject ("constructor","constructor","constructor");
console.log(constructorObject);

function CreateAddress(street,city,zip){
  return{
    street,
    city,
    zip
  };
}

const factoryObject = CreateAddress("factory","factory","factory");

console.log(factoryObject);