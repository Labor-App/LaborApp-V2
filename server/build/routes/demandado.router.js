"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const demandado_controllers_1 = __importDefault(require("../controllers/demandado.controllers"));
class EmpresaRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        //=====================================================================
        // Guardar Una Empresa
        //=====================================================================
        this.router.post('/empresa', demandado_controllers_1.default.guardarEmpresa);
        //=====================================================================
        // Obtener Todas las empresas
        //=====================================================================
        this.router.get('/empresa', demandado_controllers_1.default.getEmpresas);
        //=====================================================================
        // Obtener Una Empresa
        //=====================================================================
        this.router.get('/empresa/:id', demandado_controllers_1.default.getEmpresas);
        //=====================================================================
        // Actualizar Una Empresa
        //=====================================================================
        this.router.put('/empresa/:id', demandado_controllers_1.default.getEmpresas);
        //=====================================================================
        // Borrar Una Empresa
        //=====================================================================
        this.router.delete('/empresa/:id', demandado_controllers_1.default.getEmpresas);
    }
}
const empresaRouter = new EmpresaRouter();
exports.default = empresaRouter.router;
