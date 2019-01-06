"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const demandado_controllers_1 = __importDefault(require("../controllers/demandado.controllers"));
class DemandadoRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        //Demandados Empresa
        this.router.post('/guardar/empresa', demandado_controllers_1.default.guardarEmpresa);
        this.router.get('/empresas', demandado_controllers_1.default.getEmpresas);
        //Demandados Natural
        this.router.post('/guardar/natural', demandado_controllers_1.default.guardarNatural);
        this.router.get('/naturales', demandado_controllers_1.default.getNatural);
    }
}
const demandadoRouter = new DemandadoRouter();
exports.default = demandadoRouter.router;
