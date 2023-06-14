const guestList = new Set();
guestList.add("Guest One");
guestList.add("Guest Two");
guestList.add("Guest Three");

console.log(guestList.has("Guest One") ? 'is invited' : 'is not invited');
console.log(guestList.has("Guest Four") ? 'is invited' : 'is not invited');
guestList.delete("Guest One");
guestList.forEach(g => console.log(g));


const menu = new Map();
menu.set("menu item 1", "2134");
menu.set("menu item 2", "3451");
menu.set("menu item 3", "4312");
menu.set("menu item 4", "2341");

for (const [key, value] of menu) {
    console.log(`${key} costs ${value}`);
}


// bankVault: WeakMap
const bankVault = new WeakMap();
function BankVault() {
    const box = {
        credentials: "1234",
        contents: "Red Coin",
    };
    bankVault.set(this, box);
}
const myVault = new BankVault();
const box = bankVault.get(myVault);

console.log(box.contents); // Output: Red Coin
box.contents = "Green Coin";
console.log(box.contents); // Output: Green Coin

// coinCollection: WeakSet
const coinCollection = new WeakSet();
const coins = {
    coin1: { name: "Green Coin", id: 1 },
    coin2: { name: "Red Coin", id: 2 },
    coin3: { name: "Blue Coin", id: 3 },
};

Object.values(coins).forEach((coin) => coinCollection.add(coin));

console.log(coinCollection.has(coins.coin1)); // true
console.log(coinCollection.has({ name: "Green Coin", id: 1 })); // false

Object.keys(coins).forEach((key) => {
    const coin = coins[key];
    console.log(coin);
});

console.log(coinCollection.size); // undefined