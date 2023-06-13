/**
 * Address Object
 */

const address = {
  street: "Myathisar Road",
  city: "Mogoke",
  zipCode: "05201",
};
getAddress(address);
function getAddress(address) {
  for (let data in address) {
    console.log(data, address[data]);
  }
}
