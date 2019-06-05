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
      rover.y -= -1;
      break;
    case "S":
      rover.y += 1;
      break;
    case "W":
      rover.x -= 1;
      break;
    case "E":
      rover.x += 1;
    }
}

function moveBackward(rover){
  console.log("moveBackward was called")
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
