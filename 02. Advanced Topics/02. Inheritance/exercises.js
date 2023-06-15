function StopWatch() {
    let started = false;
    let startTime;
    Object.defineProperty(this, 'started', {
        get: function () {
            return started;
        },
        set: function (value) {
            started = value;
        }
    })
    Object.defineProperty(this, 'startTime', {
        get: function () {
            return startTime;
        },
        set: function (date) {
            startTime = date;
        }
    })
    this.duration = function () {
        if (typeof startTime === 'undefined') {
            throw new Error("Stopwatch did not start yet.");
        }
        return (Date.now() - startTime) / 1000;
    }
}

StopWatch.prototype.start = function () {
    if (this.started === true) {
        throw new Error("Stopwatch Already Started.");
    }
    this.started = true;
    this.startTime = Date.now();
}

StopWatch.prototype.stop = function () {
    if (this.started === false) {
        throw new Error("Stopwatch did not start yet.");
    }
    this.started = false;
    this.startTime = undefined;
}

StopWatch.prototype.reset = function () {
    this.started = false;
    this.startTime = undefined;
}
