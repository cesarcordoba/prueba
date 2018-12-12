
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'proyectos',
  templateUrl: './proyectos.component.pug',
  styleUrls: [
      './proyectos.component.styl'
  ],
  encapsulation: ViewEncapsulation.None
})
export class ProyectosComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}




    constructor() {

  }

  ngOnInit() {

    console.log( this.borde )

  }
}