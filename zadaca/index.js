const express = require("express");
const app = express();

const {
    getForm,
    postForm,
    getArticle,
    getDelete,
} = require("../zadaca/controllers/form")

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

app.get("/form", getForm);
app.post("/form", postForm);
app.get("/article", getArticle);
app.get("/delete", getDelete);

app.listen(8000, (err) => {
    if(err) console.log(err);
    console.log("Server running at port 8000")
})