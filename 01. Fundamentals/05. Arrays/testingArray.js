let nums = [1, 2, 3, 4];

let allPositive = nums.every((num) => num >= 0);
console.log(allPositive);

nums = [-1, 0, 1, 2];
let atLeastOnePositive = nums.some((num) => num >= 0);
console.log(atLeastOnePositive);
