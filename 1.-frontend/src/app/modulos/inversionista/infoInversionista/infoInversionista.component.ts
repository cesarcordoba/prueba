
import { Component, OnInit } from '@angular/core';
import { Title , Meta }     from '@angular/platform-browser';
import { ActivatedRoute} from '@angular/router'
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import {  BehaviorSubject, Observable  } from 'rxjs'

import { UsuarioService, AWSService, MultimediaService} from '../../../servicios';
@Component({
  selector: 'infoInversionista',
  templateUrl: './infoInversionista.component.pug',
  styleUrls: [
      './infoInversionista.component.styl'
  ],
  providers: [AWSService]
})
export class InfoinversionistaComponent implements OnInit {

    borde = false ?  {'border-color':'rgb(76, 175, 80)'} : {'border-color':'rgb(244, 67, 54)'}
    //
    // pasarUsuario : BehaviorSubject<any>



    usuario: any = {}
    inversionista: any;
    edicion: boolean = false;
    carga: boolean = false;
    edicionFoto: boolean = false;
    file: any;
    idMultimedia: any;
    control: number = 1; //- Esta variable sirve para crear o editar la foto de perfil
    fotoPerfil: any = "assets/images/fotoPerfi.png";

    constructor(
        public route : ActivatedRoute, 
        private titleService: Title, 
        private meta : Meta, 
        private fb: FormBuilder,
        private _aws: AWSService,
        public snackBar: MatSnackBar ) {


    route.params.subscribe(async (res) =>
        //-UsuarioService.one(Number(res.id))
        UsuarioService.one(Number(5))
        .then(response => this.usuario = response)
        .then(response => {
            UsuarioService.inversionistas(this.usuario.id)
            .then(response => this.inversionista = response[0].Inversionista)
            MultimediaService.fotoPerfil(this.usuario.id)
            .then(response =>{
                this.idMultimedia = response[0].id
                this.fotoPerfil = response[0].link
                this.control = 2
            })
            // this.pasarUsuario.next(response);

            this.titleService.setTitle( this.usuario.nombre );
        // this.meta.updateTag({ name: 'description', content: _.replace( this.proyecto.resumen, '<p>', '')  })
        // this.meta.updateTag({ name: 'keywords', content: 'pagina web, presupuesto web, cotizador online, cotizador paginas web, presupuesto tienda online,' + this.proyecto.nombre })

    }))


  }

  guardarFoto(){
    if(this.file === undefined){
        this.snackBar.open("No hay una imagen seleccionada", "", {duration: 1000});
    }else{
        this._aws.subirArchivo(this.file,"bull-imagenes", "esimple-perfiles/").subscribe(archivo => {
            if(archivo==true){
                this.carga = true;
            }else if(archivo==false){
                this.carga = false;
            }else{
                if(this.control === 1){
                    MultimediaService.crear({
                        link: archivo[0],
                        key: archivo[1],
                        tipo: 5 //- * <---AQUI REMPLAZAR POR LA VARIABLE QUE TENGA EL ID DEL USUARIO
                    })
                    .then(imagen =>this.fotoPerfil = imagen.link)
                    .then(algomas =>  {
                        this.carga = false
                        this.control = 2
                        this.edicionFoto = !this.edicionFoto
                    })
                    .then(final => 
                        MultimediaService.fotoPerfil(this.usuario.id)
                        .then(response =>this.idMultimedia = response[0].id))
                }else{
                    MultimediaService.editar({
                        id: this.idMultimedia,
                        link: archivo[0],
                        key: archivo[1],
                        tipo: 5 //- * <---AQUI REMPLAZAR POR LA VARIABLE QUE TENGA EL ID DEL USUARIO
                    })
                    .then(imagen => this.fotoPerfil = archivo[0])
                    .then(algomas =>  this.carga = false)
                    this.edicionFoto = !this.edicionFoto
                }
            }
        })
        
    }

  }

  editarFoto(){

    this.edicionFoto = !this.edicionFoto

  }
  editarInversionista(){

    this.edicion = !this.edicion

  }

    guardarUsuario() {
        UsuarioService.editar(this.usuario)
        this.snackBar.open("Guardado Correctamente", "", { duration: 1000 });
        this.edicion = !this.edicion
    }
  ngOnInit() {



  }
}