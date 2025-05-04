import express from "express"
import database from "./config/db.js"
import UserRoute from "./routes/user.routes.js"
import cookieParser from "cookie-parser"

const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

database()

app.use("/api/v1/users",UserRoute)

app.listen(PORT, ()=>{
    console.log(`Server running at Port ${PORT}`);
    
})