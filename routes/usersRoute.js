import {Router} from "express"
import {getAllUsers,getSingleUser,addNewUser,updateUser,deleteUser,addMovieToUser,loginUser} from "../controllers/userController.js"
import {auth} from "../middleware/auth.js"
import { rules } from "../middleware/validator.js"

const router=Router()


router.get("/",getAllUsers)
router.post("/",rules,addNewUser)
router.get("/fav/:id",auth,addMovieToUser)
router.post("/login", loginUser)
router.get("/:id", getSingleUser )
router.patch("/:id",updateUser)
router.delete("/:id",deleteUser)

export default router