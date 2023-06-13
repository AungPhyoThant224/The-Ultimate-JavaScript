let nums = [1, -1, 2, 3];

/**
 * We can pass the second parameter as accumulator initial value
 */
let sum1 = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum1);

/**
 * Without second parameter the accumulator intial value will automatically
 * set as the first item of the array
 */
let sum = nums.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sum);
