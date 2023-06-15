function Shape() { }
Shape.prototype.duplicate = function () {
    console.log('Duplicate');
}

function Circle(radius) {
    this.radius = radius;
}

//Circle.prototype.constuctor = Circle; // Before
// new Circle.prototype.constuctor() == new Circle()
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constuctor = Circle;

Circle.prototype.draw = function () {
    console.log('Draw');
}

let s = new Shape();
let c = new Circle(1);