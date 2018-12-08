
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'preguntasHome',
  templateUrl: './preguntasHome.component.pug',
  styleUrls: ['./preguntasHome.component.styl']
})
export class PreguntashomeComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}


    constructor() {

  }

  ngOnInit() {



  }
}