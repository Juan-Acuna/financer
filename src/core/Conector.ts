import { ModelCtor, Model, Sequelize } from 'sequelize';
import dotenv from 'dotenv';

let loaded = false;

export const loadEnv = ()=>{
    if(!loaded){
        if(!process.env.DOCKER)
            dotenv.config();
    }
}

export abstract class Conector{
    constructor(){}
    abstract define(nombre : string, modelo : any, opciones : any | undefined): ModelCtor<Model>;
    async connect(): Promise<void> {}
}

export abstract class ConectorFactory{
    static createMariabd() : Conector{
        loadEnv();
        return new ConectorMariadb();
    }
}

class ConectorMariadb extends Conector{
    db : Sequelize;
    constructor(){
        super();
        this.db = new Sequelize(process.env.DB_SCHEMA || 'financer', process.env.DB_USR || 'root', process.env.DB_PWD || '1234', {
            host: process.env.DB_HOST || 'localhost',
            dialect:'mariadb',
            logging: console.log
        });
    }
    define(nombre : string, modelo : any, opciones : any | undefined = {}): ModelCtor<Model<any, any>> {
        return this.db.define(nombre, modelo, opciones);
    }
    async connect(): Promise<void> {
        this.db.authenticate();
    }
}