"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ContratoRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.post('/contrato', ContratoController);
        this.router.get('/contrato', ContratoController);
        this.router.get('/contrato/:id', ContratoController);
        this.router.put('/contrato/:id', ContratoController);
        this.router.delete('/contrato/:id', ContratoController);
    }
}
const contratoRouter = new ContratoRouter();
exports.default = contratoRouter.router;
