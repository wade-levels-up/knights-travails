function knightMoves(start, finish) {
  let currentPosition = start;
}

function returnValidMoves(currentPosition) {
  let validMoves = [];
  let [x, y] = currentPosition;
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

knightMoves([0, 0], [7, 7]);
returnValidMoves([0, 0]);
console.log(calculateMoves([2, 1]));
