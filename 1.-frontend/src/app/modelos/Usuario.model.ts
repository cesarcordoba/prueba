
import { UsuarioService } from '../servicios/Usuario.service'

export class Usuario {
    id: number;
    status : number;
    tipo : string;
    avatares : any;
    logs : any;



    constructor(arg) {
        Object.entries(arg).forEach(n => this[n[0]] = n[1])
    }

    obtenerAvatares(){
        return new Promise(resolve => {
            UsuarioService.avatares(this.id)
            .then(response => this.avatares = response)
            .then(response => resolve(response))
        })
    }
    obtenerLogs(){
        return new Promise(resolve => {
            UsuarioService.logs(this.id)
            .then(response => this.logs = response)
            .then(response => resolve(response))
        })
    }

   



}