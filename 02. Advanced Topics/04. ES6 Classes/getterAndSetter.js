const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    get radius() {
        return _radius.get(this);
    }

    set radius(value) {
        if (value <= 0) throw new Error('Invalid Value');

        _radius.set(this, value);
    }

}

let circle = new Circle(1);
console.log(circle.radius);
circle.radius = 10;
console.log(circle.radius);