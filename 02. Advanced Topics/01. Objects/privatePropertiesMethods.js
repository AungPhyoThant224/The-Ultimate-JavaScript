/**
 * Declare variables and methods as Local Scoped in a function cannot be 
 * access outside of that function.
 */
function CreateCircle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 1, y: 1 }; // cannot be access

    let computeOptimunLocation = function () { console.log('compute'); } // cannot be access

    this.draw = function () {
        console.log('draw');
        computeOptimunLocation();
        console.log(defaultLocation);
        console.log(this.radius);
    }
}

const circle = new CreateCircle(1);
console.log(circle.radius);
circle.draw();