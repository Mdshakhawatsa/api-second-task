import { model, Schema } from "mongoose";

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        enum:["admin", "customer"],
        default:"customer"
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }, 
},
{
    timestamps:true
})


const User = model("User", userSchema)
export default User