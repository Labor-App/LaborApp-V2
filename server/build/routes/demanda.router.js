"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const demanda_controllers_1 = __importDefault(require("../controllers/demanda.controllers"));
class DemandaRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get('/generar/:nit/:identificacion', demanda_controllers_1.default.generarPdf);
        this.router.get('/enviar/:identificacion', demanda_controllers_1.default.enviapdf);
        this.router.get('/descargar', demanda_controllers_1.default.descargarPdf);
    }
}
const demandaRouter = new DemandaRouter();
exports.default = demandaRouter.router;
