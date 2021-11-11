export class Lecciones {
    
    constructor(private _id:number = 0, private _nombre: string = "", private _img: string = "", private _nivel_id: number = 0) {
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
    public get nivel_id():number {
        return this._nivel_id;
    }
    public set nivel_id(nivel_id: number){
        this._nivel_id = nivel_id;
    }
    
    public get img():string {
        return this._img;
    }
    public set img(img: string){
        this._img = img;
    }
    
}

