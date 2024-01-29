// Zadaca 1 - a. i b. resenie

let globalNum = 10;

function checkScope() {
    let localNum = globalNum
    console.log (globalNum)
    console.log(globalNum === localNum)
}

checkScope();


// v. resenie


if(true){
    let blockNum = 10;
    }

console.log(typeof blockNum)






