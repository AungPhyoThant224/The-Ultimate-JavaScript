function mixin(target, ...sources) { // ... is rest operator
    Object.assign(target, ...sources); // ... is spread operator
}

let canEat = {
    eat: function () {
        console.log('Eat');
    }
}

let canWalk = {
    walk() {
        console.log('Walk');
    }
}

let canSwim = {
    swim() {
        console.log('Walk');
    }
}

function Person() { }

mixin(Person.prototype, canEat, canWalk);

let person = new Person();