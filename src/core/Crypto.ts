import { createHmac } from 'crypto';

const encriptar = (payload: string) => {
    return createHmac(process.env.CRYPT_ALG || 'sha256', process.env.CRYPT_SEC || 'Secreto').update(payload).digest('base64');
}
const generarCodigo = () => {
    return Math.floor(100000 + Math.random() * 900000);
}
const validarFormatoClave = (clave: string) => {
    if(clave === undefined)
        return false;
    return clave.match(/[0-9a-zA-Z._!#$%&*()=+,\\-]{6,30}/);
}
export default { encriptar, generarCodigo, validarFormatoClave };