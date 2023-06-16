const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
    constructor(radius) {
        /**
         * Private properties
         */
        _radius.set(this, radius);

        /**
         * Private methods
         */
        // _move.set(this, function () {}) // this == undefinded
        _move.set(this, () => console.log(this, 'move')); // this == Circle
    }

    draw() {
        /**
         * Access private members
         */
        console.log(_radius.get(this));
        _move.get(this)();
    }
}