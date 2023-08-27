import { DataTypes } from 'sequelize';
import { Repositorio } from '../core/Repo';

const Cuenta = Repositorio.define('Cuentas', {
    id : { type: DataTypes.BIGINT.UNSIGNED, primaryKey: true },
    usuario : { type: DataTypes.BIGINT.UNSIGNED, primaryKey: true },
    codigo : { type: DataTypes.STRING },
    nombre : { type: DataTypes.STRING },
    tipo : { type: DataTypes.TINYINT.UNSIGNED },
    saldo : { type: DataTypes.DOUBLE }
});
export default Cuenta;