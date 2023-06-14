let animal = prompt("What animal is the superhero most similar to?", "");
let animalExp = /^[a-zA-Z]{1,20}$/;

if (animal == null || animal == "") {
    alert("Enter something");
} else if (!animal.match(animalExp)) {
    alert("Name must contain letters only, be one word and <=20!")
}

let gender = prompt("Is the superhero male or female? Leave blank if unknown or other", "");
let genderExp = /^(male|female|)$/i;

if (!gender.match(genderExp)) {
    alert("gender must contain male|female|blank only")
}


let age = prompt("How old is the superhero?", "");
let ageExp = /^[1-9][0-9]{1,4}$/;

if (age == null || age == "") {
    alert("Enter something");
} else if (!age.match(ageExp)) {
    alert("age must contain numbers only, cannot start with 0 and <=5!")
}

let res;
switch (gender) {
    case 'male':
        res = age < 18 ? 'boy' : 'man';
        break;
    case 'female':
        res = age < 18 ? 'girl' : 'woman';
        break;
    case '':
        res = age < 18 ? 'kid' : 'hero';
        break;
    default:
        console.log("Something went wrong");
}

alert("The superhero name is: " + animal + "-" + res);