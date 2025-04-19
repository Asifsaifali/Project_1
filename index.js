import express from "express"
import database from "./config/db.js"
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.send("Hello boy")
})

database()

app.listen(8000, ()=>{
    console.log("POrt at 8000");
    
})