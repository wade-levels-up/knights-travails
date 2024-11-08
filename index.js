function knightMoves(start, finish) {
  let currentPosition = start;
}

function returnValidMoves(currentPosition) {
  let validMoves = [];
  let [x, y] = currentPosition;
}

function calculateMove(currentPosition) {
  let [x, y] = currentPosition;
  let movelist = [
    [2, 1],
    [-2, 1],
    [2, -1],
    [-2, -1],
  ];
  let moves = movelist[Math.floor(Math.random() * 4)];
  let coinflip = Math.floor(Math.random() * 2 + 1);
  if (coinflip === 1) {
    x += moves.pop();
    y += moves.pop();
  }
  if (coinflip === 2) {
    y += moves.pop();
    x += moves.pop();
  }
  if (x < 0 || y < 0 || x > 7 || y > 7) {
    console.log(
      `Recurring cause x or y broke board bounds - x: ${x} | y: ${y}`
    );
    [x, y] = calculateMove(currentPosition);
  }
  return [x, y];
}

knightMoves([0, 0], [7, 7]);
returnValidMoves([0, 0]);
console.log(calculateMove([7, 7]));
