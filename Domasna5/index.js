const http = require("http")
const url = require("url")

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === "/"){
        res.write("Home Page")
    }
    if(url === "/imePrezimePol"){
        res.end("Vane Borisov Male");
    }
    if(url === "/title"){
        res.write("<html><head><title>Server</title></head></html>")
    }
    if(url === "/header"){
        res.write("Ova e Header-ot!");
    }
    return res.end();
})

server.listen(8080);


////

const handlerCalculator = (req, res) => {
    const url = req.url;

    const [_, operacija, num1, num2] = req.url.split("/");

    const stringNumber = "1";
    Number(stringNumber); 

    const numberNumber = 1;
    numberNumber.toString(); 
    let result;

    switch(operacija){
        case "sobiranje":
            result = Number(num1) + Number(num2);
            res.end(`${result}`);
            break;
        case "odzemanje":
            result = Number(num1) - Number(num2);
            res.end(`${result}`);
            break;
        case "mnozenje":
            result = Number(num1) * Number(num2);
            res.end(`${result}`);
            break;
        case "delenje":
            result = Number(num1) / Number(num2);
            res.end(`${result}`);
            break;
        case "modul":
            result = Number(num1) % Number(num2);
            res.end(`${result}`);
            break;
        case "kvadrat":
            result = num1 * num1;
            res.end(`${result}`);
            break;
        case "kub":
            result = num1 * num1 * num1;
            res.end(`${result}`);
        break;   
        default:
            res.end("Nepoznata operacija");
    }

}

const newServer = http.createServer(handlerCalculator);

newServer.listen(8000);