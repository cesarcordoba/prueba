import { MultimediaService } from './../servicios/Multimedia.service';

import { ProyectoService } from '../servicios/Proyecto.service'
import { UsuarioService, PortadaService } from '../servicios';

export class Proyecto {
    id: number;
    nombre: string;
    imagenes: any;
    portadas: any;


    constructor(arg) {
        Object.entries(arg).forEach(n => this[n[0]] = n[1])
        imagenes: this.obtenerImagenes();
    }

    obtenerImagenes(){

        MultimediaService.xProyecto(this.id)
        .then(response => this.imagenes = response)

        PortadaService.xProyecto(this.id)
        .then(response => this.portadas = response)

    }

}