// Zadaca 1

let hasCoffe = true
let hasTea = false
let hasMilk = true

// Дали ученикот има чај или млеко?
let has = hasTea || hasMilk
console.log(has)

// Дали ученикот пие и кафе и чај?
let drink = hasCoffe && hasTea
console.log(drink)

// Дали е вистина дека студентот нема чај?
let noTea = !hasTea 
console.log(noTea)

// Дали ученикот пие или кафе или млеко, но не и двете?
let drink1 = (hasCoffe || hasMilk) && (!hasCoffe && !hasMilk)
console.log(drink1)

// Дали е вистина дека ученикот има или чај и млеко, или кафе и чај?
let teaOrMilk = (hasTea && hasMilk) || (hasCoffe && hasTea)
console.log(teaOrMilk)

// Дали ученикот не пие ниту кафе ниту чај?
let notDrink = !hasCoffe && !hasTea
console.log(notDrink)





