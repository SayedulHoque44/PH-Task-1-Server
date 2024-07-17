
import express from "express"
import { creatUser} from "./user.services"

const router = express.Router()

router.post('/',creatUser)




export  const UserRoutes = router