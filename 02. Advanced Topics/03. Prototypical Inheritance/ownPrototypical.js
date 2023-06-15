function Shape() { }
Shape.prototype.duplicate = function () {
    console.log('Duplicate');
}

function Circle(radius) {
    this.radius = radius;
}

// Circle.prototype = Object.create(Object.prototype); // Before
Circle.prototype = Object.create(Shape.prototype); // After

Circle.prototype.draw = function () {
    console.log('Draw');
}

let s = new Shape();
let c = new Circle(1);
c.duplicate(); // can use members from Shape Prototype