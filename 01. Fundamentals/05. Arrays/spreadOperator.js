let first = [1, 2, 3];
let second = [4, 5, 6];

/**
 * Same as concatenating the array
 * We can also add additional data
 */
let combine = [...first, ...second];
let combine1 = ["a", ...first, "b", ...second, "c"];

/**
 * Same as copy
 */
let copy = [...combine];
