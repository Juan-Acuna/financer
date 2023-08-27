import { DataTypes } from 'sequelize';
import { daJack } from '../core/Repo';

const Sesion = daJack.define('Sesiones', {
    id : { type: DataTypes.BIGINT.UNSIGNED, primaryKey: true },
    usuario : { type: DataTypes.BIGINT.UNSIGNED, primaryKey: true },
    timestamp : { type: DataTypes.DATE },
});
export default Sesion;