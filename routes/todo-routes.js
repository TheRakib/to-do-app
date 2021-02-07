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



module.exports = router;