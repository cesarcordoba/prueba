
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'seccionGaleria',
  templateUrl: './seccionGaleria.component.pug',
  styleUrls: ['./seccionGaleria.component.styl']
})
export class SecciongaleriaComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}


    constructor() {

  }

  ngOnInit() {



  }
}