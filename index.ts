let puzzle = [
  [6, null, null, 8, 7, null, null, null, 9],
  [null, null, null, 5, null, null, 8, null, null],
  [null, 9, 7, null, null, 6, 5, null, null],

  [null, null, 5, null, null, null, null, 7, 8],
  [3, null, null, null, 6, null, null, null, 4],
  [4, 1, null, null, null, null, 2, null, null],

  [null, null, 1, 4, null, null, 7, 3, null],
  [null, null, 3, null, null, 5, null, null, null],
  [5, null, null, null, 2, 7, null, null, 6],
];

function checkBox(num: number) {}

function getRow(y) {
  return puzzle[y];
}

function getColumn(x) {
  let column = [];
  for (let row of puzzle) {
    column.push(row[x]);
  }
  return column;
}

function getBox(x, y): number[] {
  if (y >= 0 && y < 3) {
    if (x >= 0 && x < 3) {
      const array = [
        ...puzzle[0].slice(0, 3),
        ...puzzle[1].slice(0, 3),
        ...puzzle[2].slice(0, 3),
      ];
      return array;
    }
    if (x >= 3 && x < 6) {
      const array = [
        ...puzzle[0].slice(3, 6),
        ...puzzle[1].slice(3, 6),
        ...puzzle[2].slice(3, 6),
      ];
      return array;
    }
    if (x >= 6 && x < 9) {
      const array = [
        ...puzzle[0].slice(6, 9),
        ...puzzle[1].slice(6, 9),
        ...puzzle[2].slice(6, 9),
      ];
      return array;
    }
  }
  if (y >= 3 && y < 6) {
    if (x >= 0 && x < 3) {
      const array = [
        ...puzzle[3].slice(0, 3),
        ...puzzle[4].slice(0, 3),
        ...puzzle[5].slice(0, 3),
      ];
      return array;
    }
    if (x >= 3 && x < 6) {
      const array = [
        ...puzzle[3].slice(3, 6),
        ...puzzle[4].slice(3, 6),
        ...puzzle[5].slice(3, 6),
      ];
      return array;
    }
    if (x >= 6 && x < 9) {
      const array = [
        ...puzzle[3].slice(6, 9),
        ...puzzle[4].slice(6, 9),
        ...puzzle[5].slice(6, 9),
      ];
      return array;
    }
  }
  if (y >= 6 && y < 9) {
    if (x >= 0 && x < 3) {
      const array = [
        ...puzzle[6].slice(0, 3),
        ...puzzle[7].slice(0, 3),
        ...puzzle[8].slice(0, 3),
      ];
      return array;
    }
    if (x >= 3 && x < 6) {
      const array = [
        ...puzzle[6].slice(3, 6),
        ...puzzle[7].slice(3, 6),
        ...puzzle[8].slice(3, 6),
      ];
      return array;
    }
    if (x >= 6 && x < 9) {
      const array = [
        ...puzzle[6].slice(6, 9),
        ...puzzle[7].slice(6, 9),
        ...puzzle[8].slice(6, 9),
      ];
      return array;
    }
  }
}

function isBoxDone(num: number) {}

// let asd = getBox(8, 5);
// console.log(asd);
// let column = getColumn(0);
// let row = getRow(0);
// console.log(`column: ${column}`);
// console.log(`row: ${row}`);
console.log(puzzle);
let cellPossibilities = [[], [], [], [], [], [], [], [], []];
for (let y = 0; y < 9; y++) {
  for (let x = 0; x < 9; x++) {
    if (Number.isInteger(puzzle[y][x])) continue;
    cellPossibilities[y][x] = cellCouldBe(x, y);
    if (
      Array.isArray(cellPossibilities[y][x]) &&
      cellPossibilities[y][x].length === 1
    ) {
      puzzle[y][x] = cellPossibilities[y][x];
    }
  }
}
console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW");
console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW");
console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW");
console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW");
console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW");
console.log(puzzle);
console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW");
console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW");
console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW");
console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW");
console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW");
console.log(cellPossibilities);

function cellCouldBe(x: number, y: number): number[] {
  const box = getBox(x, y);
  const row = getRow(y);
  const column = getColumn(x);
  let couldBe = [];
  for (let i = 1; i < 10; i++) {
    if (!box.includes(i) && !row.includes(i) && !column.includes(i)) {
      couldBe.push(i);
    }
  }
  return couldBe;
}
//asd = getBox(5, 5);
// console.log(asd);
// asd = getBox(5, 7);
// console.log(asd);
// asd = getBox(7, 5);
// console.log(asd);
// console.log(asd);
