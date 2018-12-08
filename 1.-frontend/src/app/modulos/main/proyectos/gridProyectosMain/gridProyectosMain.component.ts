
import { Component, OnInit } from '@angular/core';

import { ProyectoService } from '../../../../servicios';
@Component({
  selector: 'gridProyectosMain',
  templateUrl: './gridProyectosMain.component.pug',
  styleUrls: ['./gridProyectosMain.component.styl']
})
export class GridproyectosmainComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}



    proyectos = {
        items : []
    }
    filtro : any;
    columnas = 3
    height = '500px'
    colspan = 1
    rowspan = 1

    constructor() {
        this.filtro = {
                pagina : 1,
                limite :  (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ?  5 :  3,
                order : ['id'],
                where : {},
                include : []
            }

    ProyectoService.paginacion(this.filtro)
    .then(response => this.proyectos = response)

  }

  ngOnInit() {



  }
}