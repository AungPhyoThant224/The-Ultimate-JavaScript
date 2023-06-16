class Shape {
    constructor(color) {
        this.color = color;
    }
    move() {
        console.log('Move');
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        /**
         * If child has the consturctor, call the parent constructor first.
         */
        super(color);

        this.radius = radius;
    }
}

let circle = new Circle();
circle.move();