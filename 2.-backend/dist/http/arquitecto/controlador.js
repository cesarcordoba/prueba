"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = require('../error');
const _ = require('lodash');
const modelo_1 = require("./modelo");
class ArquitectoController {
    constructor() {
        //* null
        this.crear = (req, res, next) => modelo_1.Arquitecto.create(req.body)
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'crearArquitecto'));
        //* null
        this.buscar = (req, res, next) => req.params.id ?
            modelo_1.Arquitecto.findById(req.params.id)
                .then(response => res.status(200).jsonp(response))
                .catch(err => errorHandler(err, 'buscarArquitecto'))
            :
                modelo_1.Arquitecto.findAll()
                    .then(response => res.status(200).jsonp(response))
                    .catch(err => errorHandler(err, 'buscarArquitecto'));
        //* null
        this.actualizar = (req, res, next) => modelo_1.Arquitecto.update(req.body, { where: { id: req.params.id } })
            .then(response => res.status(200).jsonp(response))
            .catch(err => errorHandler(err, 'actualizarArquitecto'));
        //* null
        this.eliminar = (req, res, next) => modelo_1.Arquitecto.findById(req.params.id)
            .then(response => response.destroy()
            .then(response => res.status(200).jsonp(response)))
            .catch(err => errorHandler(err, 'eliminarArquitecto'));
        //* null
        this.paginacion = (req, res, next) => modelo_1.Arquitecto.findAndCountAll({
        // order : ['nombre']
        }).then(response => res.status(200).jsonp(new Object({
            items: _.chunk(response.rows, req.body.limite)[req.body.pagina - 1],
            paginas: Math.round(response.count / req.body.limite)
        })))
            .catch(err => errorHandler(err, 'paginacionArquitecto'));
        //* 8
        this.contratistas = (req, res, next) => modelo_1.Arquitecto.findById(req.params.id)
            .then(item => item.$get('Contratistas'))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'Arquitectocontratistas'));
        //* 8
        this.ligarcontratistas = (req, res, next) => modelo_1.Arquitecto.findById(req.params.arquitecto)
            .then(item => item.$add('Contratistas', req.params.contratista))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'ligarArquitectocontratistas'));
        //* 8
        this.desligarcontratistas = (req, res, next) => modelo_1.Arquitecto.findById(req.params.arquitecto)
            .then(item => item.$remove('Contratistas', req.params.contratista))
            .then(result => res.status(200).jsonp(result))
            .catch(err => errorHandler(err, 'desligarArquitectocontratistas'));
    }
}
exports.ArquitectoController = ArquitectoController;
