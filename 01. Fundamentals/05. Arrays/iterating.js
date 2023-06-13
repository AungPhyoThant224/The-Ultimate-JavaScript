let nums = [1, 2, 3];

/**
 * Using for...in loop
 */
for (let num in nums) {
  console.log(num);
}

/**
 * Using forEach loop
 */
nums.forEach((num) => console.log(num));

/**
 * Using forEach loop with index
 */
nums.forEach((num, index) => console.log(num, index));
