var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}

var rover2 = {
  direction: "N",
  x: 9,
  y: 9,
  travelLog: []
}

var rover3 = {
  direction: "N",
  x: 0,
  y: 9,
  travelLog: []
}

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction) {
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
      rover.direction = "N";
      break;
  } 
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N" :
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "N";
      break;
    case "S" :
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "S";
      break;
  } 
}

function moveForward(rover){
  console.log("moveForward was called");
  if (rover.direction == "S" && rover.y < 9) {
    rover.y += 1;
  } else if (rover.direction == "N" && rover.y > 0) {
    rover.y -= 1;
  } else if (rover.direction == "E" && rover.x < 9) {
    rover.x += 1;
  } else if (rover.direction === "W" && rover.x > 0) {
    rover.x -= 1;
  }
}

function moveBackward(rover){
  console.log("moveBackward was called");
  if (rover.direction == "S" && rover.y > 0) {
    rover.y -= 1;
  } else if (rover.direction == "N" && rover.y < 9) {
    rover.y += 1;
  } else if (rover.direction == "E" && rover.x > 0) {
    rover.x -= 1;
  } else if (rover.direction === "W" && rover.x < 9) {
    rover.x += 1;
  }
}

var directions = prompt("What are your rover commands?");

function goDirection (rover) {
 for(let i = 0; i < directions.length; i++ && i < directions.length) {
  let letter = directions[i];
   switch (letter) {
     case "r":
      turnRight(rover);
      break;
     case "f":
      moveForward(rover);
      break;
     case "l":
      turnLeft(rover);
      break;
     case "b":
      moveBackward(rover);
      break;
     default:
       NaN;
      }
    
      rover.travelLog.push([rover.x, rover.y]);
      console.log(rover.travelLog);
      if (rover.x == rover2.x && rover.y == rover2.y){
        console.log("Stop! Rover & rover2 will collide!");
      } else if (rover.x == rover3.x && rover.y == rover3.y){
        console.log("Stop! Rover & rover3 will collide!");
      } else if (rover2.x == rover3.x && rover2.y == rover3.y){
        console.log("Stop! Rover2 & rover3 will collide!");
      }

      for (var j = 0; j < grid.length; j++){
        var row = grid[j];
        for (var k = 0; k < row.length; k++){
          var column = row[k];
          if (column === "X" && rover.x == j && rover.y == k){
            console.log("Obstacle Found at: " + j + ", " + k + "Stop rover!");}
          }
        }
    }
}

var grid = [
  ['', '', '', '', "X", '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', "X", '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', "X", '', '', "X", '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', "X", '', '', ''],
  ['', '', "X", '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', "X", '', '', ''],
];
