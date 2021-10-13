// function 
function sayHello(name, age){
    console.log("Hello my nam is "+name+" and i'm "+age);
}

sayHello("jihan", 20);
sayHello("starbucks", 10);
sayHello("americano", 30);

function plus(firstNum,secondNum){
    console.log(firstNum + secondNum);
}

function divide(a, b){
    console.log(a/b);
}

plus(8, 60);
divide(60, 12);

// object + function
const player = {
    name : "jihan", 
    sayHello : function(otherPersonsName){
        console.log("hello! "+otherPersonsName);
    }
}

console.log(player.name);
player.sayHello("buya");
