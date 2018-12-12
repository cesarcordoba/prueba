
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { ProyectoService } from '../../../../../servicios';
@Component({
  selector: 'gridProyectos',
  templateUrl: './gridProyectos.component.pug',
  styleUrls: ['./gridProyectos.component.styl'],
  encapsulation: ViewEncapsulation.None
})
export class GridproyectosComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}


    @Input() proyectos;

    // proyectos = {
    //     items : []
    // }
    // filtro : any;
    columnas = 4
    height = '450px'
    colspan = 1
    rowspan = 1

    constructor() {
    //     this.filtro = {
    //             pagina : 1,
    //             limite :  (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ?  5 :  3,
    //             order : ['id'],
    //             where : {},
    //             include : []
    //         }

    // ProyectoService.paginacion(this.filtro)
    // .then(response => this.proyectos = response)

  }

  ngOnInit() {



  }
}