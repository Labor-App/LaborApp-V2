"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class CorreoRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.post('/correo');
        this.router.get('/correo/');
        this.router.get('/correo/:id');
        this.router.put('/correo/:id');
        this.router.delete('/correo/:id');
    }
}
const correoRouter = new CorreoRouter();
exports.default = correoRouter.router;
