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
function addressFactory(city, street, zipCode) {
  return {
    city,
    street,
    zipCode,
  };
}

function addressConstructor(city, street, zipCode) {
  this.city = city;
  this.street = street;
  this.zipCode = zipCode;
}

const apple = addressFactory("a", "b", "c");
const orange = new addressConstructor("a", "b", "c");
console.log("addressFactory", apple);
console.log(orange);
