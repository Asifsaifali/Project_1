import express from "express"
import database from "./config/db.js"
import router from "./routes/user.routes.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.send("Hello boy")
})

database()

app.use("/api/v1/users",router)

app.listen(8000, ()=>{
    console.log("POrt at 8000");
    
})