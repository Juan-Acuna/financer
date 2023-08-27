import { DataTypes } from 'sequelize';
import { Repositorio } from '../core/Repo';

const Sesion = Repositorio.define('Sesiones', {
    id : { type: DataTypes.BIGINT.UNSIGNED, primaryKey: true },
    usuario : { type: DataTypes.BIGINT.UNSIGNED, primaryKey: true },
    timestamp : { type: DataTypes.DATE },
});
export default Sesion;