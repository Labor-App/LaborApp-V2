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
class ConflictoVacaciones {
    constructor(idConflictoVacaciones, fechaInicioContrato, fechaFinalContrato, fechaUltimasVacaciones, montoDinero_Vacaciones, idDemandaPersonaNatural, idDemandaEmpresa) {
        this.idConflictoVacaciones = idConflictoVacaciones;
        this.fechaInicioContrato = fechaInicioContrato;
        this.fechaFinalContrato = fechaFinalContrato;
        this.fechaUltimasVacaciones = fechaUltimasVacaciones;
        this.montoDinero_Vacaciones = montoDinero_Vacaciones;
        this.idDemandaPersonaNatural = idDemandaPersonaNatural;
        this.idDemandaEmpresa = idDemandaEmpresa;
    }
    static guardarConflictoPagoSalario(conflictoVacaciones) {
        return __awaiter(this, void 0, void 0, function* () {
            return database_1.default.query("INSERT INTO conflictoVacaciones set ?", [conflictoVacaciones])
                .then(result => {
                return {
                    ok: true,
                    message: 'ConflictoVacaciones guardada exitosamente'
                };
            })
                .catch((err) => {
                if (err.code === 'ER_DUP_ENTRY') {
                    return {
                        ok: false,
                        message: 'ConflictoVacaciones ya existente'
                    };
                }
                return {
                    ok: false,
                    message: 'Ocurrio un error al guardar la ConflictoVacaciones',
                    err
                };
            });
        });
    }
}
exports.ConflictoVacaciones = ConflictoVacaciones;
