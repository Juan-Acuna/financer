import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { expressjwt } from 'express-jwt';


const generarToken = (payload : any) => {
    return jwt.sign(payload, process.env.SECRET || 'Token', { algorithm: 'HS256', expiresIn: '2h', issuer: 'd.a-Jack' });
}
const invalido = () => {
    const f = (err : any, req : Request, res : Response, next : Function) => {
        if (err.name === "UnauthorizedError") {
            res.status(401).json({ error: 'Acceso denegado.' });
        } else {
            next(err);
        }
    }
    return f;
}

const activarJWT = (...endpoints : string[]) => {
    return expressjwt({
        secret: process.env.SECRET || 'Token',
        algorithms: ['HS256']
    }).unless({ path: endpoints });
}

export default { generarToken, invalido, activarJWT };