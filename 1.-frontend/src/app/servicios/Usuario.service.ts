
import { Injectable } from '@angular/core'
import { APILOCAL } from '../../environments/environment'
import { Usuario } from '../modelos/Usuario.model'
import * as axios from 'axios'

import { Inversionista } from '../modelos/Inversionista.model';
import { Proyecto } from '../modelos/Proyecto.model';
import { Contratista } from '../modelos/Contratista.model';
const url = APILOCAL.url

@Injectable()
export class UsuarioService {

    public static crear = (peticion) => axios.default.post( url + '/data/usuario', peticion).then(response =>  new Usuario( response.data ))
    public static obtener = () => axios.default.get( url + '/data/usuario').then(response => response.data.map(n => new Usuario( n )))
    public static one = (id) => axios.default.get( url + '/data/usuario/' + id).then(response =>  new Usuario( response.data ))
    public static editar = (peticion) => axios.default.put( url + '/data/usuario/' + peticion.id , peticion)
    public static eliminar = id => axios.default.delete( url + '/data/usuario/' + id )
    public static paginacion = peticion => axios.default.post( url + '/data/usuario/paginacion', peticion )
    .then(response => Object.assign(response.data, {items : response.data.items.map(n => new Usuario( n ))}))
    public static paginacionInversionista = peticion => axios.default.post( url + '/data/usuario/paginacionInversionista', peticion )
    .then(response => Object.assign(response.data, {items : response.data.items.map(n => new Usuario( n ))}))
    public static paginacionContratista = peticion => axios.default.post( url + '/data/usuario/paginacionContratista', peticion )
    .then(response => Object.assign(response.data, {items : response.data.items.map(n => new Usuario( n ))}))
    


    public static inversionistas = id => axios.default.get( url + '/data/usuario/Inversionistas/' + id ).then(response => response.data.map(n => new Proyecto( n )))
    public static ligarinversionistas = (usuario , proyecto) => axios.default.put( url + '/data/usuario-proyecto/' + usuario + '/' + proyecto )
    public static desligarinversionistas = (usuario , proyecto) => axios.default.delete( url + '/data/usuario-proyecto/' + usuario + '/' + proyecto )

    public static buscar = (nombre) => axios.default.get(url + '/data/usuario/buscar', nombre)

    public static contratistas = id => axios.default.get( url + '/data/usuario/Contratistas/' + id ).then(response => response.data.map(n => new Proyecto( n )))
    public static ligarcontratistas = (usuario , proyecto) => axios.default.put( url + '/data/usuario-proyecto/' + usuario + '/' + proyecto )
    public static desligarcontratistas = (usuario , proyecto) => axios.default.delete( url + '/data/usuario-proyecto/' + usuario + '/' + proyecto )

    

    //- Finalizo
}