import { DataTypes } from "sequelize";
import { daJack } from "../core/Repo";

const Usuario = daJack.define('Usuarios', {
    id : { type: DataTypes.BIGINT.UNSIGNED, primaryKey: true },
    email : { type: DataTypes.STRING },
    nombre : { type: DataTypes.STRING },
    clave : { type: DataTypes.STRING },
    rol: { type: DataTypes.TINYINT.UNSIGNED },
    activo : { type: DataTypes.TINYINT.UNSIGNED },
    validado : { type: DataTypes.TINYINT.UNSIGNED }
}, { 
    defaultScope: { 
        attributes: {
            exclude: ['clave'] 
        } 
    } 
})
export default Usuario;