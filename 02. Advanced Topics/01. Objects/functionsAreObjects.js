function CreateCircle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}
const circle = new CreateCircle(1);
// CreateCircle.call({}, 1); //have multiple parameter 1, 2, 3
// CreateCircle.apply({}, 1); //have multiple parameter [1, 2, 3]
// Both are same as new CreateCircle(1);

const Circle1 = new Function(
  "radius",
  `this.radius = radius;
    this.draw = function () {
        console.log("Draw");
    };`
);

const another = new Circle1(1);
console.log(another);
