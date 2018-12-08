
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filtrosProyectos',
  templateUrl: './filtrosProyectos.component.pug',
  styleUrls: ['./filtrosProyectos.component.styl']
})
export class FiltrosproyectosComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}


    constructor() {

  }

  ngOnInit() {



  }
}