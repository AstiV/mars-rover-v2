// Rover Object
var rover = {
  // directions Rober can face
  direction: ["N", "S", "E", "W"],
  // position of Rover
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 
  y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  // coordinates of the places Rover has been.
  travelLog: []
}

// TODO 
// Rover’s default direction: "N" (North).
// rover.direction = ["N"];

// turn rover in the appropriate direction based on its current direction.
// functions turnLeft/turnRight receive a rover object as an argument
function turnLeft(rover){
  console.log("turnLeft was called!");

  switch (rover.direction) {
    case "S":
      rover.direction = "E"
      console.log("Rover is now facing East")
      break;
    case "E":
      rover.direction = "N"
      console.log("Rover is now facing North")
      break;
    case "W":
      rover.direction = "S"
      console.log("Rover is now facing South")
      break;
    default:
      rover.direction = "W"
      console.log("Rover is now facing West")
      break;
  }
}

function turnRight(rover){
  console.log("turnRight was called!");

  switch (rover.direction) {
    case "S":
      rover.direction = "W"
      console.log("Rover is now facing West")
      break;
    case "E":
      rover.direction = "S"
      console.log("Rover is now facing South")
      break;
    case "W":
      rover.direction = "N"
      console.log("Rover is now facing North")
      break;
    default:
      rover.direction = "E"
      console.log("Rover is now facing East")
      break;
  }
}

// In order to move the rover around, we have to keep track of the rover’s position.
// Positions are be represented as a pair of coordinates, x and y. Their default values will both be 0.

var position = [rover.x[0], rover.y[0]];
console.log(position)

// Move forward
// If Rover faces West and moves forward, decrease x by 1
// If Rover faces North and moves forward, decrease y by 1
// If Rover faces South and moves forward, increase y by 1
// If Rover faces East and moves forward, increase x by 1

function moveForward(rover){
  console.log("moveForward was called")

  if (rover.direction === "W") {
    position[0] = position[0]-1
    console.log(position)
  } else if (rover.direction === "N") {
    position[1] = position[1]-1
    console.log(position)
  } else if (rover.direction === "S") {
    position[1] = position[1]+1
    console.log(position)
  } else {
    position[0] = position[0]+1
    console.log(position)
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
  console.log("commands was called!")

  for (var i = 0; i < s.length; i++){

    if (s[i] === "f"){
      moveForward(rover)
      // Tracking
      // After each move, push the coordinates of the previous space to the travelLog array. 
      // After the rover has finished its moves, print out all of the spaces the rover has traveled over.
      rover.travelLog.push([position[0], position[1]])
    } else if (s[i] === "r") {
      turnRight(rover)
    } else if (s[i] === "l") {
      turnLeft(rover)
    } else {
      console.log("Typo? This is not a right command! Use: 'f', 'r' or 'l'! ")
    }
  }
  console.log("TravelLog:",rover.travelLog)
}


// Questions:
// 1. How to set Rover default position to North?
// 2. How to log the coordinates of the Rover's previous position? In my code, first position (0, 0) is left out.

