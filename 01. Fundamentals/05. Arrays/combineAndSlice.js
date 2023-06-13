/**
 * Primitive
 */
let first = [1, 2, 3];
let second = [4, 5, 6];

/**
 * Combine two array
 */
let combine = first.concat(second);
console.log(combine);

/**
 * slice() with no parameter is same as copy
 */
let slice = combine.slice();
console.log(slice);

/**
 * slice form index 1
 */
slice = combine.slice(1);
console.log(slice);

/**
 * slice from index 1 and end at index 3
 */
slice = combine.slice(1, 3);
console.log(slice);

/**********************/
/**
 * Reference
 * Reference types are copied by their reference
 */
let arr1 = [{ id: 1 }];
let arr2 = [1, 2, 3];

let comb = arr1.concat(arr2);
console.log(comb);

arr1[0].id = 10;
console.log(comb);
