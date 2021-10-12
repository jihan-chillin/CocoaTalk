// 1. string, number
const a = 5;
const b = 2;
let name = "jihan";

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hi "+name);

name = "kojub";
console.log("what up? "+name);

// 2. boolean
const amIFat = false;
console.log(amIFat);

// 3. Arrays
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(daysOfWeek);
// Get Item from Array
console.log(daysOfWeek[0]);
// Add one more dat to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);

const toBuy = ["potato", "tomato"];
toBuy.push("pizza");
console.log(toBuy[2]);

// 4. Object
const playerName = "jihan";
const playerPoints = 121212;
const playerCute = true;
const playerFat = "little bit";

const player = {
    name : "jihan",
    points : 10, 
    cute : true,
    fat : "little bit"
}

console.log(player.name);
console.log(player["points"]);
player.lastName = "kim";
console.log(player);