"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require("passport");
const localStrategy = require("passport-local");
const facebookStrategy = require("passport-facebook");
const twitterStrategy = require("passport-twitter");
const googleStrategy = require("passport-google-oauth20");
const jwt = require("jsonwebtoken");
const config_1 = require("../../conf/config");
const Avatar_1 = require("./../modelos/Avatar");
const LlaveSocial_1 = require("./../modelos/LlaveSocial");
const Usuario_1 = require("./../modelos/Usuario");
class AutentificacionController {
    //  Inicia el constructor
    constructor() {
        // Termina el constructor
        // 
        // Metodos
        this.token = (req, res, next) => jwt.verify(req.params.token, config_1.config.token_secreto, (err, decoded) => {
            if (err)
                res.send({ success: false, message: 'token invlid' });
            else
                res.json(decoded);
        });
        this.login = (req, res, next) => passport.authenticate('login', (err, user, info) => {
            if (err)
                return next(err);
            if (!user)
                return res.send({ success: false, message: 'Incorrect username or password.' });
            req.login(user, (err) => {
                if (err)
                    return next(err);
                var token = jwt.sign({
                    user: user
                }, config_1.config.token_secreto, { expiresIn: '24h' });
                return res.send({ success: true, message: 'Authentication succeeded', token: token });
            });
        })(req, res, next);
        this.registro = (req, res, next) => passport.authenticate('registro', (err, user, info) => {
            if (err)
                return next(err);
            if (!user)
                return res.send({ success: false, message: info });
            req.login(user, (err) => {
                if (err)
                    return next(err);
                var token = jwt.sign({
                    user: user
                }, config_1.config.token_secreto, { expiresIn: '24h' });
                return res.send({ success: true, message: 'Authentication succeeded', token: token });
            });
        })(req, res, next);
        this.tokenSocial = (req, res, next) => Usuario_1.Usuario.findOne({ where: { 'correo': req.user.correo } })
            .then(usering => jwt.sign({ user: usering }, config_1.config.token_secreto, { expiresIn: '1h' }))
            .then(token => res.redirect('http://lvh.me:4200/iniciar-sesion/' + token));
        this.avatar = (req, res, next) => Usuario_1.Usuario.findById(req.params.id, { include: [LlaveSocial_1.LlaveSocial] })
            .then(user => user ? res.status(200).json(user.getAvatar()) : null);
        this.facebook = (req, res, next) => passport.authenticate('facebook', { scope: ['email'] })(req, res, next);
        this.facebookcallback = (req, res, next) => passport.authenticate('facebook', { successRedirect: '/token', failureRedirect: '/' })(req, res, next);
        this.twitter = (req, res, next) => passport.authenticate('twitter', { scope: ['email'] })(req, res, next);
        this.twittercallback = (req, res, next) => passport.authenticate('twitter', { successRedirect: '/token', failureRedirect: '/' })(req, res, next);
        this.google = (req, res, next) => passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/plus.profile.emails.read'] })(req, res, next);
        this.googlecallback = (req, res, next) => passport.authenticate('google', { successRedirect: '/token', failureRedirect: '/' })(req, res, next);
        this.instagram = (req, res, next) => passport.authenticate('instagram', { scope: ['basic', 'public_content', 'follower_list', 'comments', 'relationships', 'likes'] })(req, res, next);
        this.instagramcallback = (req, res, next) => passport.authenticate('instagram', { successRedirect: '/token', failureRedirect: '/' })(req, res, next);
        passport.serializeUser((user, done) => done(null, { id: user.id, nombre: user.nombre, correo: user.correo }));
        passport.deserializeUser((user, done) => done(null, user));
        passport.use('login', new localStrategy.Strategy({
            usernameField: 'correo', passwordField: 'password', passReqToCallback: true
        }, (req, username, password, done) => Usuario_1.Usuario.findOne({ where: { 'correo': username }, include: [LlaveSocial_1.LlaveSocial] })
            .then(user => {
            if (user == null)
                return done(null, false);
            if (user.autenticacion(password))
                return done(null, user);
            return done(null, false);
        })));
        passport.use('registro', new localStrategy.Strategy({
            usernameField: 'correo', passwordField: 'password', passReqToCallback: true
        }, (req, username, password, done) => Usuario_1.Usuario.findOrCreate({ where: { 'correo': username }, include: [LlaveSocial_1.LlaveSocial], defaults: req.body })
            .spread((user, created) => created ? done(null, user) : done(null, false)).error(err => done(err, null))));
        passport.use('twitter', new twitterStrategy.Strategy({
            consumerKey: config_1.config.keys.twitter.consumerKey,
            consumerSecret: config_1.config.keys.twitter.consumerSecret,
            callbackURL: config_1.config.keys.twitter.callbackURL,
            includeEmail: true
        }, (token, tokenSecret, profile, done) => process.nextTick(() => this.socializar('tw_id', 'fb_avatar', profile, done))));
        passport.use('facebook', new facebookStrategy.Strategy({
            clientID: config_1.config.keys.facebook.clientID,
            clientSecret: config_1.config.keys.facebook.clientSecret,
            callbackURL: config_1.config.keys.facebook.callbackURL,
            profileFields: [
                'id',
                'emails',
                'displayName',
                'picture',
                'cover',
                'first_name',
                'last_name',
                'locale',
                'gender',
                'hometown'
            ]
        }, (accessToken, refreshToken, profile, done) => {
            process.nextTick(() => this.socializar('fb_id', 'fb_avatar', profile, done));
        }));
        passport.use('google', new googleStrategy.Strategy({
            clientID: config_1.config.keys.google.clientID,
            clientSecret: config_1.config.keys.google.clientSecret,
            callbackURL: config_1.config.keys.google.callbackURL,
        }, (token, tokenSecret, profile, done) => process.nextTick(() => this.socializar('gl_id', 'fb_avatar', profile, done))));
    }
    socializar(red_id, avatar_id, profile, done) {
        let avatar_image = profile.photos != undefined ? profile.photos[0].value : 'assets/images/perfil.png';
        LlaveSocial_1.LlaveSocial.find({
            where: {
                [red_id]: profile.id
            },
            include: [{ model: Usuario_1.Usuario }, { model: Avatar_1.Avatar }]
        })
            .then(SocialKey => {
            if (SocialKey) {
                // console.log(SocialKey.avatar)
                // console.log(SocialKey.usuario)
                SocialKey.avatar ?
                    SocialKey.avatar.update({ [avatar_id]: avatar_image })
                    :
                        SocialKey.$create('avatar', { [avatar_id]: avatar_image });
                SocialKey.usuario ?
                    SocialKey.usuario.update({ nombre: profile.displayName }).then(user => done(null, user)) : null;
            }
            else {
                Usuario_1.Usuario.findOrCreate({
                    where: {
                        correo: profile.emails[0].value
                    },
                    defaults: {
                        nombre: profile.displayName,
                        correo: profile.emails[0].value,
                        sexo: profile.gender,
                    },
                    include: [LlaveSocial_1.LlaveSocial]
                }).spread((user, created) => created ? this.usuarioCreado(user, red_id, avatar_id, profile, done, avatar_image) : this.usuarioEncontrado(user, red_id, avatar_id, profile, done, avatar_image));
            }
        }, (err) => done(err));
    }
    usuarioEncontrado(user, red_id, avatar_id, profile, done, avatar_image) {
        if (user.llaveSocial) {
            user.llaveSocial.avatar ? user.llaveSocial.avatar.update({ [avatar_id]: avatar_image }) : user.llaveSocial.$create('avatar', { [avatar_id]: avatar_image });
            user.llaveSocial.update({ [red_id]: profile.id }).then(algo => done(null, user));
        }
        else {
            user.$create('LlaveSocial', { [red_id]: profile.id })
                .then((keysito) => {
                keysito.$create('Avatar', { [avatar_id]: avatar_image }).then(alg => done(null, user));
            });
        }
    }
    usuarioCreado(user, red_id, avatar_id, profile, done, avatar_image) {
        user.$create('LlaveSocial', { [red_id]: profile.id })
            .then((keysito) => {
            keysito.$create('Avatar', { [avatar_id]: avatar_image }).then(alg => done(null, user));
        });
    }
}
exports.AutentificacionController = AutentificacionController;
