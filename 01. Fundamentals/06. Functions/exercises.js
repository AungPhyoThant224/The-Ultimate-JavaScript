/**
 * Sum of Arguments
 */
sum(1, 2, [3, 4]);
function sum(...args) {
    const res = args.reduce((accumulator, current) => {
        if (Array.isArray(current)) {
            let arrSum = current.reduce((accu, cur) => accu + cur);
            return arrSum + accumulator;
        }
        return accumulator + current;
    }, 0)
    console.log(res);
}

console.log(sumMosh([1, 2, 3, 4]));
function sumMosh(...items) {
    if (items.length === 1 && Array.isArray(items[0])) {
        items = [...items[0]];
    }
    return items.reduce((a, b) => a + b);
}