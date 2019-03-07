"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ContratoLaboralRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        // this.router.post('/contrato', ContratoLaboralController)
        //
        // this.router.get('/contrato', ContratoLaboralController)
        //
        // this.router.get('/contrato/:id', ContratoLaboralController)
        //
        // this.router.put('/contrato/:id', ContratoLaboralController)
        //
        // this.router.delete('/contrato/:id', ContratoLaboralController)
    }
}
const contratoLaboralRouter = new ContratoLaboralRouter();
exports.default = contratoLaboralRouter.router;
