let person = { name: 'Mosh' };

let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor);

Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: true,
    configurable: false,
})

person.name = "John";

console.log(Object.keys(person));

delete person.name;
console.log(person);
