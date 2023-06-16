function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constuctor = Child;
}

function Shape() { }
Shape.prototype.duplicate = function () {
    console.log('Duplicate');
}

function Circle() { }
extend(Circle, Shape);
Circle.prototype.duplicate = function () {
    console.log('Duplicate Circle');
}

function Square() { }
extend(Square, Shape);

const shapes = [
    new Circle(),
    new Square(),
];

for (let shape of shapes) {
    shape.duplicate();
}