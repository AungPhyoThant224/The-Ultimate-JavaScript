/*
    Falsy
    1. undefined,
    2. null, 
    3. 0,
    4. false,
    5. '',
    6. NaN,

    Truthy
    Anything that is not FALSY is TRUTHY.

    false || 1 || 2 => 1
    Becasue in OR operator when we found the truthy one, ignore other after it.
    This is called Short-circuiting.
*/

let userColor = 'red';
let defaultColor = 'blue';
console.log(userColor || defaultColor);

let user2Color = undefined;
console.log(user2Color || defaultColor);