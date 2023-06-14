let calculationHistory = '...';
let screenMemory = '';
let isCalculationFinish = true;
let isInterestCheck = false;
let isCheckpoint = false;
let isSymbolCheck = true;
let calculationSymbols = ['+', '-', '*', '/', '=', '%', '^', '&#8730'];
let memoryStorage = [];

document.querySelector(".input").textContent = '0';

function pointCalculation() {
    if (isCheckpoint) {
        document.querySelector(".input").innerHTML += String(".");
        screenMemory += '' + String(".");
        console.log(`The current value of screenMemory is: ${screenMemory}`);
        isCheckpoint = false;
    }
}

function cleanCalculation() {
    memory = [];
    screenMem = '';
    document.querySelector('.input').innerHTML = '0';
    checkFinish = true;
}

function clearCalculator() {
    let temp = memoryStorage.length;
    for (let i = 0; i < temp; i++) {
        if (memoryStorage[i] === '') {
            memoryStorage.splice(i, 1);
            i--;
            temp--;
        } else if (i > 0 && memoryStorage[i - 1] === memoryStorage[i]) {
            memoryStorage.splice(i - 1, 1);
            i--;
            temp--;
        }
    }
}

function calculateInterestSym() {
    if (!isCheckpoint && !isSymbolCheck && !isInterestCheck) {
        memoryStorage.push(screenMemory);
        document.querySelector(".input").innerHTML += "%";
        screenMemory = '';
        memoryStorage.push("%");
        console.log('The contents of memoryStorage:', memoryStorage);
        console.log(`The current value of screenMemory is: ${screenMemory}`);
        isInterestCheck = true;
    }
}

function reverseSign() {
    screenMemory *= -1;
    document.querySelector(".input").innerHTML = '';
    document.querySelector(".input").innerHTML += screenMemory;
}

function readMemory() {
    document.querySelector(".input").innerHTML = String(calculationHistory);
    screenMemory = '' + String(calculationHistory);
    memoryStorage = [];
    memoryStorage.push(calculationHistory);
    console.log(`The current value of screenMemory is: ${screenMemory}`);
    isSymbolCheck = false;
    isInterestCheck = false;
}

function subtractFromMemory() {
    if (!isInterestCheck && calculationHistory !== '...') {
        symbolCalculation(1);
        updatedPressedNumber(calculationHistory);
        resultCalculation();
        memoryStorage = [];
        document.querySelector('.input').innerHTML = '0';
        isFinishCheck = true;
    }
}

function symbolCalculation(numb) {
    if (!isSymbolCheck) {
        if (!isCheckpoint) {
            isCheckpoint = true;
        }
        if (!isInterestCheck) {
            console.log(`The current value of screenMemory is: ${screenMemory}`);
            if (memoryStorage[memoryStorage.length - 1] !== screenMemory) {
                memoryStorage.push(screenMemory);
            }
        }
        document.querySelector('.input').innerHTML += calculationSymbols[numb];
        memoryStorage.push(calculationSymbols[numb]);
        screenMemory = '';
        console.log(`The contents of memoryStorage are: ${memoryStorage}`);
        isSymbolCheck = true;
        isInterestCheck = false;
    }
}

function connectMemory() {
    if (!isInterestCheck && calculationHistory !== '...') {
        symbolCalculation(0);
        updatedPressedNumber(calculationHistory);
        resultCalculation();
    }
}

function cleanMemory() {
    calculationHistory = '...';
    document.querySelector(".calculationHistory").textContent = '...';
}

function calculateRoot() {
    if (!isCheckpoint && !isSymbolCheck && !isInterestCheck) {
        memoryStorage.push(screenMemory);
        document.querySelector(".input").innerHTML += "&#8730";
        screenMemory = '';
        memoryStorage.push("&#8730");
        console.log(`Current memory contents: ${memoryStorage}`);
        console.log(`Current value of screenMemory: ${screenMemory}`);
        isInterestCheck = true;
    }
}

function calculateFactorial() {
    if (!isCheckpoint && !isSymbolCheck && !isInterestCheck) {
        memoryStorage.push(screenMemory);
        document.querySelector(".input").innerHTML += "!";
        screenMemory = '';
        memoryStorage.push("!");
        console.log(`Current memory contents: ${memoryStorage}`);
        console.log(`Current value of screenMemory: ${screenMemory}`);
        isInterestCheck = true;
    }
}


