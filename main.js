const mongoose = require('mongoose');
const express = require('express');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
const routes = require("./routes/todo-routes");

const app = express();

dotenv.config();

app.use(express.static(__dirname + "/public"));

app.use(bodyparser.urlencoded({extended: false}));

app.use("/", routes);

app.set("view engine", "ejs");


mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    app.listen(process.env.PORT, () => {
        console.log("Server is up and running");
    });
});