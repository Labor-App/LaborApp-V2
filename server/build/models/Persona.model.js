"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database/database"));
class Usuario {
    constructor(cedulaPersona, nombresPersona, apellidosPersona, fechaNacimientoPersona, correoPersona, codigoDaneMunicipio) {
        this.cedulaPersona = cedulaPersona;
        this.nombresPersona = nombresPersona;
        this.apellidosPersona = apellidosPersona;
        this.fechaNacimientoPersona = fechaNacimientoPersona;
        this.correoPersona = correoPersona;
        this.codigoDaneMunicipio = codigoDaneMunicipio;
    }
    static login(usuario) {
        return database_1.default.query(`SELECT * FROM Personas WHERE correoPersona = '${usuario.correoPersona}' LIMIT 1`)
            .then(console.log)
            .catch(err => console.log(err));
    }
}
exports.Usuario = Usuario;
