/**
 * Prototypical Inheritance
 */

function HTMLElement() {
    this.click = function () {
        console.log('Clicked');
    }
}
HTMLElement.prototype.focus = function () {
    console.log('Focused');
}

function HTMLSelectElement(items = []) {
    this.items = items;

    this.addItem = function (value) {
        this.items.push(value);
    }

    this.removeItem = function (value) {
        let index = this.items.indexOf(value);
        if (index != -1) {
            this.items.splice(index, 1);
        } else {
            console.log('Invalid value');
        }
    }
}

// HTMLSelectElement.prototype = Object.create(HTMLElement.prototype);
// HTMLSelectElement.prototype.click = function () {
//     HTMLElement.prototype.click();
// }

HTMLSelectElement.prototype = new HTMLElement()
HTMLSelectElement.prototype.constructor = HTMLSelectElement;


let h = new HTMLElement();
let s = new HTMLSelectElement([1, 2]);