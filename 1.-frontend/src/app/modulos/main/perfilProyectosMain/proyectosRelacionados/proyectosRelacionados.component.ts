
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'proyectosRelacionados',
  templateUrl: './proyectosRelacionados.component.pug',
  styleUrls: ['./proyectosRelacionados.component.styl']
})
export class ProyectosrelacionadosComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}


    constructor() {

  }

  ngOnInit() {



  }
}