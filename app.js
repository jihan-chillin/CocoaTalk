// returns
const calculator = {
    plus : function(a,b){
        return(a+b);
    },
    minus : function(a,b){
        return(a-b);
    },
    multi : function(a,b){
        return(a*b);
    },
    divide : function(a,b){
        return(a/b);
    },
    power : function(a,b){
        return(a**b);
    }
}

calculator.plus(10,5);
calculator.minus(10,2);
calculator.multi(10,2);
calculator.divide(10,2);
calculator.power(10,2);

const plusResult = calculator.plus(2,3);
console.log("더하기 값 : "+plusResult);


const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);