"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controllers_1 = __importDefault(require("../controllers/usuario.controllers"));
const autenticacion_middleware_1 = require("../middleware/autenticacion.middleware");
class UsuarioRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.post('/login', usuario_controllers_1.default.login);
        this.router.post('/renuevaToken', autenticacion_middleware_1.Autenticacion.verificacionToken, usuario_controllers_1.default.renuevaToken);
        this.router.post('/guardar', usuario_controllers_1.default.guardar);
        this.router.get('/usuarios', autenticacion_middleware_1.Autenticacion.verificacionToken, usuario_controllers_1.default.getUsuarios);
    }
}
const usuarioRouter = new UsuarioRouter();
exports.default = usuarioRouter.router;
