//Exercise 4
checkSpeed(130);

// function checkSpeed(speed) {
//   if (speed > 75) {
//     if ((speed - 70) / 5 >= 12) return "License Suspended";
//     else return Math.floor((speed - 70) / 5) + " Demerit Point/s";
//   }
//   return "Ok";
// }

//recommended answer

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) console.log("Ok");
  else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) console.log("License suspended");
    else console.log("Points", points);
  }
}
//Indentation issue, - use return; and remove else
function checkSpeedIndentationfixed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log("Ok");
    return;
  }

  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) console.log("License suspended");
  else console.log("Points", points);
}
