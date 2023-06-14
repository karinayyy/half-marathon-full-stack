let name = prompt("Enter your name", "");

let regName = /^[A-Za-z\s'-]+$/;

if (name == "") {
    alert("Enter something");
    location.reload();
} else if (!name.match(regName)) {
    alert("Only enter letters");
    console.log("Only enter numbers");
}
function capitalizeName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

const names = name.split(" ");
const capitalizedNames = names.map(capitalizeName);
console.log(capitalizedNames);