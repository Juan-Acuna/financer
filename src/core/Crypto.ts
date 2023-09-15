import { createHash } from 'crypto';

const encriptar = (payload: string) => {
    return createHash(process.env.CRYPT_ALG || 'sha256').update(payload).digest();
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