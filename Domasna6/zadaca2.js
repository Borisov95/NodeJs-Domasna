const express = require("express");
const app = express();


const data = {
    cars:  ["Mercedes", "Toyota", "Ferrari"],
    books: ["1984", "Harry Potter"],
    cities: ["New York", "Paris", "Moscow"]
}

app.get('/cars',(req,res)=>{
    const {query} = req.query;
    if (data.cars[query]) {
        res.send(data.cars[query]);
    } else {
        res.status(400).send("Car not found");
    }
});

app.get('/books',(req,res)=>{
    const {query} = req.query;
    if (data.books[query]) {
        res.send(data.books[query]);
    } else {
        res.status(400).send("Books not found");
    }
});

app.get('/cities',(req,res)=>{
    const {query} = req.query;
    if (data.cities[query]) {
        res.send(data.cities[query]);
    } else {
        res.status(400).send("Cities not found");
    }
});


app.listen(8001, (err) => {
    console.log("Server running on port 8001");
});