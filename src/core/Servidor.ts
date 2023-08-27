import express, { Application } from "express";
import usuariosRoutes from '../routes/UsuarioRouter';
import cuentasRoutes from '../routes/CuentaRouter';
import movRoutes from '../routes/MovRouter';

export default class Servidor{
    private port : string;
    private app : Application;
    private endpoints = {
        usuarios: '/api/usuarios',
        cuentas: '/api/cuentas',
        movimientos: '/api/movimientos'
    }

    constructor(port : string){
        this.app = express();
        this.port = port;
        this.middleware();
        this.configRoutes();
    }
    private middleware(){
        this.app.use(express.json());
    }
    private configRoutes(){
        this.app.use(this.endpoints.usuarios, usuariosRoutes);
        this.app.use(this.endpoints.cuentas, cuentasRoutes);
        this.app.use(this.endpoints.movimientos, movRoutes);
    }
    start(){
        this.app.listen(this.port, ()=>{
            console.log('servidor iniciado');
        })
    }
}