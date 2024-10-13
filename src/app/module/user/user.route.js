import express from "express";
import userController from "./user.controller.js";

const router = express.Router()


router.post('/users', userController.userSignUpDB)
router.get ('/users/:id',userController.getSingleUser)
router.get("/users", userController.getAllUser)
router.put("/users/:id", userController.updateUser)
router.delete("/users/:id", userController.deleteUser)


const userRoutes = router


export default userRoutes