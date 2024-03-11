// 3. find whatever package (module) on npmjs.com and use -> third-party module

let moment = require("moment")

let myData = new Date()
let momentData = moment(myData).format('MMMM Do YYYY, h:mm:ss a');  

console.log(momentData)




