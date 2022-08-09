 import {Router} from 'express';
const router = Router();
import { getPayables, postPayables, getPayableByBarcode, getPayableByTipoServicio } from '@/server/controllers/payable'

/* GET payables */
router.get('/payables', getPayables)
/* GET payables/:barcode */
      .get('/payables/:barcode', getPayableByBarcode)
/* GET payables/:servicio */
      .get('/payables/:servicio', getPayableByTipoServicio)

/* POST payable */
      .post('/payables', postPayables);


export default router;