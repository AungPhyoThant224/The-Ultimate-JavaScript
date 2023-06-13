/**
 * Create date with current Date
 */
const now = new Date();
console.log(now);

/**
 * Create date with given Date
 */
const date1 = new Date("May 11 2018 09:00");
const date2 = new Date(2018, 4, 11, 9);
console.log(date1);
console.log(date2);

/**
 * Set year
 */
now.setFullYear(2017);
console.log(now);

/**
 * For more information https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */
