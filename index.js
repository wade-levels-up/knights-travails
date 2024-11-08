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

// function filterMoves(array, previousMovesArray = []) {
//   let filteredArray = array;

//   for (let i = 0; i < array.length; i++) {
//     // Check if x coordinate is within board boundaries, if not remove the move containing it
//     console.log(`x: ${filteredArray[i][0]} y: ${filteredArray[i][1]}`);
//     if (filteredArray[i]) {
//       if (filteredArray[i][0] < 0 || filteredArray[i][0] > 7) {
//         filteredArray.splice(i, 1);
//         i--;
//       }
//     }
//     // Check if y coordinate is within board boundaries, if not remove the move containing it
//     if (filteredArray[i]) {
//       if (filteredArray[i][1] < 0 || filteredArray[i][1] > 7) {
//         filteredArray.splice(i, 1);
//         i--;
//       }
//     }
//     // Loop through previous moves, if found remove them
//     if (filteredArray[i]) {
//       console.log(`Here's a vermin: ${filteredArray[i]}`);
//       for (let prevMove of previousMovesArray) {
//         if (
//           prevMove[0] === filteredArray[i][0] &&
//           prevMove[1] === filteredArray[i][1]
//         ) {
//           filteredArray.splice(i, 1);
//           i--;
//         }
//       }
//     }
//   }

//   return filteredArray;
// }

function filterMoves(array, previousMovesArray = []) {
  let filteredArray = [];
  let prevMoves = previousMovesArray;
  let furtherFilteredArr = [];

  for (let i = 0; i < array.length; i++) {
    // Check if x and y coordinates are within board boundaries, if so push it to filteredArray
    // console.log(`x: ${array[i][0]} y: ${array[i][1]}`);
    if (
      array[i][0] >= 0 &&
      array[i][0] <= 7 &&
      array[i][1] >= 0 &&
      array[i][1] <= 7
    ) {
      filteredArray.push(array[i]);
    }
  }

  for (let filteredMove of filteredArray) {
    for (let move of prevMoves) {
      if (move[0] !== filteredMove[0] && move[1] !== filteredMove[1]) {
        furtherFilteredArr.push(filteredMove);
      }
    }
  }
  return furtherFilteredArr;
}

function moveKnight(start, end, positionsVisited = []) {
  console.log(
    `----- moveKnight starts. start: ${start} | end: ${end} --- positions visited is: ${positionsVisited}`
  );
  // base case
  if (start[0] === end[0] && start[1] === end[1]) {
    console.log("Yay we made it! 😃");
    console.log(`Our path was:`);
    console.log(positionsVisited);
    console.log(`Which was reached in ${positionsVisited.length} steps`);
    positionsVisited.pop(); // Think about this...
    return;
  }

  // Add the current position to the visited positions
  positionsVisited.push(start);

  // recursive case
  let validMoves = returnValidMoves(start, positionsVisited);

  // If, within the list of valid moves we find our end destination, recall the function to reach the base case
  for (let move of validMoves) {
    if (move[0] === end[0] && move[1] === end[1]) {
      moveKnight([move[0], move[1]], end, positionsVisited);
      return;
    }
  }
  // Otherwise, for each valid move of valid moves recall moveKnight
  for (let move of validMoves) {
    moveKnight([move[0], move[1]], end, positionsVisited);
  }
}

moveKnight([0, 0], [3, 3]);
