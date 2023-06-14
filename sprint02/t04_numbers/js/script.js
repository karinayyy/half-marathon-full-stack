function checkDivision(beginRange, endRange) {
    for (let i = beginRange; i <= endRange; i++) {
        let description = "";

        if (i % 2 === 0) {
            description += `${i} is even`;
        }

        if (i % 3 === 0) {
            if (description == ""){
                description += `${i} is a multiple of 3`;
            } else if (description !== "") {
                description += `, is a multiple of 3`;
            }
        }

        if (i % 10 === 0) {
            if (description == ""){
                description += `${i} is a multiple of 10`;
            } else if (description !== "") {
                description += `, is a multiple of 10`;
            }
        }

        if (description == "") {
            console.log(i + " -")
        } else {
            console.log(description || `// ${i}`);
        }
    }
}

let firstNum = prompt("Enter first num", "");
let secondNum = prompt("Enter second num", "");

let numExp = /^[1-9]$/;

if (firstNum == "" || secondNum == "") {
    alert("Enter something");
    location.reload();
} else if (!firstNum.match(numExp) || !secondNum.match(numExp)) {
    alert("Enter only numbers");
    location.reload();
} else if (firstNum > secondNum) {
    alert("first number must be less than second");
    location.reload();
}

checkDivision(firstNum || 1, secondNum || 100);