function Shape(color) {
    this.color = color
}
Shape.prototype.duplicate = function () {
    console.log('Duplicate');
}

function Circle(radius, color) {
    Shape.call(this, color); // Super Constructor
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constuctor = Circle;

Circle.prototype.draw = function () {
    console.log('Draw');
}

let s = new Shape();
let c = new Circle(1, 'red');