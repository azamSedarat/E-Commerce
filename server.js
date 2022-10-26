const path = require("path")
const db = require("./models/index")
const express = require('express')
const app = require("./routes");
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT;
app.use(express.static(path.join(__dirname, "public")))

app.set("view engine", "pug")

app.get("/",(req, res)=>{
    res.send("start project")
})


app.listen(PORT, ()=>{
    console.log(`app is listening on port ${PORT}`);
})