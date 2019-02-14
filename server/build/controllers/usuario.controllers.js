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
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
const index_models_1 = require("../models/index.models");
class UsuarioControllers {
    /*
      METODOS PARA UN USUARIO
    */
    //POST = login Usuario
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const databaseRes = yield index_models_1.Usuario.login(new index_models_1.Usuario(req.body.email));
            if (databaseRes['ok'] === false) {
                return res.status(200).json(databaseRes);
            }
            // if( !bcrypt.compareSync(req.body.password, databaseRes['usuario'].password) ){
            //   return res.status(400).json({
            //     ok: false,
            //     err: {
            //       message: 'Email o Contraseña incorrectos'
            //     }
            //   })
            // }
            delete databaseRes['usuario'].password;
            const cadocidad = 60 * 60 * 24 * 30;
            const token = jwt.sign({
                usuario: databaseRes['usuario'],
            }, process.env.JWT_SECRET, { expiresIn: cadocidad });
            databaseRes['token'] = token;
            return res.status(200).json(databaseRes);
        });
    }
    //POST = Guarda todos los Usuarios
    guardar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body == null || req.body == undefined) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: 'Error al enviar datos del front'
                    }
                });
            }
            const databaseRes = yield index_models_1.Usuario.guardarUsuario(req.body);
            if (databaseRes.err.message === 'Usuario ya existente') {
                return res.status(200).json(databaseRes);
            }
            ;
            if (databaseRes['ok'] === false) {
                return res.status(400).json(databaseRes);
            }
            ;
            return res.status(200).json(databaseRes);
        });
    }
    //GET = Retorna todos los Usuarios
    getUsuarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const databaseRes = yield index_models_1.Usuario.obtenerEmpresas();
            if (databaseRes['ok'] === false) {
                return res.status(400).json(databaseRes);
            }
            ;
            return res.status(200).json(databaseRes);
        });
    }
}
const usuarioControllers = new UsuarioControllers();
exports.default = usuarioControllers;
