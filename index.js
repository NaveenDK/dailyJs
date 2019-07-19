//Implement 2 functions
//one checking if the objects are equal
//the other checking if they are same (ie meaning they are pointing to the same object)

function Address(street,streetNo,zip){
  this.street=street;
  this.streetNo=streetNo;
  this.zip = zip;
}
let address1 = new Address ('a','b','c');
let address2 = new Address ('a','b','c');
let address3=address2;
console.log(areEqual(address1,address2));
console.log(areSame(address1,address2));

function areSame (address1,address2)
{
 if (address1 === address2){
   return true;
 } else{
 return false;
 }
}

function areEqual(address1,address2){
  return address1.street=== address2.street && address1.city === address2.city && address1.zipCode === address2.zipCode;
}


// function areSame (address1,address2)
// {
//   if(({...address1})==({...address2})){
//     return true;
//    }
//   else
//   return false;
// }


