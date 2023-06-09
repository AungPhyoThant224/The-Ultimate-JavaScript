function Circle(radius) {
    //Instance Members
    this.radius = radius;
    this.move = function () {
        this.draw(); // can use from Prototype Members.
        console.log('Move');
    }
}

//Prototype Members
Circle.prototype.draw = function () {
    console.log('Draw');
}

Circle.prototype.toString = function () {
    //can use from Instance Members
    return 'Circle radius = ' + this.radius;
}

let c1 = new Circle(1);

c1.move(); // can use from Instance Members
console.log(c1.toString()); // can use from Prototype Members