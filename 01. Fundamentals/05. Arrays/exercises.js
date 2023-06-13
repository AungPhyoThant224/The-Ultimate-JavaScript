/**
 * Array from Range
 */
// console.log(arrayFromRange(-10, -4));
// function arrayFromRange(min, max) {
//   let arr = [];
//   while (min <= max) {
//     arr.push(min);
//     min++;
//   }
//   return arr;
// }

/**
 * Includes
 */
// console.log(includes([1, 2, 3, 4], 5));
// function includes(array, search) {
//   return array.some((value) => value === search);
// }

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
