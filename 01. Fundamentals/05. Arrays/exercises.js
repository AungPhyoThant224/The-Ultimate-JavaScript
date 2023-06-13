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
console.log(includes([1, 2, 3, 4], 5));
function includes(array, search) {
  return array.some((value) => value === search);
}
