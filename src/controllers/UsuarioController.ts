import { Response } from 'express';
import { Request } from 'express-jwt';
import { validate } from 'deep-email-validator';
import { daJack } from '../core/Repo';
import Usuario from '../models/Usuario';
import Crypto from '../core/Crypto';
import Token from '../core/Token';
import Validacion from '../models/Validaciones';

export const getUsuario = async (req : Request, res : Response)=>{
    const { id } = req.params;
    try {
        const usuario = await Usuario.findByPk(id);
        if(usuario){
            res.json(usuario);
            return;
        }
        res.status(400).json({ error: 'Usuario no existe.' });
    } catch (error) {
        res.status(500).json({ error: 'Hubo un problema.' });
    }
}
export const getUsuarios = async (req : Request, res : Response)=>{
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Hubo un problema.' });
    }
}
export const postNew = async (req : Request, res : Response)=>{
    const { body: { email, pwd, nombre } } = req;
    try{
        if(!Crypto.validarFormatoClave(pwd)){
            res.status(400).json({ error:'La contraseña no cumple con el formato requerido ( min: 6,max: 30, letras, numeros y los simbolos ". _ ! # $ % & * ( ) = + ," )' });
            return;
        }
        if(email === undefined || pwd === undefined || nombre === undefined){
            res.status(400).json({ error: 'Faltan campos requeridos.' });
            return;
        }
        const { valid } = await validate(email);
        if(!valid){
            res.status(400).json({ error: 'Correo electronico invalido.' });
            return;
        }
        const existe = await Usuario.findOne({
            where:{
                email:email
            }
        });
        if(existe){
            res.status(400).json({ error: 'El usuario ya se encuentra registrado en el sistema.' });
            return;
        }
        let usuario = Usuario.build({
            email: email,
            nombre: nombre,
            clave: Crypto.encriptar(pwd),
            rol: 1,
            activo: 1,
            validado: 0
        });
        await usuario.save();
        usuario = await Usuario.findOne({
            where:{
                email:email
            }
        });
        const hoy = new Date()
        console.log(hoy.getTime());
        const val = Validacion.build({
            usuario: usuario.id,
            codigo: Crypto.generarCodigo(),
            expires:hoy.setTime(hoy.getTime() + 86400000)
        });
        await val.save();
        //enviar correo con codigo
        res.json({ id: usuario.id });
    }catch(error){
        res.status(500).json({ error: 'Hubo un problema.' });
    }
}
export const patchActualizar = async (req : Request, res : Response)=>{
    const { id } = req.params;
    const { body: { email, pwd, nombre, activo } } = req;
    try{
        const usuario = await Usuario.findByPk(id);
        if(usuario){
            const upd = {
                email: usuario.email,
                clave: usuario.clave,
                nombre: usuario.nombre,
                activo: usuario.activo
            }
            if(email){
                const { valid } = await validate(email);
                if(!valid){
                    res.status(400).json({ error: 'Correo electronico invalido.' });
                    return;
                }
                const existe = await Usuario.findOne({
                    where:{
                        email:email
                    }
                });
                if(existe){
                    res.status(400).json({ error:'El correo electronico ya esta en uso.' });
                    return;
                }
                upd.email = email;
            }
            if(pwd){
                if(Crypto.validarFormatoClave(pwd)){
                    upd.clave=pwd;
                }else{
                    res.status(400).json({ error:'La contraseña no cumple con el formato requerido ( min: 6,max: 30, letras, numeros y los simbolos ". _ ! # $ % & * ( ) = + ," )' });
                    return;
                }
            }
            usuario.update(upd);
            await usuario.save();
            res.json(usuario);
            return;
        }
        res.status(400).json({ error:'El usuario no existe.' });
    }catch(error){
        res.status(500).json({ error: 'Hubo un problema.' });
    }
}
export const deleteUsuario = async (req : Request, res : Response)=>{
    const { id } = req.params;
    try{
        const usuario = await Usuario.findByPk(id);
        if(usuario){
            usuario.update({ activo: 0 });
            await usuario.save();
            res.json({ id: id });
            return;
        }
        res.status(400).json({ error:'El usuario no existe.' });
    }catch(error){
        res.status(500).json({ error: 'Hubo un problema.' });
    }
}
export const postIniciarSesion = async (req : Request, res : Response)=>{
    const { body: { email, pwd } } = req;
    try {
        const r = await daJack.storedFunction('FN_LOGIN', email, pwd) as number;
        if(r > 0){
            const usuario = await Usuario.findByPk(r);
            const token = Token.generarToken({
                id: usuario.id,
                email: usuario.email,
                nombre: usuario.nombre,
                rol: usuario.rol
            });
            res.json({ token, usuario });
        }else if(r == -1){
            res.status(400).json({ error: 'El usuario no existe.'});
        }else if(r == -2){
            res.status(400).json({ error: 'Contraseña incorrecta.'});
        }else{
            res.status(418).json({ error: 'Soy una tetera' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Hubo un problema.' });
    }        
}
export const postValidar = async (req : Request, res : Response)=>{
    const { body: { codigo, id } } = req;
    if(!codigo){
        res.status(400).json({ error: 'Se requiere el codigo de validacion.' });
        return;
    }
    try {
        const val = await Validacion.findOne({
            where:{
                usuario: id
            }
        });
        if(val){
            if(val.codigo==codigo){
                const usuario = await Usuario.findByPk(id);
                usuario.update({ validado: 1 });
                await usuario.save();
                await val.destroy();
                res.sendStatus(200);
                return;
            }
            res.status(400).json({ error: 'Codigo incorrecto.' });
            return;
        }
        res.status(400).json({ error: 'El usuario no tiene validaciones pendientes.' });
    } catch (error) {
        res.status(500).json({ error: 'Hubo un problema.' });
    }
}