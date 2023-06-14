const validator = {
    set(target, property, value) {
        if (property === 'age'){
            if (typeof value !== 'number') {
                throw new TypeError('The age is not an integer');
            }
            if (value < 0 || value > 200) {
                throw new RangeError('The age is invalid')
            }
        }
        console.log(`Setting value \'${value}\' to \'${property}\'`)
        target[property] = value;
    },
    get(target, property) {
        console.log(`Trying to access the property '${property}'`)
        return property in target ?
            target[property] :
            false;
    }
};

let person = new Proxy({}, validator);

console.log(person.gender);
person.age = 100;
// Setting value '100' to 'age'
console.log(person.age);
// Trying to access the property 'age'...
// 100
person.gender = "male";
// Setting value 'male' to 'gender'
// person.age = 'young';
// Uncaught TypeError: The age is not an integer
// person.age = 300;
// Uncaught RangeError: The age is invalid
console.log(person.gender);
