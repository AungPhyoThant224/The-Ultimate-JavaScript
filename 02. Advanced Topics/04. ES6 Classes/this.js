// 'use strict'; // Strict mode enable
// const Circle = function () {
//     this.draw = function () {
//         console.log(this);
//     }
// }
// let circle = new Circle();
// let drawCircle = circle.draw;
// drawCircle(); // 'this' == undefined because strict mode enabled

class Square {
    draw() {
        console.log(this);
    }
}
let square = new Square();
let drawSquare = square.draw;
drawSquare(); // 'this' == undefinde because the body of class excuted in strict mode by default.