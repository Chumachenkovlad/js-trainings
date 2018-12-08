/**
 * @param {character[][]} board
 * @return {boolean}
 */

const exampleBoard = [
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']
];

var isValidSudoku = function(board) {
  return (
    isCorrectLines(board) &&
    isCorrectLines(rotateBoard(board)) &&
    isCorrectSqueres(board)
  );
};

function isCorrectLines(board) {
  return !board.find(line => {
    const filteredLine = line.filter(char => char !== '.');
    return containsDuplicate(filteredLine);
  });
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  for (i = nums.length; i < 0, i--; ) {
    if (nums.indexOf(nums[i]) < i) {
      return true;
    }
  }
  return false;
}

function rotateBoard(board) {
  const rotated = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const rotatedRowIndex = board.length - 1 - j;
      if (!Array.isArray(rotated[rotatedRowIndex])) {
        rotated[rotatedRowIndex] = [];
      }
      rotated[board.length - 1 - j][i] = board[i][j];
    }
  }
  return rotated;
}

function getListFromSquere(startI, startJ, board) {
  let list = [];
  for (let i = startI; i < startI + 3; i++) {
    for (let j = startJ; j < startJ + 3; j++) {
      const el = board[i][j];
      if (el !== '.') {
        list.push(board[i][j]);
      }
    }
  }
  return list;
}

function isCorrectSqueres(board) {
  const indexToCheck = [0, 3, 6];
  const pairIndexes = [];
  for (let i = 0; i < indexToCheck.length; i++) {
    for (let j = 0; j < indexToCheck.length; j++) {
      pairIndexes.push([indexToCheck[i], indexToCheck[j]]);
    }
  }

  const isCorectSqueres = pairIndexes.every(
    pair => !containsDuplicate(getListFromSquere(...pair, board))
  );
  return isCorectSqueres;
}

console.log(isValidSudoku(exampleBoard));
