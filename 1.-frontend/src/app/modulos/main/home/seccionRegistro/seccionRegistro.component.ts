
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'seccionRegistro',
  templateUrl: './seccionRegistro.component.pug',
  styleUrls: ['./seccionRegistro.component.styl']
})
export class SeccionregistroComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}
    contacto = {nombre:'',correo:'',empresa:'',mensaje:''}
    formulario: FormGroup;
    constructor(private fb: FormBuilder, public snack: MatSnackBar) {

  }

  submit(contacto){
    console.log(contacto)
  }

  ngOnInit() {
    this.formulario = this.fb.group({
      correo: [this.contacto.correo, [Validators.required]],
    })

  }
}