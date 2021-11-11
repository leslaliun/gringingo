import { Lecciones } from './leccion';
export class Nivel {
    
    constructor(private _id:number = 0, private _nombre: string = "", private _leccion: Lecciones[]= [], private _completados: number = 0) {
    }

    public get id():number {
        return this._id;
    }
    public set id(id: number){
        this._id = id;
    }
    public get nombre():string {
        return this._nombre;
    }
    public set nombre(nombre: string){
        this._nombre = nombre;
    }
    public get completados():number {
        return this._completados;
    }
    public set completados(completados: number){
        this._completados = completados;
    }
    public get lecciones():Lecciones[] {
        return this._leccion;
    }
    public set lecciones(leccion: Lecciones[]){
        this._leccion = leccion;
    }
}
