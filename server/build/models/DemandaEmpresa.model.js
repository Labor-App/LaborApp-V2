"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database/database"));
class DemandaEmpresa {
    constructor(idDemandaEmpresa, fechaDemandaEmpresa, codigoCiudad, tipoDocumentoPersona, numeroDocumentoPersona, NItEmpresa, idContrato, fechaPropuestaRadicacionDemandaEmpresa, fecharRealRadicacionDemandaEmpresa, fechaPropuestaRadicacionDerechoPetiEmpresa, fecharRealRadicacionDerechoPetiEmpresa, informeDesicionFinalDemandaEmpresa, respuestaFinalDemandaEmpresa) {
        this.idDemandaEmpresa = idDemandaEmpresa;
        this.fechaDemandaEmpresa = fechaDemandaEmpresa;
        this.codigoCiudad = codigoCiudad;
        this.tipoDocumentoPersona = tipoDocumentoPersona;
        this.numeroDocumentoPersona = numeroDocumentoPersona;
        this.NItEmpresa = NItEmpresa;
        this.idContrato = idContrato;
        this.fechaPropuestaRadicacionDemandaEmpresa = fechaPropuestaRadicacionDemandaEmpresa;
        this.fecharRealRadicacionDemandaEmpresa = fecharRealRadicacionDemandaEmpresa;
        this.fechaPropuestaRadicacionDerechoPetiEmpresa = fechaPropuestaRadicacionDerechoPetiEmpresa;
        this.fecharRealRadicacionDerechoPetiEmpresa = fecharRealRadicacionDerechoPetiEmpresa;
        this.informeDesicionFinalDemandaEmpresa = informeDesicionFinalDemandaEmpresa;
        this.respuestaFinalDemandaEmpresa = respuestaFinalDemandaEmpresa;
    }
    static guardarDemandaPersonaNatural(demandaEmpresa) {
        database_1.default.query(`INSERT INTO demandaPersonaNatural set ?`, [demandaEmpresa])
            .then(result => {
            return {
                ok: true,
                message: 'Demanda Empresa guardada exitosamente'
            };
        })
            .catch((err) => {
            if (err.code === 'ER_DUP_ENTRY') {
                return {
                    ok: false,
                    message: 'Demanda Empresa ya existente'
                };
            }
            return {
                ok: false,
                message: 'Ocurrio un error al guardar la Demanda Empresa',
                err
            };
        });
    }
}
exports.DemandaEmpresa = DemandaEmpresa;
