import { Router } from 'express';
import { getUsuario, getUsuarios, postNew, patchActualizar, deleteUsuario, postIniciarSesion, postValidar } from '../controllers/UsuarioController';

const router = Router();

router.get('/:id', getUsuario);
router.get('/', getUsuarios);
router.post('/', postNew);
router.patch('/:id', patchActualizar);
router.delete('/:id', deleteUsuario);
router.post('/login', postIniciarSesion);
router.post('/:id/validar', postValidar);

export default router;