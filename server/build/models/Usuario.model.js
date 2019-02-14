"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database/database"));
class Usuario {
    constructor(correoPersona, nombresPersona, cedulaPersona, apellidosPersona, fechaNacimientoPersona, codigoDaneMunicipio) {
        this.correoPersona = correoPersona;
        this.nombresPersona = nombresPersona;
        this.cedulaPersona = cedulaPersona;
        this.apellidosPersona = apellidosPersona;
        this.fechaNacimientoPersona = fechaNacimientoPersona;
        this.codigoDaneMunicipio = codigoDaneMunicipio;
    }
    static login(usuario) {
        return database_1.default.query(`SELECT * FROM Personas WHERE correoPersona = '${usuario.correoPersona}' LIMIT 1`)
            .then((result) => {
            if (result.length === 0) {
                return {
                    ok: false,
                    err: {
                        message: 'Email o Contraseña incorrectos'
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
            return {
                ok: false,
                err: {
                    message: 'Ocurrio un error al guardar el usuario'
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
exports.Usuario = Usuario;
