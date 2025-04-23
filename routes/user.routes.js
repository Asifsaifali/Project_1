import  express from "express"
import { registerUser, getAllUser, getUserByEmail } from '../controller/User.controller.js'

const router = express.Router()

router.post("/register", registerUser)
router.get('/data', getAllUser)
router.get('/singleuser', getUserByEmail)



export default router