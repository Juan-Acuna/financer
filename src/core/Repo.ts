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
}

export const Repositorio = new Repo(ConectorFactory.createMariabd());