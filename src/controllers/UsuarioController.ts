import { Request, Response } from 'express';
import Usuario from '../models/Usuario';

export const getUsuario = async (req : Request, res : Response)=>{
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);
    if(usuario){
        res.json(usuario);
    }else{
        res.status(400).json({ error: 'Usuario no existe.' });
    }
}
export const getUsuarios = async (req : Request, res : Response)=>{
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
}
export const postNew = async (req : Request, res : Response)=>{
    const { body } = req;
    try{
        const existe = await Usuario.findOne({
            where:{
                email:body.email
            }
        });
        if(existe){
            res.status(400).json({
                msg:'El usuario ya se encuentra registrado en el sistema.'
            });
            return;
        }
        const usuario = Usuario.build(body);
        await usuario.save();
        res.json(usuario)
    }catch(error){
        res.status(500).json({ error: 'Hubo un problema.' });
    }
}
export const patchActualizar = async (req : Request, res : Response)=>{
    const { id } = req.params;
    const { body } = req;
    try{
        const usuario = await Usuario.findByPk(id);
        if(!usuario){
            res.status(400).json({
                msg:'El usuario no existe.'
            });
            return;
        }
        usuario.update(body);
        await usuario.save();
        res.json(usuario)
    }catch(error){
        res.status(500).json({ error: 'Hubo un problema.' });
    }
}
export const deleteUsuario = async (req : Request, res : Response)=>{
    const { id } = req.params;
    try{
        const usuario = await Usuario.findByPk(id);
        if(!usuario){
            res.status(400).json({
                msg:'El usuario no existe.'
            });
            return;
        }
        usuario.update({ activo: 0 });
        await usuario.save();
        res.json({ id: id });
    }catch(error){
        res.status(500).json({ error: 'Hubo un problema.' });
    }
}
export const postIniciarSesion = async (req : Request, res : Response)=>{
    
}
export const postValidar = async (req : Request, res : Response)=>{
    
}