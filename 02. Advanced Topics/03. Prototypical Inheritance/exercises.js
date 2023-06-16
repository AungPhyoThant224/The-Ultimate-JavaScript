/**
 * Prototypical Inheritance
 */

function HtmlElement() {
    this.click = function () {
        console.log('Clicked');
    }
}
HtmlElement.prototype.focus = function () {
    console.log('Focused');
}

function HtmlSelectElement(items = []) {
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

    this.render = function () {
        return `<select>${this.items.map(item =>
            `<option>${item}</option>`
        ).join('')}</select>`
    }
}
// HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
// HtmlSelectElement.prototype.click = function () {
//     HtmlElement.prototype.click();
// }

HtmlSelectElement.prototype = new HtmlElement()
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

let h = new HtmlElement();
let s = new HtmlSelectElement([1, 2]);

/**
 * Polymorphism
 */
function HtmlImageElement(src) {
    this.src = src;
    this.render = function () {
        return `<img src=${this.src} />`
    }
}
HtmlImageElement.prototype = new HtmlElement()
HtmlImageElement.prototype.constructor = HtmlImageElement;

let elements = [
    new HtmlSelectElement([1, 2]),
    new HtmlImageElement('http://')
];

for (let element of elements) {
    console.log(element.render());
}