// Rover Object Goes Here
var rover = {
  direction: ["N", "S", "E", "W"]
}

// The rover’s default direction will be "N" (north).
// var direction = rover.direction["N"]; => not needed, as switch statement already works with "default value"

// turn rover in the appropriate direction based on its current direction.
// Begin with a switch statement. Based on which function is being called, turn the rover in the correct direction based on its current direction.
// the console.log() to see which direction your rover is currently facing.

// ======================

// functions receive a rover object as an argument
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

function moveForward(rover){
  console.log("moveForward was called")
}
