/**
 * Address Object
 */
// const address = {
//   street: "Myathisar Road",
//   city: "Mogoke",
//   zipCode: "05201",
// };

// function getAddress(address) {
//   for (let data in address) {
//     console.log(data, address[data]);
//   }
// }

// getAddress(address);

/**
 * Factory and Constructor Functions
 */
function fruitFactory(name, color) {
  return {
    name,
    color,
  };
}

function fruitConstructor(name, color) {
  this.name = name;
  this.color = color;
}

const apple = fruitFactory("apple", "red");
const orange = new fruitConstructor("orange", "orange");
console.log("fruitFactory", apple);
console.log(orange);
