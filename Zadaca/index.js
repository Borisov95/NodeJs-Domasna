const express = require("express");

const {
    getForm,
    postForm,
    getGrocery,
    getDelete
} = require("./controllers/formular")

const app = express()

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/form", getForm);
app.post("/form", postForm);
app.get("/grocery", getGrocery);
app.get("/delete", getDelete);

app.listen(8000, (err) => {
    if (err) console.log(err);
    console.log("Server started at port: 8000");
})