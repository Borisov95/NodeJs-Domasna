// 1. write file with fs -> core module


const fs = require("fs")

function writeFile(fullname, data){
    fs.writeFile(fullname, data, (err) => {
        if(err){
            console.log(err)
        }else{
            console.log("File has been successfully written.");
        }
    })
}

writeFile("textdoc.txt", "Vane Borisov")



