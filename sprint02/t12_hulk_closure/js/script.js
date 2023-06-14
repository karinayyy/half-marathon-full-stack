function concat(str1, str2) {
    concated.count = 0;
    function concated(str) {
        concated.count++;
        if (typeof str === 'string') {
            return str1 + ' ' + str;
        } else {
            let userInput = prompt('Enter a string:');
            return str1 + ' ' + userInput;
        }
    }
    if (typeof str2 === 'undefined') {
        return concated;
    } else {
        return concated(str2);
    }
}
