import { Request, Response } from 'express';
import Cuenta from '../models/Cuenta';

export const getCuenta = async (req : Request, res : Response)=>{
    const { id } = req.params;
    try{
        const cuenta = await Cuenta.findByPk(id);
        if(cuenta){
            res.json(cuenta);
            return;
        }
        res.status(400).json({
            error: 'La cuenta no existe.'
        });
        return;
    }catch(error){
        console.log(error);
        res.status(500).json({
            error: 'Hubo un problema.'
        });
    }
}
export const getCuentas = async (req : Request, res : Response)=>{
    const { id } = req.params;
    const cuentas = await Cuenta.findAll();
    res.json(cuentas);
}
export const postNew = async (req : Request, res : Response)=>{
    const { body } = req;
    try {
        const existe = await Cuenta.findOne({
            where:{
                usuario: body.usuario,
                nombre: body.nombre
            }
        });
        if(existe){
            res.status(400).json({
                error: 'El usuario ya tiene una cuenta con ese nombre.'
            });
            return;
        }
        const cuenta = await Cuenta.build(body);
        cuenta.save();
        res.json({id:cuenta});
    } catch (error) {
        res.status(500).json({
            error: 'Hubo un problema.'
        });
    }
}
export const patchActualizar = async (req : Request, res : Response)=>{
    const { id } = req.params;
    const { body } = req;
    try{
        const cuenta = await Cuenta.findByPk(id);
        if(cuenta){
            
            res.json(cuenta);
            return;
        }
        res.status(400).json({
            error: 'La cuenta no existe.'
        });
        return;
    }catch(error){
        console.log(error);
        res.status(500).json({
            error: 'Hubo un problema.'
        });
    }
}
export const deleteCuenta = async (req : Request, res : Response)=>{

}