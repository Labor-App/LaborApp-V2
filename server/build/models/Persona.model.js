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
class Persona {
    constructor(tipoDocumentoPersona, numeroDocumentoPersona, nombresPersona, apellidosPersona, correoPersona, fechaNacimientoPersona, direccionPersona, generoPersona, lugarExpedicionCedulaPersona, contrasenaPersona, codigoCiudad) {
        this.tipoDocumentoPersona = tipoDocumentoPersona;
        this.numeroDocumentoPersona = numeroDocumentoPersona;
        this.nombresPersona = nombresPersona;
        this.apellidosPersona = apellidosPersona;
        this.correoPersona = correoPersona;
        this.fechaNacimientoPersona = fechaNacimientoPersona;
        this.direccionPersona = direccionPersona;
        this.generoPersona = generoPersona;
        this.lugarExpedicionCedulaPersona = lugarExpedicionCedulaPersona;
        this.contrasenaPersona = contrasenaPersona;
        this.codigoCiudad = codigoCiudad;
    }
    static login(usuario) {
        return database_1.default.query(`SELECT * FROM Personas WHERE correoPersona = '${usuario.correoPersona}' AND contrasenaPersona IS NOT NULL LIMIT 1`)
            .then((result) => {
            if (result.length === 0 || result[0].contrasenaPersona === null) {
                return {
                    ok: false,
                    err: {
                        message: '(Email) o Contraseña incorrectos'
                    }
                };
            }
            return {
                ok: true,
                message: 'Usuario logeado',
                usuario: result[0]
            };
        })
            .catch((error) => {
            console.log(error);
            return {
                ok: false,
                err: {
                    message: 'Ocurrio un error en el logeo',
                },
                error
            };
        });
    }
    static guardarUsuario(newUsuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const existeArreglo = yield Promise.all([index_models_1.ConsultorioJuridico.existeConsultorioJuridico(newUsuario), index_models_1.PersonaNatural.existePersonaNatural(newUsuario)]);
            let existe = false;
            for (let position of existeArreglo) {
                if (position) {
                    existe = position;
                }
            }
            if (existe) {
                return yield this.actualizarPersona(newUsuario);
            }
            return database_1.default.query('INSERT INTO Personas set ?', [newUsuario])
                .then(result => {
                return {
                    ok: true,
                    message: 'Usuario guardada exitosamente'
                };
            })
                .catch((err) => {
                if (err.code === 'ER_DUP_ENTRY') {
                    return {
                        ok: false,
                        err: {
                            message: 'Usuario ya existente'
                        }
                    };
                }
                console.log(err);
                return {
                    ok: false,
                    err: {
                        message: 'Ocurrio un error al guardar el usuario'
                    }
                };
            });
        });
    }
    static actualizarPersona(newUsuario) {
        return database_1.default.query(`UPDATE Personas set ? WHERE numeroDocumentoPersona = ${newUsuario.numeroDocumentoPersona} AND correoPersona = '${newUsuario.correoPersona}'`, [newUsuario])
            .then(result => {
            return {
                ok: true,
                message: 'Usuario Modificado exitosamente'
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
    }
    static obtenerEmpresas() {
        return database_1.default.query('SELECT * FROM Personas')
            .then(result => {
            return {
                ok: true,
                message: 'Query exitoso',
                result
            };
        })
            .catch((error) => {
            return {
                ok: false,
                err: {
                    message: 'Query fallido',
                },
                error
            };
        });
    }
}
exports.Persona = Persona;
