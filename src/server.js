import mongoose from "mongoose";
import { app } from "./app.js";
let server;

const port = 5000


const main = async()=>{
   try {
    await mongoose.connect('mongodb://localhost:27017/resturent');
    console.log("connected")
    server = app.listen(port, () =>{
        console.log(`Example app listaning on port ${port}`)
    })
  
   } catch (error) {
    console.log(error)
    
   } 
}

main()