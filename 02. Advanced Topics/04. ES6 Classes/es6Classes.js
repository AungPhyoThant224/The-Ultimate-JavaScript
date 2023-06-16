// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log('Draw');
//     }
// }
// Circle.prototype.move = function () {
//     console.log('Move');
// }
// let circle = new Circle(1);


/**
 * This class Cirlce is same as above constructor function Circle.
 */
class Circle {
    constructor(radius) {
        this.radius = radius;
        this.draw = function () {
            console.log('Draw');
        }
    }

    move() {
        console.log('Move');
    }
}
let circle = new Circle(1);