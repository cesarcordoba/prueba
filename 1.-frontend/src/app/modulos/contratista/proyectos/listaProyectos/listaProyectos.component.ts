
import { Component, OnInit, Input } from '@angular/core';

import { ProyectoService } from '../../../../servicios';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ConfirmDelDialogComponent } from '../../fragments/confirm-del-dialog/confirm-del-dialog.component';
@Component({
  selector: 'listaProyectos',
  templateUrl: './listaProyectos.component.pug',
  styleUrls: ['./listaProyectos.component.styl']
})
export class ListaproyectosComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}

   @Input() proyectos
    
    constructor(private _router: Router, private dialog: MatDialog) {
        

  }

  mandarAProyecto(id){
    this._router.navigate(['/contratista/proyectos/' + id]);
  }

  borrarProyecto(proyecto){

    this.dialog.open(ConfirmDelDialogComponent,{
        width: '290px',
        height: '200px'
        }).afterClosed().subscribe(result => {
            result ?
            ProyectoService.eliminar(proyecto.id)
            .then(response => this.proyectos.items.splice(this.proyectos.items.indexOf(proyecto),1))
            : null;
        });

  }

  ngOnInit() {



  }
}