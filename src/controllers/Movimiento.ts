import { Request, Response } from 'express';
import Movimiento from '../models/Movimiento';
import Usuario from '../models/Usuario';
import Cuenta from '../models/Cuenta';

export const getMovimiento = async (req : Request, res : Response)=>{
    const { id } = req.params;
    try {
        const mov = await Movimiento.findByPk(id);
        if(mov){
            res.json(mov);
            return;
        }
        res.status(400).json({ error: 'No se registro movimiento con ese ID' });
    } catch (error) {
        res.status(500).json({ error: 'Hubo un problema.' });
    }
}
export const getMovimientos = async (req : Request, res : Response)=>{
    const { id } = req.params;
    try {
        const mov = await Movimiento.findAll();
        res.json(mov);
    } catch (error) {
        res.status(500).json({ error: 'Hubo un problema.' });
    }
}
export const postNew = async (req : Request, res : Response)=>{
    const { body } = req;
    try {
        const usuario = await Usuario.findByPk(body.usuario);
        if(usuario && usuario?.activo){
            const cuenta = await Cuenta.findByPk(body.cuenta);
            if(cuenta && cuenta?.activa){
                const mov = Movimiento.build(body);
                await mov.save();
                res.json(mov);
                return;
            }
            res.status(400).json({ error: 'La cuenta no existe o no se encuentra activa.' });
            return;
        }
        res.status(400).json({ error: 'El usuario no existe o no se encuentra activo.' });
    } catch (error) {
        res.status(500).json({ error: 'Hubo un problema.' });
    }
}
export const patchActualizar = async (req : Request, res : Response)=>{
    const { id } = req.params;
    const { body } = req;
    try {
        const mov = await Movimiento.findByPk(id);
        if(mov){
            mov.update(body);
            await mov.save();
            res.json(mov);
        }
        res.status(400).json({ error: 'No se registro movimiento con ese ID'});
    } catch (error) {
        res.status(500).json({ error: 'Hubo un problema.' });
    }
}
export const deleteMovimiento = async (req : Request, res : Response)=>{
    const { id } = req.params;
    try {
        const mov = await Movimiento.findByPk(id);
        if(mov){
            await mov.destroy();
            res.json({ id: id });
            return;
        }
        res.status(400).json({ error: 'No se registro movimiento con ese ID' });
    } catch (error) {
        res.status(500).json({ error: 'Hubo un problema.' });
    }
}