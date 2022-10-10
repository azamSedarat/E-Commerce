import express from 'express'
const app = express();
import * as dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT;



app.get("/",(req, res)=>{
    res.send("start project")
})


app.listen(PORT , ()=>{
    console.log(`app is listening on port ${PORT}`);
})