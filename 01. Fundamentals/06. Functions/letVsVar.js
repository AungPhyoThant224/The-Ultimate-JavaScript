/**
 * let => block-scoped
 * var => function-scoped
 * 
 * NOTE: Declare global scoped variable with 'var' attach the window object
 * but 'let' does not.
 */

function start() {
    for (var i = 0; i < 5; i++) {
        console.log(i); // can use
    }
    console.log(i); // can use

    for (let j = 0; j < 5; j++) {
        console.log(j); // can use
    }
    console.log(j); // cannot use, this will give us error
}

start();