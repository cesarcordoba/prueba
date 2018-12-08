
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'seccionRegistro',
  templateUrl: './seccionRegistro.component.pug',
  styleUrls: ['./seccionRegistro.component.styl']
})
export class SeccionregistroComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}


    constructor() {

  }

  ngOnInit() {



  }
}