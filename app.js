// conditionals
const age = parseInt(prompt("How old are you?")); 
console.log(typeof age); // 모두 string값으로 나옴

// "15" ==> 15
console.log(typeof "15", typeof parseInt("15"));
console.log(isNaN(age));

if(isNaN(age)){
    console.log("please write a number");
}
else if(age <18){
    console.log("You're too young to buy this");
}
else{
    console.log("You can drink");
}

true || true === true
false || true === true;
false || false === false;

true && true === true;
true && false === false;
false && false === false;