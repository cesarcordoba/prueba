
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


import { UsuarioService } from '../../../../servicios';
@Component({
  selector: 'formularioContratistas',
  templateUrl: './formularioContratistas.component.pug',
  styleUrls: ['./formularioContratistas.component.styl']
})
export class FormulariocontratistasComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}

    @Input() usuario
    formulario: FormGroup;



    usuarios: any

    constructor(private fb: FormBuilder) {

        
        
  }

    ngOnInit() {

    }


    aceptar(){

        console.log(this.usuario)

        UsuarioService.editar(this.usuario)

    }


}