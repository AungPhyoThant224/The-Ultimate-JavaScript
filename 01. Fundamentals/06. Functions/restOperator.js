/**
 * ...args contains all the parameter that pass the function and it stored
 * as array.
 */
function sum(...args) {
    let total = args.reduce((a, b) => a + b);
    console.log(total);
}
sum(1, 2, 3);

/**
 * As this example,
 * discount = 0.1;
 * ...price = [20 , 30];
 */
function price(discount, ...price) {
    let total = price.reduce((a, b) => a + b);
    total = total * (1 - discount);
    console.log(total);
}
price(0.1, 20, 30);

/**
 * NOTE: The rest operator should be the last parameter.
 */