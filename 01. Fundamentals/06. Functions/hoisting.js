/**
 * We can call the function before its definition in function declaration
 * because of hoisting.
 * Hoisting is the  process of moving function declaration to the top of the 
 * file and this is done automatically by the JavaScript Engine.
 */

/**
 * Function Declaration
 */
walk(); // This will work
function walk() {
    console.log('Walk');
}

/**
 * Anonymous Function Expression
 */
move(); // This will give us error.
let move = function () {
    console.log('Move');
};