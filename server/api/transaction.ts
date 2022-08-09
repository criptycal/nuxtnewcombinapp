import {Router} from 'express';
const router = Router();
import { postTransaction, getTransactions } from '@/server/controllers/transaction';

/* POST transaction */
router.post('/transactions', postTransaction);
/* GET transactions */
router.get('/transactions', getTransactions);
/* GET transactions/:id */
// router.get('/transactions/:id', getTransaction);

export default router;