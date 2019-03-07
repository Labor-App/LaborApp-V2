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
class PersonaNatural {
    constructor(IdPersonaNatural, tipoDocumentoPersona, numeroDocumentoPersona) {
        this.IdPersonaNatural = IdPersonaNatural;
        this.tipoDocumentoPersona = tipoDocumentoPersona;
        this.numeroDocumentoPersona = numeroDocumentoPersona;
    }
    static documentoUnico(documento, tipoDeDocumento) {
        switch (tipoDeDocumento.toLowerCase()) {
            case 'cedulaciudadania':
                return Number('001' + `${documento}`);
            default:
                return Number('001' + `${documento}`);
        }
    }
    static guardarPersonaNatural(personaNatural, persona) {
        return __awaiter(this, void 0, void 0, function* () {
            if (persona != undefined) {
                yield index_models_1.Persona.guardarPersona(persona, '');
            }
            personaNatural.IdPersonaNatural = this.documentoUnico(personaNatural.numeroDocumentoPersona, personaNatural.tipoDocumentoPersona);
            return database_1.default.query(`
      INSERT INTO PersonaNatural
      set IdPersonaNatural = ?,
      tipoDocumentoPersona = ?,
      numeroDocumentoPersona = ?`, [personaNatural.IdPersonaNatural,
                personaNatural.tipoDocumentoPersona,
                personaNatural.numeroDocumentoPersona])
                .then(result => {
                return {
                    ok: true,
                    message: 'Persona Natural guardado exitosamente'
                };
            })
                .catch((error) => {
                if (error.code === 'ER_DUP_ENTRY') {
                    return {
                        ok: false,
                        err: {
                            message: 'Persona Natural ya existente'
                        }
                    };
                }
                return {
                    ok: false,
                    err: {
                        message: 'Ocurrio un error al guardar el Persona Natural'
                    },
                    error
                };
            });
        });
    }
    static actualizarPersonaNatural(newPersonaNatural) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield database_1.default.query(`UPDATE PersonaNatural set ? WHERE numeroDocumentoPersona = ${newPersonaNatural.numeroDocumentoPersona} AND tipoDocumentoPersona = ${newPersonaNatural.tipoDocumentoPersona}`)
                .then(result => {
                return {
                    ok: true,
                    message: 'PersonaNatural Modificado exitosamente'
                };
            })
                .catch((err) => {
                console.log(err);
                return {
                    ok: false,
                    err: {
                        message: 'Ocurrio un error al modificar el usuario'
                    }
                };
            });
        });
    }
    static obtenerPersonaNatural() {
        return database_1.default.query('SELECT * FROM PersonaNatural')
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
exports.PersonaNatural = PersonaNatural;
