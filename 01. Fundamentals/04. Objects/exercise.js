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

function AddressConstructor(city, street, zipCode) {
  this.city = city;
  this.street = street;
  this.zipCode = zipCode;
}

// const address1 = addressFactory("a", "b", "c");
// const address2 = new AddressConstructor("a", "b", "c");
// console.log("addressFactory", apple);
// console.log(orange);

/**
 * Object Equality
 */
// const addr = new AddressConstructor("a", "b");
// const addr1 = new AddressConstructor("a", "b");
// const addr2 = addr1;
// console.log(areEqual(addr, addr1));
// console.log(areSame(addr, addr1));
// console.log(areSame(addr1, addr2));

// function areEqual(address1, address2) {
//   for (let data in address1) {
//     if (address1[data] !== address2[data]) {
//       return false;
//     }
//   }
//   return true;
// }

// function areSame(address1, address2) {
//   return address1 === address2;
// }

/**
 * Blog Post
 */
// let blog = {
//   title: "a",
//   body: "b",
//   author: "c",
//   views: 100,
//   comment: [
//     { author: "a", body: "b" },
//     { author: "b", body: "b" },
//   ],
//   isLive: true,
// };
// console.log(blog);

/**
 * Constructor function
 */
// let post = new Post("a", "b", "c");
// console.log(post);

// function Post(title, body, author) {
//   this.title = title;
//   this.body = body;
//   this.author = author;
//   this.view = 0;
//   this.comment = [];
//   this.isLive = false;
// }

/**
 * Price Range
 */
let priceRanges = [
  { label: "$", tooltip: "Inexpensive", minPerPerson: 1, maxPerPerson: 10 },
  { label: "$$", tooltip: "Modrate", minPerPerson: 11, maxPerPerson: 20 },
  { label: "$$$", tooltip: "Expensive", minPerPerson: 21, maxPerPerson: 50 },
];

let restaurant = [{ average: 5 }];
