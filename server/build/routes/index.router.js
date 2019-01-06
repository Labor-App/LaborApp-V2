"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const demanda_router_1 = __importDefault(require("./demanda.router"));
const usuario_router_1 = __importDefault(require("./usuario.router"));
const demandado_routes_1 = __importDefault(require("./demandado.routes"));
class IndexRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.use('/demanda', demanda_router_1.default);
        this.router.use('/usuario', usuario_router_1.default);
        this.router.use('/demandado', demandado_routes_1.default);
    }
}
const indexRouter = new IndexRouter();
exports.default = indexRouter.router;
