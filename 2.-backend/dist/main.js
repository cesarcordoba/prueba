"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const morgan = require("morgan");
// import { UsuarioRouter } from './http/rutas/Usuario';
// import { AutentificacionRouter } from './http/rutas/Autentificacion';
// import { ProspectoRouter } from './http/rutas/Prospecto';
//conexion a la base de datos
const conexion_1 = require("./http/conexion");
const ruteo_1 = require("./http/ruteo");
// import { ImagenRouter } from './http/rutas/Imagen';
// import { VideoRouter } from './http/rutas/Video';
const ruta_1 = require("./http/proyecto/ruta");
const ruta_2 = require("./http/contacto/ruta");
const ruta_3 = require("./http/multimedia/ruta");
const ruta_4 = require("./http/portada/ruta");
const ruta_5 = require("./http/inversionista/ruta");
const ruta_6 = require("./http/usuario/ruta");
const ruta_7 = require("./http/contratista/ruta");
const ruta_8 = require("./http/arquitecto/ruta");
const ruta_9 = require("./http/constructora/ruta");
const modelo_1 = require("./http/proyecto/modelo");
const modelo_2 = require("./http/contacto/modelo");
const modelo_3 = require("./http/multimedia/modelo");
const modelo_4 = require("./http/portada/modelo");
const modelo_5 = require("./http/inversionista/modelo");
const modelo_6 = require("./http/usuario/modelo");
const modelo_7 = require("./http/contratista/modelo");
const modelo_8 = require("./http/arquitecto/modelo");
const modelo_9 = require("./http/constructora/modelo");
class Server {
    constructor(port, modo, urlAllowOrigin) {
        this.port = port;
        console.log(modo);
        this._url_allow_origin = urlAllowOrigin;
        this.app = express();
        this.app.set('port', (process.env.PORT || this.port));
        this.config();
        this.apiRutas();
    }
    static init(port, modo, urlAllowOrigin) {
        return new Server(port, modo, urlAllowOrigin);
    }
    iniciarServidor(callback) {
        this.app.listen(process.env.PORT || 5000, callback);
    }
    config() {
        let conexion = new conexion_1.Conexion();
        conexion.addModels([
            modelo_1.Proyecto,
            modelo_2.Contacto,
            modelo_3.Multimedia,
            modelo_4.Portada,
            modelo_5.Inversionista,
            modelo_6.Usuario,
            modelo_7.Contratista,
            modelo_8.Arquitecto,
            modelo_9.Constructora,
        ]);
        conexion.sync();
        this.app.use((req, res, next) => {
            let origin = req.headers.origin;
            if (origin && this._url_allow_origin.indexOf(origin.toString()) > -1) {
                res.setHeader('Access-Control-Allow-Origin', origin);
            }
            res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
        this.app.use(cookieParser());
        this.app.use(session({ secret: '01f4845/564564/6@@fas588--[[}++', resave: true, saveUninitialized: true }));
        this.app.use(passport.initialize());
        this.app.use(passport.session());
        morgan('combined', { skip: function (req, res) { return res.statusCode < 400; } });
    }
    apiRutas() {
        let rutas = ruteo_1.Ruteador.init([
            new ruta_1.ProyectoRouter().rutas(),
            new ruta_2.ContactoRouter().rutas(),
            new ruta_3.MultimediaRouter().rutas(),
            new ruta_4.PortadaRouter().rutas(),
            new ruta_5.InversionistaRouter().rutas(),
            new ruta_6.UsuarioRouter().rutas(),
            new ruta_7.ContratistaRouter().rutas(),
            new ruta_8.ArquitectoRouter().rutas(),
            new ruta_9.ConstructoraRouter().rutas(),
        ]);
        // this.app.use(subdomain('api', rutas.route))
        this.app.use(rutas.route);
    }
}
exports.Server = Server;
