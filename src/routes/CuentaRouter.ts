import { Router} from 'express';
import { deleteCuenta, getCuenta, getCuentas, patchActualizar, postNew } from '../controllers/CuentaController';

const router = Router();

router.get('/:id', getCuenta);
router.get('/', getCuentas);
router.post('/', postNew);
router.patch('/:id', patchActualizar);
router.delete('/:id', deleteCuenta);

export default router;