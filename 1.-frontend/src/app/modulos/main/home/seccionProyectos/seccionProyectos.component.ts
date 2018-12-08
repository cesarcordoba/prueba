
import { Component, OnInit } from '@angular/core';


//    2
import { ProyectoService } from '../../../../servicios';
@Component({
  selector: 'seccionProyectos',
  templateUrl: './seccionProyectos.component.pug',
  styleUrls: ['./seccionProyectos.component.styl']
})
export class SeccionproyectosComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}



    proyectos: any

    constructor() {

    ProyectoService.obtener()
    .then(response => this.proyectos = response)
    .then(response => console.log(response))

  }

  ngOnInit() {



  }
}