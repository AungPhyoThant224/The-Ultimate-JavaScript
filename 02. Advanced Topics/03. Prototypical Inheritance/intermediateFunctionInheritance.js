function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constuctor = Child;
}

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
extend(Circle, Shape);
Circle.prototype.draw = function () {
    console.log('Draw');
}

function Square(size) {
    this.size = size;
}
extend(Square, Shape);

let s = new Shape();
let c = new Circle(1, 'red');
let sq = new Square(1);