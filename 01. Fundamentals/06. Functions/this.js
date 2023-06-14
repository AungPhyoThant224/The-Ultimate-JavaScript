/**
 * 1. method -> object
 * 2. function -> global (window, global)
 *    With the regular function this references the global object.
 *    But if you called the function with new operator this will reference
 *    the new empty object.
 */

/**
 * Example 1
 */
const video = {
    title: 'a',
    play() {
        console.log(this);
    }
}
video.play();

/**
 * Example 2
 */
const tags = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    getTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }, this)
    }
}
tags.getTags();

/**
 * Example 3
 */
function videoPlay() {
    console.log(this);
}
videoPlay();

/**
 * Example 3
 */
function VideoPlay(title) {
    this.title = title;
    console.log(this);
}
let play = new VideoPlay('b');