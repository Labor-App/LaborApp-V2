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
//Database conection
const database_1 = __importDefault(require("../database/database"));
class UsuarioControllers {
    /*
      METODOS PARA UN USUARIO
    */
    //POST = Guarda todos los Usuarios
    guardar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            try {
                const result = yield database_1.default.query('INSERT INTO Personas set ?', [body]);
                res.status(200).json({
                    ok: true,
                    result
                });
            }
            catch (err) {
                const error = err;
                //Mostrando Por consola el error
                console.log('Error Al insertar Los datos:\n', {
                    ok: false,
                    err: error.fatal,
                    errCode: error.code,
                    errSqlState: error.sqlState,
                    errSqlMessage: error.sqlMessage
                });
                //Respondiendo con el error
                res.status(500).json({
                    ok: false,
                    err: 'Error al insertar datos en DB',
                    errSql: error.sqlMessage,
                });
            }
        });
    }
    //GET = Retorna todos los Usuarios
    getUsuarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield database_1.default.query('SELECT * FROM Personas');
                res.status(200).json({
                    ok: true,
                    result
                });
            }
            catch (err) {
                //Typado de sql  errores
                const error = err;
                //Mostrando Por consola el error
                console.log('Error Al insertar Los datos:\n', {
                    ok: false,
                    err: error.fatal,
                    errCode: error.code,
                    errSqlState: error.sqlState,
                    errSqlMessage: error.sqlMessage
                });
                //Respondiendo con el error
                res.status(500).json({
                    ok: false,
                    err: 'Error al insertar datos en DB',
                    errSql: error.sqlMessage,
                });
            }
        });
    }
}
const usuarioControllers = new UsuarioControllers();
exports.default = usuarioControllers;
