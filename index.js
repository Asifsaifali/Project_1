import express from "express"
import database from "./config/db.js"
import UserRoute from "./routes/user.routes.js"

const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({extended:true}))


database()

app.use("/api/v1/users",UserRoute)

app.listen(PORT, ()=>{
    console.log("Server runng at Port 8000");
    
})