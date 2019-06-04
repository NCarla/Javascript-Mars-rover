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

function turnLeft(aRover){
  console.log("turnLeft was called!");
  switch (aRover.direction) {
    case "N":
      aRover.direction = "W";
      break;
    case "W":
      aRover.direction = "S";
      break;
    case "S":
      aRover.direction = "E";
      break;
    case "E":
      aRover.direction = "N";
      break;
  } 
}

function turnRight(aRover){
  console.log("turnRight was called!");
  switch (aRover.direction) {
    case "N" :
      aRover.direction = "E";
      break;
    case "W":
      aRover.direction = "N";
      break;
    case "S" :
      aRover.direction = "W";
      break;
    case "E":
      aRover.direction = "S";
      break;
  } 
}

function moveForward(aRover){
  console.log("moveForward was called");
  if (aRover.direction == "S" && aRover.y < 9) {
    aRover.y += 1;
  } else if (aRover.direction == "N" && aRover.y > 0) {
    aRover.y -= 1;
  } else if (aRover.direction == "E" && aRover.x < 9) {
    aRover.x += 1;
  } else if (aRover.direction === "W" && aRover.x > 0) {
    aRover.x -= 1;
  }
}

function moveBackward(aRover){
  console.log("moveBackward was called");
  if (aRover.direction == "S" && aRover.y > 0) {
    aRover.y -= 1;
  } else if (aRover.direction == "N" && aRover.y < 9) {
    aRover.y += 1;
  } else if (aRover.direction == "E" && aRover.x > 0) {
    aRover.x -= 1;
  } else if (aRover.direction === "W" && aRover.x < 9) {
    aRover.x += 1;
  }
}

var directions = prompt("What are your rover commands?");

function goDirection (aRover, someDirectons) {
 for(let i = 0; i < directions.length; i++ && i < directions.length) {
  let letter = directions[i];
   switch (letter) {
     case "r":
      turnRight(aRover);
      break;
     case "f":
      moveForward(aRover);
      break;
     case "l":
      turnLeft(aRover);
      break;
     case "b":
      moveBackward(aRover);
      break;
     default:
       NaN;
      }
    
      aRover.travelLog.push([aRover.x, aRover.y]);
      console.log(aRover.travelLog);
      if (aRover != rover2 && aRover.x == rover2.x && aRover.y == rover2.y){
        console.log("Stop! aRover & rover2 will collide!");
      } else if (aRover != rover3 && aRover.x == rover3.x && aRover.y == rover3.y){
        console.log("Stop! aRover & rover3 will collide!");
      }

      for (var j = 0; j < grid.length; j++){
        var row = grid[j];
        for (var k = 0; k < row.length; k++){
          var column = row[k];
          if (column === "X" && aRover.x == j && aRover.y == k){
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
