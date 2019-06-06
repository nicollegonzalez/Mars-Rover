// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  position: function () {
    return "( " + this.x + ", " + this.y + ")";
  },
  travelLog: []
};
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction= "N";
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction= "N";
  }
}

function moveForward(rover){
  console.log("moveForward was called");
  rover.travelLog.push(rover.position());
    switch(rover.direction){
      case "N":
      if (rover.y > 0){
        rover.y -= 1;
      }
      else{
        console.log("At the end of the grid rover cannot move forward.");
        console.log(rover.position());
      }
      break;
    case "S":
      if (rover.y < 9){
        rover.y += 1;
      }
      else{
        console.log("At the end of the grid rover cannot move forward.")
        console.log(rover.position());
      }
      break;
    case "W":
      if (rover.x > 0) {
        rover.x -= 1;
      }
      else {
        console.log("At the end of the grid rover cannot move forward.")
        console.log(rover.position());
      }
      break;
    case "E":
      if (rover.x < 9) {
        rover.x += 1;
      }
      else {
        console.log("At the end of the grid rover cannot move forward.")
        console.log(rover.position());
      }
    }
}

function moveBackward(rover){
  console.log("moveBackward was called")
  rover.travelLog.push(rover.position());
  switch(rover.direction){
  case "N":
  if (rover.y < 9){
    rover.y += 1;
  }
  else{
    console.log("At the end of the grid rover cannot move backward.");
    console.log(rover.position());
  }
  break;
case "S":
  if (rover.y > 0){
    rover.y -= 1;
  }
  else{
    console.log("At the end of the grid rover cannot move backward.")
    console.log(rover.position());
  }
  break;
case "W":
  if (rover.x < 9) {
    rover.x += 1;
  }
  else {
    console.log("At the end of the grid rover cannot move forward.")
    console.log(rover.position());
  }
  break;
case "E":
  if (rover.x > 0) {
    rover.x -= 1;
  }
  else {
    console.log("At the end of the grid rover cannot move forward.")
    console.log(rover.position());
  }
}
}

function command(str) {
  console.log(str.length);
  for (i = 0; i < str.length; i++) {
    let letter = str[i];
    if ( letter === "f") {
      moveForward(rover);
    }
    else if ( letter === "b") {
      moveBackward(rover);
      }
    else if ( letter === "r") {
    turnRight(rover);
    }
    else if ( letter === "l") {
      turnLeft(rover);
    }
    else{
      console.log("Invalid command. Input commands must be f, r, or l");
      break;
    }
  }
}
