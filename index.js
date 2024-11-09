let positionsVisited = [];
let possiblePathways = [];
let cycles = 0;
let shortestPathFound = false;

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
  let filteredArray = [];
  let furtherFilteredArr = [];

  for (let i = 0; i < array.length; i++) {
    if (
      array[i][0] >= 0 &&
      array[i][0] <= 7 &&
      array[i][1] >= 0 &&
      array[i][1] <= 7
    ) {
      filteredArray.push(array[i]);
    }
  }

  // Filter out moves that have been visited
  for (let filteredMove of filteredArray) {
    let isVisited = false;
    for (let move of previousMovesArray) {
      if (move[0] === filteredMove[0] && move[1] === filteredMove[1]) {
        isVisited = true;
        break;
      }
    }
    if (!isVisited) {
      furtherFilteredArr.push(filteredMove);
    }
  }

  return furtherFilteredArr;
}

function moveKnight(start, end, positionsVisited = []) {
  if (shortestPathFound) return;
  let localPosVisited = positionsVisited.slice();

  for (let pathway of possiblePathways) {
    if (pathway && pathway.length < positionsVisited.length) {
      return;
    }
  }

  // Base case - Does is our start x,y now the same as our end x,y? If so, do this.
  if (start[0] === end[0] && start[1] === end[1]) {
    shortestPathFound = true;
    localPosVisited.push(start);
    console.log(`Our path was:`);
    console.log(localPosVisited);
    console.log(`Which was reached in ${localPosVisited.length - 1} steps`);
    console.log("This is the shortest pathway possible");
    possiblePathways.push(localPosVisited);
    return;
  }

  // Add the current position to the local visited positions
  localPosVisited.push(start);

  let validMoves = returnValidMoves(start, localPosVisited);

  // If, within the list of valid moves we find our end destination, recall the function to reach the base case
  for (let move of validMoves) {
    if (move[0] === end[0] && move[1] === end[1]) {
      return moveKnight([move[0], move[1]], end, localPosVisited);
    }
  }
  // Otherwise, for each valid move of valid moves recall moveKnight
  for (let move of validMoves) {
    moveKnight([move[0], move[1]], end, localPosVisited);
  }
  return;
}

moveKnight([7, 7], [0, 0]);
