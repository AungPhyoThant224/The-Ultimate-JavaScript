function Circle(radius) {
    //Instance Members
    this.radius = radius;
    this.move = function () {
        console.log('Move');
    }
}

//Prototype Members
Circle.prototype.draw = function () {
    console.log('Draw');
}

let circle = new Circle(1);

// Return all Instance Members
console.log(Object.keys(circle));

// Return all Members (Prototype + Instance)
for (let key in circle) console.log(key);

// If has the property return true otherwise false
console.log(circle.hasOwnProperty('radius'));