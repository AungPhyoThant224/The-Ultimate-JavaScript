/**
 * Every function in JavaScript contain a special object called arguments.
 * Arguments contains all the parameters that we pass th function.
 */

function sum(a, b) {
    let total = 0;
    for (let value of arguments) {
        total += value;
    }
    console.log(total);
}

sum();