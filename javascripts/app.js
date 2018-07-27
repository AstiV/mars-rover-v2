// Rover Object
var rover = {
  // Rover's default direction: North
  direction: "N",
  // Rover's default position
  // Positions are represented as a pair of coordinates, x and y. Their default values are 0.
  position: [0, 0],
  // coordinates of the places Rover has been.
  travelLog: []
}
console.log(rover.direction[0]);

// Turn
// turn rover in the appropriate direction based on its current direction.
// functions turnLeft/turnRight receive a rover object as an argument
function turnLeft(rover){
  console.log("turnLeft was called!");

  switch (rover.direction) {
    case "S":
      rover.direction = "E"
      break;
    case "E":
      rover.direction = "N"
      break;
    case "W":
      rover.direction = "S"
      break;
    case "N":
      rover.direction = "W"
      break;
  }
  console.log("Rover is now facing:" + rover.direction);
}

function turnRight(rover){
  console.log("turnRight was called!");

  switch (rover.direction) {
    case "S":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "W":
      rover.direction = "N";
      break;
    case "N":
      rover.direction = "E";
      break;
  }
  console.log("Rover is now facing: " + rover.direction);
}

// In order to move the rover around, we have to keep track of the rover’s position.
console.log("Actual position is: " + rover.position);

// Move forward
// If Rover faces West and moves forward, decrease x by 1
// If Rover faces North and moves forward, decrease y by 1
// If Rover faces South and moves forward, increase y by 1
// If Rover faces East and moves forward, increase x by 1

function moveForward(rover){
  console.log("moveForward was called");

  if (rover.direction === "W") {
    rover.position[0] = rover.position[0]-1;
    console.log(rover.position);
  } else if (rover.direction === "N") {
    rover.position[1] = rover.position[1]-1;
    console.log(rover.position);
  } else if (rover.direction === "S") {
    rover.position[1] = rover.position[1]+1;
    console.log(rover.position);
  } else {
    rover.position[0] = rover.position[0]+1;
    console.log(rover.position);
  }
}

// Create a function that receives a list of commands. 
// These commands will be the first letter of either (f)orward, (r)ight, or (l)eft.
// To test it, use the string: ‘rffrfflfrff’.

// Approach
// Use a loop to iterate over the string. 
// Inside of this loop, write a switch or if statement to call the correct function. 
// For instance, if the letter is f, you’re going to want to call the goForward function.

s = "";

function commands(s){
  console.log("commands was called!");

  for (var i = 0; i < s.length; i++){

    if (s[i] === "f"){
      // Tracking
      // After each move, push the coordinates of the previous space to the travelLog array. 
      rover.travelLog.push([rover.position[0], rover.position[1]]);
      moveForward(rover);
    } else if (s[i] === "r") {
      turnRight(rover);
    } else if (s[i] === "l") {
      turnLeft(rover);
    } else {
      console.log("Typo? This is not a right command! Use: 'f', 'r' or 'l'! ");
    }
  }
  // After the rover has finished its moves, print out all of the spaces the rover has traveled over.
  console.log("TravelLog: ",rover.travelLog);
}

// TODO
// Enforce Boundaries
// Grid = 10x10
// rover.x shall not be < 0 || > 9
// rover.y shall not be < 0 || > 9
// function boundary(rover){

//   if (rover.position[0] < 0){
//     console.log("You cannot move outside of the grid! Try again.")
//     return false;
//   } else if (rover.position[0] > 9){
//     console.log("You cannot move outside of the grid! Try again.")
//     return false;
//   } else if (rover.position[1] < 0){
//     console.log("You cannot move outside of the grid! Try again.")
//     return false;
//   } else if (rover.position[1] > 9){
//     console.log("You cannot move outside of the grid! Try again.")
//     return false;
//   } else {
//     return true;
//   }
// }

