
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


import { UsuarioService } from '../../../../servicios';
@Component({
  selector: 'formularioInversionistas',
  templateUrl: './formularioInversionistas.component.pug',
  styleUrls: ['./formularioInversionistas.component.styl']
})
export class FormularioinversionistasComponent implements OnInit {

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