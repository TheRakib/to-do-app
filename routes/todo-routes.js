const express = require("express");
const ToDo = require("../models/todo");

const router = express.Router();



router.get("/", async (req, res) => {
    res.redirect("/1");
});


router.get("/:page", async (req, res) => {
    let limit = 7;
    let page = req.params.page || 1;
    
    let sortDate = req.query.sortDate;
    let sortAZ = req.query.sortAZ;
    let sort = {}

    if (sortDate) {
        sort.created = sortDate;
    } 
    else if (sortAZ) {
        sort.name = sortAZ;
    }

    try {
        const todos = await ToDo.find().collation({locale: "en"}).sort(sort).skip((limit * page) - limit).limit(limit);
        const count = await ToDo.countDocuments();

        res.render("index.ejs", {data: todos, totalPages: Math.ceil(count / limit), currentPage: page});
    }
    catch (err) {
        console.log(err);
    }
});


router.post("/", async (req, res) => {
    const task = new ToDo ({name: req.body.content});

    await task.save();

    res.redirect("/");
});


router.get("/edit/:id", async (req, res) => {
    const todo = await ToDo.findOne({_id: req.params.id});

    res.render("edit.ejs", {todo: todo});
});


router.post("/edit", async (req, res) => {
    await ToDo.updateOne(
        {_id: req.body.id}, 
        {name: req.body.name}
    );

    res.redirect("/");
});


router.get("/delete/:id", async (req, res) => {
    await ToDo.deleteOne({_id:req.params.id});

    res.redirect("/");
});



module.exports = router;