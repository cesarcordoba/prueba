
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'proyectosInversionista',
  templateUrl: './proyectosInversionista.component.pug',
  styleUrls: ['./proyectosInversionista.component.styl']
})
export class ProyectosinversionistaComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}

    @Input() proyectos
    
    constructor() {

  }

  ngOnInit() {



  }
}