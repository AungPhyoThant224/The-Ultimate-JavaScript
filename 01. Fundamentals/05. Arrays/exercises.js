/**
 * Array from Range
 */
console.log(arrayFromRange(-10, -4));
function arrayFromRange(min, max) {
  let arr = [];
  while (min <= max) {
    arr.push(min);
    min++;
  }
  return arr;
}

/**
 * Includes
 */
console.log(includes([1, 2, 3, 4], 5));
function includes(array, search) {
  return array.some((value) => value === search);
}

/**
 * Except
 */
console.log(except([1, 2, 3, 4, 1, 1], [1, 2]));
function except(numbers, excluded) {
  const newNumbers = [];
  numbers.map((value) => {
    if (!excluded.includes(value)) {
      newNumbers.push(value);
    }
  });
  return newNumbers;
}

/**
 * Moving an Element
 */
let array = [1, 2, 3, 4];
console.log(move(array, 2, -1));

//-------------Mosh Solution-----------
function move(array, index, offset) {
  let position = index + offset;
  if (!isValidOffset(array, position)) {
    console.error("Invalid Offset");
    return;
  }

  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}

//-------------My Solution--------------
// function move(array, index, offset) {
//   let position = index + offset;
//   if (!isValidOffset(array, position)) {
//     console.error("Invalid Offset");
//     return;
//   }

//   let newArr = [...array];
//   if (index < position) {
//     for (let i = index; i < position; i++) {
//       var temp = newArr[i];
//       newArr[i] = newArr[i + 1];
//       newArr[i + 1] = temp;
//     }
//   } else if (index > position) {
//     for (let i = index; i > position; i--) {
//       var temp = newArr[i];
//       newArr[i] = newArr[i - 1];
//       newArr[i - 1] = temp;
//     }
//   }
//   return newArr;
// }

function isValidOffset(array, position) {
  if (position < 0 || position > array.length - 1) {
    return false;
  }
  return true;
}

/**
 * Count Occurrences
 */
console.log(countOccurrences([1, 2, 3, 4, 1], 1));
function countOccurrences(array, searchElement) {
  const result = array.reduce((accumulate, current) => {
    if (current === searchElement) {
      accumulate++;
    }
    return accumulate;
  }, 0);
  return result;
}

/**
 * Get Max
 */
console.log(getMax([1, 2, 13, 4, 10, 20]));
function getMax(array) {
  if (array.length === 0) {
    return;
  }
  let max = array.reduce(
    (accumulator, current) => (current > accumulator) ? current : accumulator);
  return max;
}

/**
 * Movies
 */
let movies = [
  { title: 'a', year: 2018, rating: 4.5 },
  { title: 'b', year: 2018, rating: 4.2 },
  { title: 'c', year: 2018, rating: 3 },
  { title: 'd', year: 2017, rating: 4.7 },
];

let filtered = movies.filter((movie) => (movie.year === 2018 && movie.rating > 4));

let sorted = filtered.sort((a, b) => {
  if (a.rating > b.rating) return -1;
  if (a.rating < b.rating) return 1;
  return 0;
}).reverse().map(m => console.log(m.title));
