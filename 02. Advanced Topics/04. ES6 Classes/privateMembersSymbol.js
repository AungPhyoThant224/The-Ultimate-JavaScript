const _radius = Symbol();
const _draw = Symbol();

class Circle {
    constructor(radius) {
        this[_radius] = radius; // private property
    }

    [_draw]() { // private function.
        console.log('Draw');
    }
}