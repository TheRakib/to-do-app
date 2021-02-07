const express = require("express");
const ToDo = require("../models/todo");

const router = express.Router();



router.get("/", async (req, res) => {
    const todos = await ToDo.find();

    res.render("index.ejs", {data: todos});
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