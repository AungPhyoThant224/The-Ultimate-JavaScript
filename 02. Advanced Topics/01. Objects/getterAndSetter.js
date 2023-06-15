/**
 * Use Object.defineProperty() to define getters and/or setters.
 */
function CreateCircle(radius) {
    this.radius = radius;
    let defaultLocation = { x: 1, y: 1 };

    //Method 1
    this.getDefaultLocation = function () {
        return defaultLocation;
    }

    //Method 2
    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            if (!value.x || !value.y) {
                throw new Error("Invalid Location");
            }
            defaultLocation = value;
        }
    })
}

const circle = new CreateCircle(1);
console.log(circle.getDefaultLocation());

circle.defaultLocation = { x: 2, y: 2 }; // setter
console.log(circle.defaultLocation); // getter