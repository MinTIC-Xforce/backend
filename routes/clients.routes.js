import { Router } from "express";
import { getClients, createClients } from '../controllers/clients.controller.js'

const router = Router();

router.get('/clients', getClients);
router.post('/clients', createClients);


export default router;