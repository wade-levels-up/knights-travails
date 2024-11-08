let positionsVisited = [];
let queue = [];

function knightMoves(start, finish) {
  let currentPosition = start;
}

function returnValidMoves(currentPosition, previousPositions = []) {
  let [x, y] = currentPosition;
  let validMoves = filterMoves(
    calculateMoves(currentPosition),
    previousPositions
  );
  return validMoves;
}

function calculateMoves(currentPosition) {
  let [x, y] = currentPosition;
  let movelist = [
    [2, 1],
    [-2, 1],
    [2, -1],
    [-2, -1],
    [1, 2],
    [-1, 2],
    [1, -2],
    [-1, -2],
  ];
  let modifiedMoves = [];
  for (let move of movelist) {
    modifiedMoves.push([(x += move[0]), (y += move[1])]);
    [x, y] = currentPosition;
  }

  return modifiedMoves;
}

function filterMoves(array, previousMovesArray = []) {
  let filteredArray = array;

  for (let i = 0; i < array.length; i++) {
    // Check if x coordinate is within board boundaries, if not remove the move containing it
    if (filteredArray[i][0] < 0 || filteredArray[i][0] > 7) {
      filteredArray.splice(i, 1);
      i--;
    }
    // Check if y coordinate is within board boundaries, if not remove the move containing it
    if (filteredArray[i][1] < 0 || filteredArray[i][1] > 7) {
      filteredArray.splice(i, 1);
      i--;
    }
    // Loop through previous moves, if found remove them
    for (let prevMove of previousMovesArray) {
      if (
        prevMove[0] === filteredArray[i][0] &&
        prevMove[1] === filteredArray[i][1]
      ) {
        filteredArray.splice(i, 1);
        i--;
      }
    }
  }

  return filteredArray;
}

// function hop(currentPosition, finalPosition, validMoveArray) {
//   let vertex = currentPosition;
//   while (vertex[0] !== finalPosition[0] && vertex[1] !== finalPosition[1]) {
//     positionsVisited.push(vertex);
//     console.log(positionsVisited);
//     for (let move of validMoveArray) {
//       vertex = returnValidMoves(move, positionsVisited);
//     }
//   }
//   console.log("final destination reached");
//   return vertex;
// }

function moveKnight(start, end) {
  positionsVisited.push(start);
  // Delete these later, just seeing what's going on
  console.log(`--- Entered moveKnight function ---`);
  console.log(`Our start value is: ${start} | Our end value is: ${end}`);
  console.log(`At this point in time positionsVisited is:`);
  console.log(positionsVisited);

  // base case
  if (start[0] === end[0] && start[1] === end[1]) {
    console.log("Yay we made it! 😃");
    console.log(`Our path was:`);
    console.log(positionsVisited);
    console.log(`Which was reached in ${positionsVisited.length} steps`);
    console.log(`⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️`);
    return;
  }

  // recursive case
  queue.push(start);
  let validMoves = returnValidMoves(start, positionsVisited);
  console.log(`********** Valid moves are **********`);
  console.log(validMoves);
  console.log(`*************************************`);
  // If, within the list of valid moves we find our end destination, recall the function to reach the base case
  for (let move of validMoves) {
    if (move[0] === end[0] && move[1] === end[1]) {
      moveKnight([move[0], move[1]], end);
    }
  }
  // Otherwise, for each valid move of valid moves recall moveKnight
  for (let move of validMoves) {
    moveKnight([move[0], move[1]], end);
  }
}

// console.log(returnValidMoves([6, 3], [[4, 2]]));
// hop([0, 0], [7, 7], returnValidMoves([0, 0]));
moveKnight([0, 0], [3, 3]);
