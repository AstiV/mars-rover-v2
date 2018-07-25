// Rover Object Goes Here
var rover = {
  direction: ["N", "S", "E", "W"],
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
}

// The rover’s default direction will be "N" (north).
// var direction = rover.direction["N"]; => not needed, as switch statement already works with "default value"

// turn rover in the appropriate direction based on its current direction.
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
