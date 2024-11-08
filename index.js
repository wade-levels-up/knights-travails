function knightMoves(start, finish) {
  let currentPosition = start;
}

function returnValidMoves(currentPosition, previousPositions) {
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

console.log(returnValidMoves([3, 3], [[2, 1]]));
