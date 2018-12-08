"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class UsuarioController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Usuario.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearUsuario'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Usuario.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarUsuario'))
            :
                modelo_1.Usuario.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarUsuario'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Usuario.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarUsuario'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Usuario.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarUsuario'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Usuario.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionUsuario'));
        this.paginacionInversionista = (req, res, next) => modelo_1.Usuario.findAndCountAll({
            where: { tipo: 'inversionista' }
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionInversionista'));
        this.paginacionContratista = (req, res, next) => modelo_1.Usuario.findAndCountAll({
            where: { tipo: 'contratista' }
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionContratista'));
        //* 5
        this.inversionistas = (req, res, next) => modelo_1.Usuario.findById(req.params.id)
            .then(item => item.$get('Inversionistas'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'UsuarioInversionistas'));
        //* 5
        this.ligarinversionistas = (req, res, next) => modelo_1.Usuario.findById(req.params.usuario)
            .then(item => item.$add('Inversionistas', req.params.proyecto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarUsuarioInversionistas'));
        //* 5
        this.desligarinversionistas = (req, res, next) => modelo_1.Usuario.findById(req.params.usuario)
            .then(item => item.$remove('Inversionistas', req.params.proyecto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarUsuarioInversionistas'));
        //* 8
        this.contratistas = (req, res, next) => modelo_1.Usuario.findById(req.params.id)
            .then(item => item.$get('Contratistas'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'UsuarioContratistas'));
        //* 8
        this.ligarcontratistas = (req, res, next) => modelo_1.Usuario.findById(req.params.usuario)
            .then(item => item.$add('Contratistas', req.params.proyecto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarUsuarioContratistas'));
        //* 8
        this.desligarcontratistas = (req, res, next) => modelo_1.Usuario.findById(req.params.usuario)
            .then(item => item.$remove('Contratistas', req.params.proyecto))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarUsuarioContratistas'));
    }
}
exports.UsuarioController = UsuarioController;
