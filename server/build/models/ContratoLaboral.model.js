"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database/database"));
class ContratoLaboral {
    constructor(idContrato, tipoContrato, fechaInicioContrato, fechaFinalContrato, ultimoSalario, descripcionFunciones, tipoDocumentoPersona, numeroDocumentoPersona, IdPersonaNatural, NItEmpresa) {
        this.idContrato = idContrato;
        this.tipoContrato = tipoContrato;
        this.fechaInicioContrato = fechaInicioContrato;
        this.fechaFinalContrato = fechaFinalContrato;
        this.ultimoSalario = ultimoSalario;
        this.descripcionFunciones = descripcionFunciones;
        this.tipoDocumentoPersona = tipoDocumentoPersona;
        this.numeroDocumentoPersona = numeroDocumentoPersona;
        this.IdPersonaNatural = IdPersonaNatural;
        this.NItEmpresa = NItEmpresa;
    }
    static guardarContraatoLaboral(contratoLaboral) {
        return __awaiter(this, void 0, void 0, function* () {
            contratoLaboral.tipoDocumentoPersona = contratoLaboral.tipoDocumentoPersona.toLowerCase();
            contratoLaboral.tipoContrato = contratoLaboral.tipoContrato.toLowerCase();
            return database_1.default.query(`INSERT INTO contratoLaboral set ?`, [contratoLaboral])
                .then((result) => {
                return {
                    ok: true,
                    message: 'Contrato Laboral guardado exitosamente'
                };
            })
                .catch((err) => {
                if (err.code === 'ER_DUP_ENTRY') {
                    return {
                        ok: false,
                        message: 'Contrato Laboral ya existente'
                    };
                }
                return {
                    ok: false,
                    message: 'Ocurrio un error al guardar la Contrato Laboral',
                    err
                };
            });
        });
    }
}
exports.ContratoLaboral = ContratoLaboral;
