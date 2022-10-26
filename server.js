const path = require("path")
const db = require("./models/index")
const express = require('express')
const app = require("./routes");
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "pug")


app.listen(PORT, ()=>{
    console.log(`app is listening on port ${PORT}`);
})