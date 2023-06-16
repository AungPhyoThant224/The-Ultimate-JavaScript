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

Circle.prototype.duplicate = function () {
    Shape.prototype.duplicate(); // Simply call from parent
    // Shape.prototype.duplicate.call(this); // If we need to used this
    console.log('Duplicate Circle');
}

let c = new Circle();