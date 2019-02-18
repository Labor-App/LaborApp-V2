"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = require("path");
class IndexRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.all('*', (req, res) => {
            res.sendFile(path_1.resolve(__dirname + '/../front/LaborApp/index.html'));
        });
    }
}
const pruebaRouter = new IndexRouter();
exports.default = pruebaRouter.router;
