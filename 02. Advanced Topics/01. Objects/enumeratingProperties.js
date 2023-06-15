function CreateCircle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}
const circle = new CreateCircle(1);

// Method 1
for (let key in circle) {
    if (typeof circle[key] !== 'function') {
        console.log(key, circle[key]);
    }
}

// Method 2
const keys = Object.keys(circle);
for (let key of keys) {
    console.log(key, circle[key]);
}

// If the Key is included in Object or not
if ('radius' in circle) console.log('yes');