function stopWatch() {
    let started = false;
    let startTime;
    this.start = function () {
        if (started === true) {
            throw new Error("Stopwatch Already Started.");
        }
        started = true;
        startTime = Date.now();
    }
    this.stop = function () {
        if (started === false) {
            throw new Error("Stopwatch did not start yet.");
        }
        started = false;
        startTime = undefined;
    }
    this.duration = function () {
        if (typeof startTime === 'undefined') {
            throw new Error("Stopwatch did not start yet.");
        }
        return (Date.now() - startTime) / 1000;
    }
    this.reset = function () {
        started = false;
        startTime = undefined;
    }
}
