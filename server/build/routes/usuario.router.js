"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const persona_controllers_1 = require("../controllers/persona.controllers");
const autenticacion_middleware_1 = require("../middleware/autenticacion.middleware");
class PersonaRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.post('/login', persona_controllers_1.PersonaControllers.login);
        this.router.post('/renuevaToken', autenticacion_middleware_1.Autenticacion.verificacionToken, persona_controllers_1.PersonaControllers.renuevaToken);
        this.router.post('/guardar', persona_controllers_1.PersonaControllers.guardarPersona);
        this.router.get('/usuarios', /*Autenticacion.verificacionToken,*/ persona_controllers_1.PersonaControllers.obtenerPersona);
    }
}
const personaRouter = new PersonaRouter();
exports.default = personaRouter.router;
