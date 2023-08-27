import { Router } from 'express';
import { deleteMovimiento, getMovimiento, getMovimientos, patchActualizar, postNew } from '../controllers/Movimiento';

const router = Router();

router.get('/:id', getMovimiento);
router.get('/', getMovimientos);
router.post('/', postNew);
router.patch('/:id', patchActualizar);
router.delete('/:id', deleteMovimiento);

export default router;