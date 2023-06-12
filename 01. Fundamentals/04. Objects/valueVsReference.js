/**
 * Primitive(Value) are copied by their value.
 * Reference(Object) are copied by their reference.
 */

//Example 1
let x = 10;
let y = x;
x = 20;
console.log(y);

let a = { value: 10 };
let b = a;
a.value = 20;
console.log(b);

//Example 2
let num = 10;
function increament(num) {
  num++;
}
increament(num);
console.log(num);

let obj = { value: 10 };
function increament1(obj) {
  obj.value++;
}
increament1(obj);
console.log(obj);
