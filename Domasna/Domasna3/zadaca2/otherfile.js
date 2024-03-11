// 2. make a function in another file (Simple hello world) and use it in another file -> local module

const sayHello = (text, err) => {
    if(typeof text === "string"){
        console.log(text)
    }else{
        console.log(err)
    }
}

module.exports = {
    sayHello,
}