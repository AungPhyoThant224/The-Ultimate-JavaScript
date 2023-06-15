function CreateCircle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new CreateCircle(1);

//Adding 
//Method 1
circle.location = { x: 1 };

//Method 2
circle['center location'] = { x: 1 };

//Method 3
const color = 'color';
circle[color] = 'red';

console.log(circle);

// Deleting
//Method 1
delete circle.location;

//Method 2
delete circle['center location'];

//Method 3
delete circle[color];

console.log(circle);