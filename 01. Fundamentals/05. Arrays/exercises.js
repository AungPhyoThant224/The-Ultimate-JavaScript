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
