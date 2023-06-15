/**
 * Primitive(Value) are copied by their value.
 * Reference(Object) are copied by their reference.
 */

//Example 1
let a = 10;
let b = a;
a = 20;
console.log(b);

let x = { value: 10 };
let y = x;
x.value = 20;
console.log(y);

//Example 2
let number = 10;
function increament(num) {
    num++;
}
increament(number);
console.log(number);

let obj = { value: 10 };
function increase(object) {
    object.value++;
}
increase(obj);
console.log(obj);