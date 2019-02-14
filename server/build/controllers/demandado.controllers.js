"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//Models
const index_models_1 = require("../models/index.models");
class DemandadoControllers {
    /*
      METODOS PARA DEMANDADOS DE TIPO JURIDICO
    */
    //POST = Guarda todos los demandados de tipo juridico
    guardarEmpresa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const databaseRes = yield index_models_1.Empresa.guardarEmpresa(req.body);
            if (databaseRes['message'].includes('ya existente')) {
                return res.status(200).json(databaseRes);
            }
            ;
            if (databaseRes['ok'] === false) {
                return res.status(500).json(databaseRes);
            }
            ;
            return res.status(200).json(databaseRes);
        });
    }
    //GET = Retorna todos los demandados de tipo juridico
    getEmpresas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const databaseRes = yield index_models_1.Empresa.obtenerEmpresas();
            if (databaseRes['ok'] === false) {
                return res.status(304).json(databaseRes);
            }
            ;
            return res.status(200).json(databaseRes);
        });
    }
    /*
      METODOS PARA DEMANDADOS DE TIPO NATURAL
    */
    //POST = Guarda todos los demandados de tipo natural.
    guardarNatural(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    //GET = Retorna todos los demandados de tipo natural.
    getNatural(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
const demandadoControllers = new DemandadoControllers();
exports.default = demandadoControllers;
