
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'informacionProyecto',
  templateUrl: './informacionProyecto.component.pug',
  styleUrls: ['./informacionProyecto.component.styl']
})
export class InformacionproyectoComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}


    constructor() {

  }

  ngOnInit() {



  }
}