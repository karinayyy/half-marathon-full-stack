class HardWorker {
    constructor() {
        this._name = '';
        this._age = 0;
        this._salary = 0;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (1 <= value && value < 100)
            this._age = value;
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {
        if (100 <= value && value < 10000)
            this._salary = value;
    }

    toObject() {
        return {
            name: this._name,
            age: this._age,
            salary: this._salary
        };
    }
}
