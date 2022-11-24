import { Router } from "express";
import { getSales, createSale, getSalesbyId, getSalesbyUser} from '../controllers/sales.controller.js'

const router = Router();

router.get('/sales', getSales);
router.post('/sales', createSale);
router.get('/sales/:id', getSalesbyId);
router.get('/salesbyuser/:id', getSalesbyUser);



export default router;