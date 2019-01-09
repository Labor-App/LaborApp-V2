"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controllers_1 = __importDefault(require("../controllers/usuario.controllers"));
class UsuarioRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.post('/guardar', usuario_controllers_1.default.guardar);
        this.router.get('/usuarios', usuario_controllers_1.default.getUsuarios);
    }
}
const usuarioRouter = new UsuarioRouter();
exports.default = usuarioRouter.router;