
    import { Component, Input, OnInit } from '@angular/core';


import { ProyectoService } from '../../../../servicios';
@Component({
  selector: 'fichaProyectoMain',
  templateUrl: './fichaProyectoMain.component.pug',
  styleUrls: ['./fichaProyectoMain.component.styl']
})
export class FichaproyectomainComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}

    @Input() proyecto


    constructor() {

    // ProyectoService.one()
    // .then(response => this.proyectos = response)
    // .then(response => console.log(response))

  }

  ngOnInit() {

      console.log( this.proyecto  )

  }
}