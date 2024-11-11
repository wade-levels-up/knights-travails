function returnValidMoves(currentPosition) {
  let [x, y] = currentPosition;
  let validMoves = filterMoves(calculateMoves(currentPosition));
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

function filterMoves(array) {
  let filteredArray = [];

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

  return filteredArray;
}

function knightMoves(start, end) {
  let queue = [[start, [start]]];
  let visited = [];

  while (queue.length > 0) {
    // Take the first item in the queue and split it into the vertex and array of edges
    let [curPos, path] = queue.shift();

    // If the current vertex coordinates match end coordinates log the path and min # of moves to reach it
    if (curPos[0] === end[0] && curPos[1] === end[1]) {
      console.log(`You made it in ${path.length} moves!`);
      console.log(`⬇️  Here's your path  ⬇️`);
      console.log(path);
      return;
    }

    // Push visited vertices and their corresponding edges to the visited array
    visited.push([curPos, path]);

    // Get valid moves from the current position
    let validMoves = returnValidMoves(curPos);

    // Filter valid moves to exclude positions already visited
    validMoves = validMoves.filter((move) => {
      for (let item of visited) {
        let visitedEdges = item[1];
        for (let edge of visitedEdges) {
          if (edge[0] === move[0] && edge[1] === move[1]) {
            return false;
          } else {
            return true;
          }
        }
      }
    });

    // For each valid move push a new item to the queue that has the new move as it's vertex as
    // well as the valid move added to it's list of visited vertices
    for (let move of validMoves) {
      let newPath = path.slice();
      newPath.push(move);
      let queueItem = [move, newPath];
      queue.push(queueItem);
    }
  }
}

knightMoves([0, 0], [7, 7]);
