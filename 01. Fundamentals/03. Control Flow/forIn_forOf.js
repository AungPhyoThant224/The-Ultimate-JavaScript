/**
 * Variable key will get the keys of person objcect.
 * 
 * Conclusion of for..in and for..of loops
 * i. Use for..in loop to iterate over the properties of object.
 * ii. Use for..of to iterate over elements of items in array.
 */
let person = {
    name: 'Mosh',
    age: 30
}
for(let key in person){
    console.log(key, person[key]);
}

/**
 * Variable index will get the each index of items in the color array.
 */
let colors = ["red", "green", "blue"];
for(let index in colors){
    console.log(index, colors[index]);
}

/**
 * Variable fruit will get the each items of fruits array.
 */
let frutis = ["apple", "orange", "grape"];
for(let fruit of frutis){
    console.log(fruit);
}