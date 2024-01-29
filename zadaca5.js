
function printNumber (number){
    if(number % 3 === 0 && number % 5 === 0){
        console.log("FrizzBuZZ")
    }else if(number % 3 === 0){
        console.log("Frizz")
    }else if (number % 5 === 0){
        console.log("Buzz")
    }else{
        console.log(number);
    }
}

printNumber (23)