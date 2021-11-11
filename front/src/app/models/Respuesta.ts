import { Usuario } from './usuario';
import { Nivel } from './nivel';
import { Lecciones } from './leccion';


export interface RespuestaTop {
    status: number;
    mensaje: string;
    usuario: Usuario;
    items: Nivel[]
}

export interface RespuestaTopLecciones {
    status: number;
    mensaje: string;
    items: Lecciones[]
}
