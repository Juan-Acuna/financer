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

}
export const patchActualizar = async (req : Request, res : Response)=>{

}
export const deleteCuenta = async (req : Request, res : Response)=>{

}