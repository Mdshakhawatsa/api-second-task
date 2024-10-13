import express from "express"
import userRoutes from "./app/module/user/user.route.js";

export const app  = express();

const errorHandeler = (err, req, res, next)=>{
    console.log(err)
    res.status(err.status || 500).json({
        success:false,
        message:err?.message || "something want wrong",
    })
    next()

}
app.use(express.json())
app.use(errorHandeler)
app.use("/api", userRoutes)
app.get('/', (req,res)=>{
    res.send('Server is running........')
})