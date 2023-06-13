let arr = [1, 2, 3, 1, 4];

/**
 * Return the index of value in array.
 * If not exist in array return -1.
 */
console.log(arr.indexOf(1));
console.log(arr.indexOf("1"));

/**
 * Return the last index of value in array.
 * If not exist in array return -1.
 */
console.log(arr.lastIndexOf(3));
console.log(arr.lastIndexOf(5));

/**
 * Return the value is in the array or not
 */
console.log(arr.includes(3));
console.log(arr.includes(5));

/**
 * NOTE: All these methods have the second parameter "Start Index"
 */
console.log(arr.indexOf(1, 2));
