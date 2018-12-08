
import { Router } from "express";
import { UsuarioController } from "./controlador";

export class UsuarioRouter {
    private _rutas = Router();
    private controlador: UsuarioController;

    constructor() {
        this.controlador = new UsuarioController();
        this.init();
    }

    private init() {
        //*
        this._rutas.route('/data/usuario')
            .get(this.controlador.buscar)
            .post(this.controlador.crear);

        //*
        this._rutas.route('/data/usuario/:id')
            .get(this.controlador.buscar)
            .put(this.controlador.actualizar)
            .delete(this.controlador.eliminar);

        //*
        this._rutas.route('/data/usuario/paginacion')
            .post(this.controlador.paginacion);

        this._rutas.route('/data/usuario/paginacionInversionista')
            .post(this.controlador.paginacionInversionista);
            
        this._rutas.route('/data/usuario/paginacionContratista')
            .post(this.controlador.paginacionContratista);


        //*
        this._rutas.route('/data/usuario/Inversionistas/:id')
            .get(this.controlador.inversionistas)

        //*
        this._rutas.route('/data/usuario-proyecto/:usuario/:proyecto')
            .put(this.controlador.ligarinversionistas)
            .delete(this.controlador.desligarinversionistas)

                
        //*
        this._rutas.route('/data/usuario/Contratistas/:id')
            .get(this.controlador.contratistas)

        //*
        this._rutas.route('/data/usuario-proyecto/:usuario/:proyecto')
            .put(this.controlador.ligarcontratistas)
            .delete(this.controlador.desligarcontratistas)

                
        }

    rutas() {
        return this._rutas;
    }
}
