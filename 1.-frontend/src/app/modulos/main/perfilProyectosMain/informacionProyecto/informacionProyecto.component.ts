
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'informacionProyecto',
  templateUrl: './informacionProyecto.component.pug',
  styleUrls: ['./informacionProyecto.component.styl'],
  encapsulation: ViewEncapsulation.None
})
export class InformacionproyectoComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}

    @Input() proyecto;
    @Input() usuario;
    

    color = 'warn';
    mode = 'determinate';
    value = 60;

    constructor() {

  }

  ngOnInit() {



  }
}