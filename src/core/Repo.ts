import { Conector, ConectorFactory } from "./Conector";
import { ModelCtor } from 'sequelize';

class Repo{
    private conector : Conector;
    constructor(conector : Conector){
        this.conector = conector;
        this.conector.connect();
    }
    define(nombre : string, modelo : any, opciones : any = {}): ModelCtor<any> {
        return this.conector.define(nombre, modelo, opciones);
    }
    storedFunction(functionName: string, ...values: Array<any>): Promise<unknown>{
        return this.conector.executeFunction(functionName, values);
    }
}

export const daJack = new Repo(ConectorFactory.createMariabd());