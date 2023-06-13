let arr = [1, 2, 3, 4, 5];

/**
 * Solution 1
 */
arr = [];

/**
 * Solution 2
 */
arr.length = 0;

/**
 * Solution 3
 */
arr.splice(0, arr.length);

/**
 * Solution 4
 */
while (arr.length > 0) {
  arr.pop();
}
