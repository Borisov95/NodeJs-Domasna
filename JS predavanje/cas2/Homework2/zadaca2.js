// Zadaca 2

// a.

// 90 - 100: Grade: А
// 80 - 89: Grade: B
// 70 - 79: Grade: C
// 60 - 69: Grade: D
// 0 - 59: Grade: F

let score = 95

if (score >= 90 && score <= 100){
    console.log("Grade: A")
}else if (score >= 80 && score <= 89){
    console.log("Grade: B")
}else if (score >= 70 && score <= 79){
    console.log("Grade: C")
}else if (score >= 60 && score <= 69){
    console.log("Grade: D")
}else if (score >=0 && score <= 59){
    console.log("Grade: F")
}else {
    console.log("Invalid score! Please enter a score between 0 and 100")
}

// b. 

let dayNumber = 4

switch(dayNumber){
    case 1:
        console.log("Monday")
    break
    case 2:
        console.log("Tuesday")
    break
    case 3:
        console.log("Wednesday")
    break
    case 4:
        console.log("Thursday")
    break
    case 5:
        console.log("Friday")
    break
    case 6:
        console.log("Saturday")
    break
    case 7:
        console.log("Sunday")
    break
    default:
        console.log("Invalid day number. Please enter a number between 1 and 7")
}