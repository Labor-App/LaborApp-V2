"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
//Database conection
const database_1 = __importDefault(require("../database/database"));
class UsuarioControllers {
    /*
      METODOS PARA UN USUARIO
    */
    //POST = login Usuario
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            try {
                const usuarioDB = yield database_1.default.query(`SELECT * FROM Personas WHERE correoPersona = '${body.correo}' LIMIT 1`);
                if (usuarioDB.length === 0) {
                    return res.status(400).json({
                        ok: false,
                        err: {
                            message: '(Usuario) o Contraseña incorrectos'
                        }
                    });
                }
                // if( !bcrypt.compareSync(body.password, usuarioDB[0].password) ){
                //   return res.status(400).json({
                //     ok: false,
                //     err: {
                //       message: 'Usuario o (Contraseña) incorrectos'
                //     }
                //
                //   })
                // }
                // delete usuarioDB[0].password;
                const cadocidad = 60 * 60 * 24 * 30;
                const token = jwt.sign({
                    usuario: usuarioDB[0],
                }, process.env.JWT_SECRET, { expiresIn: cadocidad });
                res.json({
                    ok: true,
                    usuario: usuarioDB[0],
                    token
                });
            }
            catch (err) {
                const error = err;
                //Mostrando Por consola el error
                console.log('Error Al logearse Los datos:\n', {
                    ok: false,
                    err: error.fatal,
                    errCode: error.code,
                    errSqlState: error.sqlState,
                    errSqlMessage: error.sqlMessage,
                    erro: err
                });
                //Respondiendo con el error
                res.status(500).json({
                    ok: false,
                    err: 'Error al logearse datos en DB',
                    errSql: error.sqlMessage,
                });
            }
        });
    }
    //POST = Guarda todos los Usuarios
    guardar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            if (body == null || body == undefined) {
                return res.status(404).json({
                    ok: false,
                    err: {
                        message: 'Error al enviar datos del front'
                    }
                });
            }
            const newUsuario = {
                cedulaPersona: body.cedulaPersona,
                correoPersona: body.correoPersona,
                apellidosPersona: body.apellidosPersona,
                nombresPersona: body.nombresPersona,
                fechaNacimientoPersona: body.fechaNacimientoPersona,
                codigoDaneMunicipio: body.codigoDaneMunicipio
            };
            try {
                const result = yield database_1.default.query('INSERT INTO Personas set ?', [newUsuario]);
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
                    err: {
                        message: 'Error al insertar datos en DB'
                    },
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
                console.log('Error Al obtener los datos:\n', {
                    ok: false,
                    err: error.fatal,
                    errCode: error.code,
                    errSqlState: error.sqlState,
                    errSqlMessage: error.sqlMessage
                });
                //Respondiendo con el error
                res.status(500).json({
                    ok: false,
                    err: 'Error Al obtener los datos',
                    errSql: error.sqlMessage,
                });
            }
        });
    }
}
const usuarioControllers = new UsuarioControllers();
exports.default = usuarioControllers;
