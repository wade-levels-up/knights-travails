let cycles = 0;

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
    // cycles += 1;
    // if (cycles > 5) return;
    let [curPos, path] = queue.shift();
    console.log("curPos is -----");
    console.log(curPos);
    console.log("path is -----");
    console.log(path);

    if (curPos[0] === end[0] && curPos[1] === end[1]) {
      console.log(`You made it in ${path.length} moves!`);
      console.log(`⬇️  Here's your path  ⬇️`);
      console.log(path);
      return;
    }

    // Mark the current position as visited
    visited.push([curPos, path]);

    // Get valid moves from the current position
    let validMoves = returnValidMoves(curPos);

    // Filter valid moves to exclude positions already visited
    validMoves = validMoves.filter((move) => {
      console.log(
        `Running the .filter method on validMoves, feeding: ${move} as the property`
      );
      console.log(move);
      for (let item of visited) {
        let visitedEdges = item[1];
        for (let edge of visitedEdges) {
          if (edge[0] === move[0] && edge[1] === move[1]) {
            console.log(
              "Found an edge in visited edges matching a move in validMoves"
            );
            return false;
          } else {
            return true;
          }
        }
      }
    });

    console.log(`valid moves from ${curPos} are -----`);
    console.log(validMoves);

    for (let move of validMoves) {
      let newPath = path.slice();
      console.log(" *** This is what I want to push to newPath");
      console.log([move[0], move[1]]);
      console.log("#### Now pushing to newPath! #####");
      newPath.push(move);
      console.log("-- This is how newPath looks after we push to it --");
      console.log(newPath);
      let vertex = [move, newPath];
      console.log("HERE IS THE VERTEX WE PUSH TO QUEUE");
      console.log(vertex[0], vertex[1]);
      queue.push(vertex);
    }
  }
}

knightMoves([2, 2], [6, 4]);
