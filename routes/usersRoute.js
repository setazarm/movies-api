import {Router} from "express"
import {getAllUsers,getSingleUser,addNewUser,updateUser,deleteUser} from "../controllers/userController.js"
const router=Router()


router.get("/",getAllUsers)
router.post("/",addNewUser)
//router.post("/login", loginUser)
router.get("/:id", getSingleUser )
router.patch("/:id",updateUser)
router.delete("/:id",deleteUser)
export default router