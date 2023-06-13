/**
 * Primitive
 */
let nums = [2, 3, 1];

/**
 * Sort the array
 */
let sort = nums.sort();
console.log(sort);

/**
 * Sort the array in reverse order
 */
let reverse = nums.reverse();
console.log(reverse);

/******************/
/**
 * Reference
 */
let courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "JavaScript" },
];

courses.sort((a, b) => {
  let nameA = a.name.toUpperCase();
  let nameB = b.name.toUpperCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});
console.log(courses);
