class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    //Instance Method
    draw() {
        console.log('Draw');
    }

    //Static Method
    static parse() {
        console.log('Parse');
    }
}

/**
 * To call Instance Methods we have to create an Instance of an Objcect first.
 */
let circle = new Circle(1);
circle.draw();

/**
 * To call Static Methods we don't have to create Instance of an Object.
 */
Circle.parse();