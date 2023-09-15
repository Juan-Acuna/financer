import { DataTypes } from 'sequelize';
import { daJack } from '../core/Repo';

const Validacion = daJack.define('Validaciones', {
    usuario : { type: DataTypes.BIGINT.UNSIGNED, primaryKey: true },
    codigo : { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true },
    expires : { type: DataTypes.DATE },
});
export default Validacion;