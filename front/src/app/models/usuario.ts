export class Usuario {
    
    constructor(private _id:number = 0, private _nick: string = "", private _password: string = "") {
    }

    public get id():number {
        return this._id;
    }
    public set id(id: number){
        this._id = id;
    }
    public get nick():string {
        return this._nick;
    }
    public set nick(nick: string){
        this._nick = nick;
    }public get password():string {
        return this._password;
    }
    public set password(password: string){
        this._password = password;
    }
}