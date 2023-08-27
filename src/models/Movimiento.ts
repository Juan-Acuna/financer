import { DataTypes } from 'sequelize';
import { Repositorio } from '../core/Repo';

const Movimiento = Repositorio.define('Movimientos', {
    id : { type: DataTypes.BIGINT.UNSIGNED, primaryKey: true },
    usuario : { type: DataTypes.BIGINT.UNSIGNED, primaryKey: true },
    cuenta : { type: DataTypes.BIGINT.UNSIGNED, primaryKey: true },
    destino : { type: DataTypes.BIGINT.UNSIGNED, allowNull: true },
    tipo : { type: DataTypes.TINYINT.UNSIGNED },
    comentario : { type: DataTypes.STRING, allowNull: true },
    fecha : { type: DataTypes.DATE },
    monto : { type: DataTypes.DOUBLE }
})

export default Movimiento;