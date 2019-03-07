"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database/database"));
class DemandaPersonaNatural {
    constructor(idDemandaPersonaNatural, fechaDemandaPersonaNatural, codigoCiudad, tipoDocumentoPersona, numeroDocumentoPersona, IdPersonaNatural, idContrato, fechaPropuestaRadicacionDemandaPersonaN, fecharRealRadicacionDemandaPersonaN, fechaPropuestaRadicacionDerechoPetiPersonaN, fecharRealRadicacionDerechoPetiPersonaN, informeDesicionFinalDemandaPersonaN, respuestaFinalDemandaersonaN) {
        this.idDemandaPersonaNatural = idDemandaPersonaNatural;
        this.fechaDemandaPersonaNatural = fechaDemandaPersonaNatural;
        this.codigoCiudad = codigoCiudad;
        this.tipoDocumentoPersona = tipoDocumentoPersona;
        this.numeroDocumentoPersona = numeroDocumentoPersona;
        this.IdPersonaNatural = IdPersonaNatural;
        this.idContrato = idContrato;
        this.fechaPropuestaRadicacionDemandaPersonaN = fechaPropuestaRadicacionDemandaPersonaN;
        this.fecharRealRadicacionDemandaPersonaN = fecharRealRadicacionDemandaPersonaN;
        this.fechaPropuestaRadicacionDerechoPetiPersonaN = fechaPropuestaRadicacionDerechoPetiPersonaN;
        this.fecharRealRadicacionDerechoPetiPersonaN = fecharRealRadicacionDerechoPetiPersonaN;
        this.informeDesicionFinalDemandaPersonaN = informeDesicionFinalDemandaPersonaN;
        this.respuestaFinalDemandaersonaN = respuestaFinalDemandaersonaN;
    }
    static guardarDemandaPersonaNatural(demandaPersonaNatural) {
        database_1.default.query(`INSERT INTO demandaPersonaNatural set ?`, [demandaPersonaNatural])
            .then(result => {
            return {
                ok: true,
                message: 'Demanda Persona Natural guardada exitosamente'
            };
        })
            .catch((err) => {
            if (err.code === 'ER_DUP_ENTRY') {
                return {
                    ok: false,
                    message: 'Demanda Persona Natural ya existente'
                };
            }
            return {
                ok: false,
                message: 'Ocurrio un error al guardar la Demanda Persona Natural',
                err
            };
        });
    }
}
exports.DemandaPersonaNatural = DemandaPersonaNatural;
