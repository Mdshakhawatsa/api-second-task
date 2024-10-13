import userServices from "./user.service.js"

const userSignUpDB = async(req, res, next)=>{
    try {
        const result = await userServices.userSignUpDB(req.body)
        res.status(200).json({
            success:true,
            message:"User created successfully",
            data:result
        })
        
    } catch (error) {
        next(error)
    }
}

const getSingleUser = async(req, res, next)=>{
    try {
        const result = await userServices.getSingleUser(req.params.id)
        res.status(200).json({
            success:true,
            message:"User retrieved successfully",
            data:result
        })
        
    } catch (error) {
        next(error)
    }
} 

const getAllUser = async (req, res, next) => {
    try {
      const result = await userServices.getAllUser(); 
      res.status(200).json({
        success: true,
        message: "All users retrieved successfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };
  

const updateUser = async (req, res, next) => {
    try {
      const result = await userServices.updateUser(req.params.id , req.body);
      res.status(200).json({
        success: true,
        message: "users update successfully",
        data: result, 
      });
    } catch (error) {
      next(error);
    }   
  };

const deleteUser = async (req, res, next) => {
    try {
      const result = await userServices.deleteUser(req.params.id);
      res.status(200).json({
        success: true,
        message: "users delete successfully",
        data: result, 
      });
    } catch (error) {
      next(error);
    }   
  };



const userController = {
    userSignUpDB,
    getSingleUser,
    getAllUser,
    updateUser,
    deleteUser
}


export default userController