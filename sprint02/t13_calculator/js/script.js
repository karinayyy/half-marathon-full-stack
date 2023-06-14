function Calculator() {
    this.result;
    this.init = function (num) {
        this.result = num;
        return this;
    }
    this.add = function (num) {
        this.result += num;
        return this;
    }
    this.mul = function (num) {
        this.result *= num;
        return this;
    }
    this.div = function (num) {
        this.result /= num;
        return this;
    }
    this.sub = function (num) {
        this.result -= num;
        return this;
    }
    this.alert = function () {
        setTimeout(() => alert(this.result), 5000);
        return this;
    }
}