/**
 * Sum of Arguments
 */
// sum(1, 2, [3, 4]);
// function sum(...args) {
//     const res = args.reduce((accumulator, current) => {
//         if (Array.isArray(current)) {
//             let arrSum = current.reduce((accu, cur) => accu + cur);
//             return arrSum + accumulator;
//         }
//         return accumulator + current;
//     }, 0)
//     console.log(res);
// }

// console.log(sumMosh([1, 2, 3, 4]));
// function sumMosh(...items) {
//     if (items.length === 1 && Array.isArray(items[0])) {
//         items = [...items[0]];
//     }
//     return items.reduce((a, b) => a + b);
// }

/**
 * Area of Circle
 */
// let circle = {
//     radius: 2,
//     get area() {
//         return Math.PI * this.radius * this.radius;
//     }
// }
// console.log(circle.radius);
// console.log(circle.area);

/**
 * Error Handling
 */
try {
    console.log(countOccurrences(null, 1));
} catch (error) {
    console.log(error);
}
function countOccurrences(array, searchElement) {
    if (!Array.isArray(array)) {
        throw new Error("First input must be array");
    }
    const result = array.reduce((accumulate, current) => {
        if (current === searchElement) {
            accumulate++;
        }
        return accumulate;
    }, 0);
    return result;
}