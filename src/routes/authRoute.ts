import {Router} from 'express'

const router = Router();


router.post('/auth/register', () => console.log("Register Route"))
router.post('/auth/signIn', () => console.log("Sign In Route"))
router.post('/auth/logout',()=>console.log("Logout Route"))


export default router;