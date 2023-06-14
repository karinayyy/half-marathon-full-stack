class Timer {
    constructor(title, delay, stopCount) {
        this._title = title;
        this._delay = delay;
        this._stopCount = stopCount;
        this._intervalId = null;
    }
    start() {
        console.log(`Timer ${this._title} started (delay=${this._delay},  stopCount=${this._stopCount})`);
        this._intervalId = setInterval(() => this.tick(), this._delay);
    }
    tick() {
        console.log(`Timer ${this._title} Tick! | cycles left ${this._stopCount}`);
        this._stopCount--;
        if (this._stopCount === 0) {
            this.stop();
        }
    }
    stop() {
        console.log(`Timer ${this._title} stopped`);
        clearInterval(this._intervalId);
    }
}

function runTimer(title, delay, stopCount) {
    const timer = new Timer(title, delay, stopCount);
    timer.start();
}
