import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const database = ()=>{
  const conn = mongoose.connect(process.env.MONGO_URL)
  .then(()=>{
    console.log("Connected to mongodb Database");
    
  })
  .catch((e)=>{
    console.log("Have some kind of error",e);
    
  })

}

export default database;