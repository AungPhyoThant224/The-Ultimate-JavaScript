/**
 * All the elements in the arry will join with ','
 */
let arr = [1, 2, 3];
let joined = arr.join(",");
console.log(joined);

/**
 * This method is useful when building a URL.
 */
let message = "This is my first message.";
let split = message.split(" ");
let combined = split.join("-");
console.log(combined);
