const express = require("express");
const app = express();

const data = {
    cars:  ["Mercedes", "Toyota", "Ferrari"],
    books: ["1984", "Harry Potter"],
    cities: ["New York", "Paris", "Moscow"]
}
app.get("/", (req, res) => {
    res.send(data)
})

app.get("/cars", (req, res) => {
    res.send(data.cars)
});

app.get("/books", (req, res) => {
    res.send(data.books)
});

app.get("/cities", (req, res) => {
    res.send(data.cities)
});


app.listen(8080, (err) => {
    if(err) console.log("Error", err)
    console.log("Server listening on port 8080")
})