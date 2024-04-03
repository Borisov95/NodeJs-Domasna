const { add, list, remove } = require("../models/article");

const getForm = (req, res) => {
    res.render("formular");
}

const postForm = async(req, res) => {
    let articleData = {
        name : req.body.name,
        manufacturer: req.body.manufacturer,
        quantity: req.body.quantity,
        dayslefttouse: req.body.dayslefttouse,
        placewhereavailable: req.body.placewhereavailable
    };
    await add(articleData);
    res.redirect("/article");
}

const getArticle = async(req, res) => {
    let data = await list();
    res.render("article", { data });
}

const getDelete = async (req, res) => {
    await remove(req.query.articleIndex);
    res.redirect("/article");
}

module.exports = {
    getForm,
    postForm,
    getArticle,
    getDelete
}