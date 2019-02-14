"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database/database"));
class Empresa {
    constructor(NItEmpresa, nombreEmpresaRS, telefonoEmpresa, emailEmpresa, direccionEmpresa, codigoDaneMunicipio) {
        this.NItEmpresa = NItEmpresa;
        this.nombreEmpresaRS = nombreEmpresaRS;
        this.telefonoEmpresa = telefonoEmpresa;
        this.emailEmpresa = emailEmpresa;
        this.direccionEmpresa = direccionEmpresa;
        this.codigoDaneMunicipio = codigoDaneMunicipio;
    }
    static guardarEmpresa(empresa) {
        return database_1.default.query("INSERT INTO Empresa set ?", [empresa])
            .then(result => {
            return {
                ok: true,
                message: 'Empresa guardada exitosamente'
            };
        })
            .catch((err) => {
            if (err.code === 'ER_DUP_ENTRY') {
                return {
                    ok: true,
                    message: 'Empresa ya existente'
                };
            }
            return {
                ok: false,
                message: 'Ocurrio un error al guardar la empresa'
            };
        });
    }
    static obtenerEmpresas() {
        return database_1.default.query('SELECT * FROM Empresa')
            .then(result => {
            return {
                ok: true,
                message: 'Query exitoso',
                result
            };
        })
            .catch(err => {
            console.log(err);
        });
    }
}
exports.Empresa = Empresa;
