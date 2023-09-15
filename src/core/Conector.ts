import { ModelCtor, Model, Sequelize, QueryTypes } from 'sequelize';


export abstract class Conector{
    constructor(){}
    abstract define(nombre : string, modelo : any, opciones : any | undefined): ModelCtor<Model>;
    async connect(): Promise<void> {};
    abstract executeFunction(f:string, v:Array<string | number | boolean>):Promise<unknown>;
}

export abstract class ConectorFactory{
    static createMariabd() : Conector{
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
    async executeFunction(f:string, v:Array<string | number | boolean>): Promise<unknown> {
        let vs = '';
        v.forEach(e => {
            vs += `${(typeof e )=='string'?"'"+e+"'":e},`;
        });
        console.log(vs);
        vs = vs.substring(0,vs.length-1);
        const q = `SELECT ${f}(${vs})`;
        const r = ((await this.db.query(q, { type: QueryTypes.SELECT }))[0]);
        return Object.values(r)[0];
    }
}