function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    }
}

const circle = createCircle(1);
console.log(circle.constructor);

function CreateCircle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle1 = new CreateCircle(1);
console.log(circle1.constructor);