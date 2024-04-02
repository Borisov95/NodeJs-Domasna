const { list, add, remove } = require("../models/article");

const getForm = (req, res) => {
    res.render("formular");
}

const postForm = async(req, res) => {
    let studentData = {
        ime: req.body.ime,
        prezime: req.body.prezime,
        prosek: req.body.prosek
    };
    await add(studentData);
    res.redirect("/form"); 
}

const getGrocery = async (req, res) => {
    let data = await list();
    res.render("students", { data });
};

const getDelete = async(req, res) => {
    console.log("req query", req.query);
    await remove(req.query.studentIndex); 
    res.redirect("/students");
}

module.exports = {
    getForm,
    postForm,
    getGrocery,
    getDelete
}