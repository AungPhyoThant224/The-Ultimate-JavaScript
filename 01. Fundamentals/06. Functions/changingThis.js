/**
 * Method 1 (Self approach)
 */
const tags1 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    getTags() {
        const self = this;
        this.tags.forEach(function (tag) {
            console.log(self.title, tag);
        })
    }
}
tags1.getTags();

/**
 * Method 2 (Self approach)
 */
const tags2 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    getTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }.bind(this))
    }
}
tags2.getTags();

//Some example
function play() {
    console.log(this);
}
play.call({ name: 'a' }); // Print new object { name: 'a' }
play.apply({ name: 'a' }); // Print new object { name: 'a' }
play.bind({ name: 'a' })(); // Print new object { name: 'a' }
play(); // Print window object

/**
 * Method 3 (Use arrow function)
 */
const tags3 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    getTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        })
    }
}
tags3.getTags();