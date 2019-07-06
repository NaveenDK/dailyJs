//Using if else
//Hour, if hour is bw 6am and 12pm: Good morning!
//If it is between 12pm and 6pm : Good afternoon!
//Otherwise : Good evening!
//Basic structure
let hour = 19;
if (hour >= 6 && hour < 12) {
  //  statement;
  console.log("Good morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon");
}
// statement;
else console.log("Good evening!");
