/**
 * { } = a scope
 * Global Scope variable can be used in every scope and can also redecalare
 * with the same name in other scope.
 * Local Scope variable cannot be used outside of that scope, but can 
 * decaler with the same name in other scope.
 */

const color = 'red' // Global

function start() {
    const message = 'hi'; // Local
    console.log(message); // can use in same scop

    const color = 'blue'; // can declare as the same name
    console.log(color);
}
start();

function stop() {
    console.log(color); // can use in other scope(this is from global)
    const message = 'Hello' // can declare as the same name in other scope
    console.log(message);
}
stop();

console.log(message); // this will give us error