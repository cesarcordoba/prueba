
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'proyectos',
  templateUrl: './proyectos.component.pug',
  styleUrls: [
      './proyectos.component.styl'
  ]
})
export class ProyectosComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}




    constructor() {

  }

  ngOnInit() {

    console.log( this.borde )

  }
}