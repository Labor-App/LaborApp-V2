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
const index_models_1 = require("./index.models");
class Empresa {
    constructor(NItEmpresa, nombreEmpresaRS, direccionEmpresa, codigoCiudad, telefonoEmpresa, emailEmpresa, tipoDocumentoPersona, numeroDocumentoPersona, correoPersona) {
        this.NItEmpresa = NItEmpresa;
        this.nombreEmpresaRS = nombreEmpresaRS;
        this.direccionEmpresa = direccionEmpresa;
        this.codigoCiudad = codigoCiudad;
        this.telefonoEmpresa = telefonoEmpresa;
        this.emailEmpresa = emailEmpresa;
        this.tipoDocumentoPersona = tipoDocumentoPersona;
        this.numeroDocumentoPersona = numeroDocumentoPersona;
        this.correoPersona = correoPersona;
    }
    static guardarEmpresa(empresa, persona) {
        return __awaiter(this, void 0, void 0, function* () {
            if (persona != undefined) {
                persona.codigoCiudad = empresa.codigoCiudad;
                empresa.tipoDocumentoPersona = persona.tipoDocumentoPersona;
                empresa.numeroDocumentoPersona = persona.numeroDocumentoPersona;
                empresa.correoPersona = persona.correoPersona;
                yield index_models_1.Persona.guardarUsuario(persona);
                yield index_models_1.PersonaNatural.guardarPersonaNatural(new index_models_1.PersonaNatural(undefined, persona.tipoDocumentoPersona, persona.numeroDocumentoPersona, persona.correoPersona));
            }
            return database_1.default.query("INSERT INTO Empresa set ?", [empresa])
                .then(result => {
                return {
                    ok: true,
                    message: 'Empresa guardada exitosamente'
                };
            })
                .catch((err) => {
                if (err.code === 'ER_DUP_ENTRY') {
                    if (persona != undefined) {
                        return this.actualizarEmpresa(empresa);
                    }
                    return {
                        ok: false,
                        message: 'Empresa ya existente'
                    };
                }
                return {
                    ok: false,
                    message: 'Ocurrio un error al guardar la empresa',
                    err
                };
            });
        });
    }
    static actualizarEmpresa(empresa) {
        return database_1.default.query(`UPDATE Empresa set ? WHERE NItEmpresa = '${empresa.NItEmpresa}'`, [empresa])
            .then(result => {
            return {
                ok: true,
                message: 'Empresa Modificado exitosamente'
            };
        })
            .catch((err) => {
            console.log(err);
            return {
                ok: false,
                err: {
                    message: 'Ocurrio un error al modificar la Empresa'
                }
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
            return {
                ok: false,
                message: 'Query fallido',
                err
            };
        });
    }
}
exports.Empresa = Empresa;
