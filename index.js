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

  function filterMoves(array) {
    let filteredArray = array;
    console.table(filteredArray);
    for (let i = 0; i < array.length; i++) {
      if (filteredArray[i][0] < 0 || filteredArray[i][0] > 7) {
        console.log(
          `x: ${filteredArray[i][0]} was less than 0 or greater than 7`
        );
        filteredArray.splice(i, 1);
        i--;
      }
      if (filteredArray[i][1] < 0 || filteredArray[i][1] > 7) {
        console.log(
          `y: ${filteredArray[i][1]} was less than 0 or greater than 7`
        );
        filteredArray.splice(i, 1);
        i--;
      }
    }
    return filteredArray;
  }

  return filterMoves(modifiedMoves);
}

knightMoves([0, 0], [7, 7]);
returnValidMoves([0, 0]);
console.log(calculateMoves([2, 1]));
