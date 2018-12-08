"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env = process.env.NODE_ENV; // 'dev' or 'prod'
class Config {
    constructor(NODE_ENV) {
        if (NODE_ENV == 'dev') {
            console.log("\x1b[33m", 'En Desarrolo');
            this._mode = NODE_ENV;
            this.desarrollo();
        }
        if (NODE_ENV == 'prod') {
            console.log("\x1b[32m", 'En Producción');
            this._mode = NODE_ENV;
            this.produccion();
        }
    }
    get urlAllowOrigin() {
        return this._url_allow_origin;
    }
    get mode() {
        return this._mode;
    }
    get token_secreto() {
        return this._token_secreto;
    }
    get app() {
        return this._app;
    }
    get db() {
        return this._db;
    }
    get keys() {
        return this._keys;
    }
    desarrollo() {
        this._url_allow_origin = ['http://localhost:4200', 'http://lvh.me:4200'];
        this._token_secreto = 'zukulencia';
        this._app = { port: 5000 };
        this._db = { host: '127.0.0.1', port: 3306, database: 'esimple', username: 'root', password: '1234', dialec: 'mysql' };
        this._keys = {
            facebook: {
                clientID: '870496999775638',
                clientSecret: '890cc3007255067044a4a862a6fcedfc',
                callbackURL: 'http://api.lvh.me:5000/login/facebook/callback'
            },
            google: {
                clientID: "65502020027-2hcilnkgsbeu4n0g1agt8fd2uicgkf0f.apps.googleusercontent.com",
                clientSecret: "ucfMnrabQOlmwwZp3gTFM4o8",
                callbackURL: "http://api.lvh.me:5000/login/google/callback"
            },
            twitter: {
                consumerKey: "OabNHqICoIV9WAviIb0gkpiom",
                consumerSecret: "4IFGuDpxM2QxxGvUlLafr8gnfES4bKSSE1tTWUS3xhXKQm4c28",
                callbackURL: "http://api.lvh.me:5000/login/twitter/callback"
            },
            instagram: {
                clientID: "54a3c81dabf94f89ae1e473e707f28d6",
                clientSecret: "c5b2a01a367c49f5a2d2f8f8e1cee94a",
                callbackURL: "http://api.lvh.me:5000/login/instagram/callback"
            }
        };
    }
    produccion() {
        this._url_allow_origin = ['https://esimplefront.herokuapp.com', 'https://admin.elgigantedelosazulejos.com.mx', 'https://elgigantedelosazulejos.com.mx', 'http://lvh.me:4200'];
        this._token_secreto = 'zukulenciamaspro';
        this._app = { port: 5000 };
        this._db = { host: 'us-cdbr-iron-east-01.cleardb.net', port: 3306, database: 'heroku_36f0b6cec16010f', username: 'b3c714d746612b', password: '98f8c0f6', dialec: 'mysql' };
        //-mysql://b3c714d746612b:98f8c0f6@us-cdbr-iron-east-01.cleardb.net/heroku_36f0b6cec16010f?reconnect=true
        this._keys = {
            facebook: {
                clientID: '870496999775638',
                clientSecret: '890cc3007255067044a4a862a6fcedfc',
                callbackURL: 'http://api.lvh.me:5000/login/facebook/callback'
            },
            google: {
                clientID: "65502020027-2hcilnkgsbeu4n0g1agt8fd2uicgkf0f.apps.googleusercontent.com",
                clientSecret: "ucfMnrabQOlmwwZp3gTFM4o8",
                callbackURL: "http://api.lvh.me:5000/login/google/callback"
            },
            twitter: {
                consumerKey: "OabNHqICoIV9WAviIb0gkpiom",
                consumerSecret: "4IFGuDpxM2QxxGvUlLafr8gnfES4bKSSE1tTWUS3xhXKQm4c28",
                callbackURL: "http://api.lvh.me:5000/login/twitter/callback"
            },
            instagram: {
                clientID: "54a3c81dabf94f89ae1e473e707f28d6",
                clientSecret: "c5b2a01a367c49f5a2d2f8f8e1cee94a",
                callbackURL: "http://api.lvh.me:5000/login/instagram/callback"
            }
        };
    }
}
let config = new Config(env);
exports.config = config;
