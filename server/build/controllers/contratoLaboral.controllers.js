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
const index_models_1 = require("../models/index.models");
class ContratoLaboralContro {
    //=====================================================================
    // Controller Para Guardar una ContratoLaboral (METODO = POST)
    //=====================================================================
    /*
    * Este Controller se encarga de guardar ContratoLaboral
    */
    static guardarPersona(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let body = req.body;
            if (req.body == null || req.body == undefined) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: 'Error al enviar datos del front'
                    }
                });
            }
            const databaseRes = yield index_models_1.ContratoLaboral.guardarContraatoLaboral(new index_models_1.ContratoLaboral(undefined, body['tipoContrato'], body['fechaInicioContrato'], body['fechaFinalContrato'], body['ultimoSalario'], body['descripcionFunciones'], body['tipoDocumentoPersona'], body['numeroDocumentoPersona'], body['IdPersonaNatural'], body['NItEmpresa']));
            if (databaseRes['message'] === 'Usuario ya existente') {
                return res.status(200).json(databaseRes);
            }
            ;
            if (databaseRes['ok'] === false) {
                return res.status(400).json(databaseRes);
            }
            ;
            return res.status(200).json(databaseRes);
        });
    }
    //=====================================================================
    // Controller Para Obtener Todas las Personas (METODO = GET)
    //=====================================================================
    /*
    * Este Controller se encarga de enviar todas las personas en la DB
    */
    static obtenerPersona(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const databaseRes = yield index_models_1.ContratoLaboral;
            if (databaseRes['ok'] === false) {
                return res.status(400).json(databaseRes);
            }
            ;
            return res.status(200).json(databaseRes);
        });
    }
    //=====================================================================
    // Controller Para Obtener una Persona (METODO = GET)
    //=====================================================================
    /*
    * Este Controller se encarga de retornar una sola persona
    */
    static obtenerUnaPersona(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let identificacion = req.params.id;
            let tipoIdentificacion = req.params.tipoId;
            const databaseRes = yield index_models_1.ContratoLaboral;
            if (databaseRes['ok'] === false) {
                return res.status(400).json(databaseRes);
            }
            ;
            return res.status(200).json(databaseRes);
        });
    }
    //=====================================================================
    // Controller Para Actualizar una Persona (METODO = PUT)
    //=====================================================================
    /*
    * Este Controller se encarga de actualizar una sola persona mediante el id
    */
    static actualizarPersona(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let body = req.body;
            const databaseRes = yield index_models_1.ContratoLaboral;
            if (databaseRes['ok'] === false) {
                return res.status(400).json(databaseRes);
            }
            ;
            return res.status(200).json(databaseRes);
        });
    }
    //=====================================================================
    // Controller Para Borrar una Persona (METODO = DELETE)
    //=====================================================================
    /*
    * Este Controller se encarga de Borrar una sola persona
    */
    static borrarPersona(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let identificacion = req.params.id;
            let tipoIdentificacion = req.params.tipoId;
            const databaseRes = yield index_models_1.ContratoLaboral;
            if (databaseRes['ok'] === false) {
                return res.status(400).json(databaseRes);
            }
            ;
            return res.status(200).json(databaseRes);
        });
    }
}
exports.ContratoLaboralContro = ContratoLaboralContro;
