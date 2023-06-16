class Shape {
    move() {
        console.log('Move');
    }
}

class Circle extends Shape {
    /**
     * Overridng method
     */
    move() {
        super.move(); // if we want to call parent method.
        console.log("Shape Move");
    }
}

let circle = new Circle();
circle.move();