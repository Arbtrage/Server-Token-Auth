import {Router} from 'express'
import { logOut,register,login,refreshToken} from '../controllers'
const router = Router();


router.post('/auth/register', register)
router.post('/auth/login', login)
router.delete('/auth/logout', logOut)
router.post('/auth/refresh',refreshToken)


export default router;