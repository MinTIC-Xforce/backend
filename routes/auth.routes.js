import { Router } from "express";
import { getUser, getUsers, createUser } from '../controllers/auth.controller.js'

const router = Router();

router.get('/user/:username', getUser);
router.get('/users', getUsers);
router.post('/user', createUser);


export default router;