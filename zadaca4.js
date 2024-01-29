// Zadaca 4

// a.

let age = 28
if(age >= 21){
    console.log("Mozam legalno da kupam alkohol i da glasam")
}else if(age >= 18){
    console.log("Mozam da glasam")
} else{
    console.log("Ne mozam nitu da kupam alkohol, nitu da glasam")
}

// b. - Tuka imam dve resenija

function daysInMonth(month) {
    switch (month) {
        case "January":
            console.log("31");
            break;
        case "February":
            console.log("28");
            break;
        case "March":
            console.log("31");
            break;
        case "April":
            console.log("30");
            break;
        case "May":
            console.log("31");
            break;
        case "June":
            console.log("30");
            break;
        case "July":
            console.log("31");
            break;
        case "August":
            console.log("31");
            break;
        case "September":
            console.log("30");
            break;
        case "October":
            console.log("31");
            break;
        case "November":
            console.log("30");
            break;
        case "December":
            console.log("31");
            break;
        default:
            console.log("Invalid input");
    }
}


function daysInMonth (month){
    switch (month){
        case "January":
        case "March":
        case "May":
        case "July":
        case "August":
        case "October":
        case "December":
        console.log("31")
        break;
        case "April":
        case "June":
        case "September":
        case "November":
        console.log("30")
        break;
        case "February":
        console.log("28")
        break
    }
}

daysInMonth("February")

// v.

let temperature = 50
if (temperature > 30){
    console.log("Zesko")
}else if (temperature > 20){
    console.log("Toplo")
}else if(temperature >=15 && temperature <= 20){
    console.log("Umereno")
}else{
    console.log("Ladno")
}
    