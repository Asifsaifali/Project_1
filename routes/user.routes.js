import  express from "express"
import { registerUser, getAllUser, getUserByEmail, verifyUser } from '../controller/User.controller.js'

const router = express.Router()

router.post("/register", registerUser)
router.get('/data', getAllUser)
router.get('/singleuser', getUserByEmail)
router.get('/verify/:token',verifyUser)


export default router