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

function knightMoves(start, end) {
  let queue = [[start, [start]]];
  let visited = [];

  while (queue.length > 0) {
    let [curPos, path] = queue.shift();

    if (curPos[0] === end[0] && curPos[1] === end[1]) {
      console.log("We made it!");
    }

    // Mark the current position as visited
    visited.push([curPos, path]);

    // Get valid moves from the current position
    let validMoves = returnValidMoves(curPos);

    // Filter valid moves to exclude positions already visited
    validMoves.filter((move) => {
      for (let pos of visited) {
        if (move[0] === pos[0] && move[1] === pos[1]) {
          return true;
        }
      }
    });
    for (let move of validMoves) {
      queue.push([move, [path].push[move]]);
      console.log(queue);
    }
  }
}

// function moveKnight(start, end, positionsVisited = []) {
//   if (shortestPathFound) return;
//   let localPosVisited = positionsVisited.slice();
//   // Add the current position to the local visited positions
//   localPosVisited.push(start);
//   // Collect array of valid moves from current position
//   let validMoves = returnValidMoves(start, localPosVisited);

//   for (let pathway of possiblePathways) {
//     if (pathway && pathway.length < positionsVisited.length) {
//       return;
//     }
//   }

//   // Base case
//   if (start[0] === end[0] && start[1] === end[1]) {
//     shortestPathFound = true;
//     console.log(`Our path was:`);
//     console.log(localPosVisited);
//     console.log(`Which was reached in ${localPosVisited.length - 1} steps`);
//     console.log("This is the shortest pathway possible");
//     possiblePathways.push(localPosVisited);
//     return;
//   }

//   // Recursion case
//   // If we find the end vertex in the list of valid moves move knight to it.
//   for (let move of validMoves) {
//     if (move[0] === end[0] && move[1] === end[1]) {
//       return moveKnight([move[0], move[1]], end, localPosVisited);
//     }
//   }
//   //

//   // Otherwise, for each valid move of valid moves recall moveKnight
//   for (let move of validMoves) {
//     moveKnight([move[0], move[1]], end, localPosVisited);
//   }
//   return;
// }

// moveKnight([5, 5], [5, 6]); - Should be 3 steps
knightMoves([3, 3], [5, 5]);
