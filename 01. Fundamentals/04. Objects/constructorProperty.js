/**
 * Every object has a constructor property and that references a function
 * that was used to create that object.
 */

let obj = {
  name: "a",
  age: "18",
};
console.log(obj.constructor);

function CreateCircle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}
const circle = new CreateCircle(1);
console.log(circle.constructor);

function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("Draw");
    },
  };
}
const circle1 = createCircle(1);
console.log(circle1.constructor);
