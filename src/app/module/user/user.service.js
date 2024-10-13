import User from "./user.model.js"

const userSignUpDB = async(data) =>{
    const result = await User.create(data)
    return result;
}
//single user
const getSingleUser = async(id)=>{
const result = await User.findById(id)
return result;
}
//get all
const getAllUser = async ()=>{
    const result = await User.find();
    return result;
}
//update
const updateUser = async(id, data)=>{
    const result = await User.findByIdAndUpdate(id,data,{ new:true });
    return result;
  };
// delete
const deleteUser = async(id)=>{
    const result = await User.deleteOne({_id : id});
    return result;
}
  


const userServices = {
    userSignUpDB,
    getSingleUser,
    getAllUser,
    updateUser,
    deleteUser
}
export default userServices; 