function resultCalculation() {
    if (!isCheckpoint) {
        memoryStorage.push(screenMemory);
        let countPer = 0;
        let countFac = 0;
        let countRoot = 0;
        for (let i = 0; i < memoryStorage.length; i++) {
            if (memoryStorage[i] === '%') {
                countPer++;
            }
            if (memoryStorage[i] === '!') {
                countFac++;
            }
            if (memoryStorage[i] === '&#8730') {
                countRoot++;
            }
        }
        for (let i = 0; i < memoryStorage.length; i++) {
            if (countPer === 0 && countFac === 0 && countRoot === 0) {
                if (memoryStorage[i] === '+') {
                    clearCalculator();
                    let result = Number(memoryStorage[i - 1]) + Number(memoryStorage[i + 1]);
                    memoryStorage.splice(i - 1, 2);
                    memoryStorage[i - 1] = result;
                    i = i - 1;
                    document.querySelector('.input').innerHTML = result;
                    screenMemory = result;
                    console.log(`Current memory contents: ${memoryStorage}`);
                } else if (memoryStorage[i] === '-') {
                    clearCalculator();
                    let result = Number(memoryStorage[i - 1]) - Number(memoryStorage[i + 1]);
                    memoryStorage.splice(i - 1, 2);
                    memoryStorage[i - 1] = result;
                    i = i - 1;
                    document.querySelector('.input').innerHTML = result;
                    screenMemory = result;
                    console.log(`Current memory contents: ${memoryStorage}`);
                } else if (memoryStorage[i] === '*') {
                    clearCalculator();
                    let result = Number(memoryStorage[i - 1]) * Number(memoryStorage[i + 1]);
                    memoryStorage.splice(i - 1, 2);
                    memoryStorage[i - 1] = result;
                    i = i - 1;
                    document.querySelector('.input').innerHTML = result;
                    screenMemory = result;
                    console.log(`Current memory contents: ${memoryStorage}`);
                } else if (memoryStorage[i] === '/') {
                    clearCalculator();
                    let result = Number(memoryStorage[i - 1]) / Number(memoryStorage[i + 1]);
                    memoryStorage.splice(i - 1, 2);
                    memoryStorage[i - 1] = result;
                    i = i - 1;
                    document.querySelector('.input').innerHTML = result;
                    screenMemory = result;
                    console.log(`Current memory contents: ${memoryStorage}`);
                } else if (memoryStorage[i] === '^') {
                    clearCalculator();
                    let result = Math.pow(memoryStorage[i - 1], memoryStorage[i + 1]);
                    memoryStorage.splice(i - 1, 2);
                    memoryStorage[i - 1] = result;
                    i = i - 1;
                    document.querySelector('.input').innerHTML = result;
                    screenMemory = result;
                    console.log(`Current memory contents: ${memoryStorage}`);
                }
            } else if (memoryStorage[i] === '%') {
                clearCalculator();
                let result = Number(memoryStorage[i - 1]) / 100;
                memoryStorage.splice(i, 1);
                memoryStorage[i - 1] = result;
                i = i - 1;
                document.querySelector('.input').innerHTML = result;
                screenMemory = result;
                console.log(`Current memory contents: ${memoryStorage}`);
                countPer--;
                if (countPer === 0) {
                    i = 0;
                }
            } else if (memoryStorage[i] === '!') {
                clearCalculator();
                let result = 1;
                console.log(`Current memory contents: ${memoryStorage[i-1]}`);

                for (let j = memoryStorage[i - 1]; j > 0; j--) {
                    console.log(result);
                    result *= j;
                }
                memoryStorage.splice(i, 1);
                memoryStorage[i - 1] = result;
                i = i - 1;
                document.querySelector('.input').innerHTML = result;
                screenMemory = result;
                console.log(`Current memory contents: ${memoryStorage}`);
                countFac--;
                if (countFac === 0) {
                    i = 0;
                }
            } else if (memoryStorage[i] === '&#8730') {
                clearCalculator();
                let result = Math.sqrt(memoryStorage[i - 1]);
                memoryStorage.splice(i, 1);
                memoryStorage[i - 1] = result;
                i = i - 1;
                document.querySelector('.input').innerHTML = result;
                screenMemory = result;
                console.log(`Current memory contents: ${memoryStorage}`);
                countRoot--;
                if (countRoot === 0) {
                    i = 0;
                }
            }
        }
        clearCalculator();
        console.log(`Current memory contents: ${memoryStorage}`);
        calculationHistory = memoryStorage[0];
        document.querySelector(".calculationHistory").innerHTML = calculationHistory;
        console.log(`Calculation history: ${calculationHistory}`);
        isCheckpoint = true;
    }
}

function updatedPressedNumber(numb) {
    if (isCalculationFinish) {
        document.querySelector(".input").innerHTML = '';
        isCalculationFinish = false;
    }
    document.querySelector(".input").innerHTML += String(numb);
    screenMemory += '' + String(numb);
    console.log('Value of screenMemory:', screenMemory);
    isSymbolCheck = false;
    isInterestCheck = false;
    isCheckpoint = false;
}
