/**
 * Variable key will get the keys of person objcect.
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