function CreateCircle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new CreateCircle(1);
console.log(circle);