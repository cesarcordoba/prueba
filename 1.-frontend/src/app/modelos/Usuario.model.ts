
import { UsuarioService } from '../servicios/Usuario.service'

export class Usuario {
    id: number;



    constructor(arg) {
        Object.entries(arg).forEach(n => this[n[0]] = n[1])
    }




}