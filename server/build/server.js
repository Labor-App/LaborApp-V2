"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// NPM modulos
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const path_1 = require("path");
var fallback = require('express-history-api-fallback');
//Rutas
const index_router_1 = __importDefault(require("./routes/index.router"));
class Server {
    constructor() {
        require('./config/config');
        this.app = express_1.default(); // Igualamos el atributo app a todos los metodos dentro de la funcion express.
        //Ejecutamos los metodos de la clase .
        this.consfig();
        this.middlewares();
        this.routes();
        this.publicFolder();
    }
    //Metodos
    consfig() {
    }
    middlewares() {
        /*
          Este metodo se ejecuta en el constructor luego de las configuracione generales del server (Ej: port) y antes de las rutas, con el objetivo de registrar, procesar Cabeceras entre otras funcionalidades.
        */
        this.app.use(morgan_1.default('dev')); //Registra las peticiones que llegan al server
        this.app.use(cors_1.default(process.env.CORS_CONF));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        /*
          Este Metodo se ejecuta e el constructor y sirve para direccionar las peticiones que llegan al server.
        */
        this.app.use('/api/laborapp', index_router_1.default);
    }
    publicFolder() {
        const publicPath = path_1.join(__dirname, './front/LaborApp');
        this.app.use(express_1.default.static(publicPath));
        this.app.use(fallback('./front/LaborApp/index.html', { root: __dirname }));
    }
    start() {
        /*
          Metodo para que el server escuche
          (este metodo no se ejecuta en el constructor, se llama en la instancia al final(afuera) de la clase ).
        */
        this.app.listen(process.env.PORT, () => {
            console.log(`server on port ${process.env.PORT}`);
        });
    }
}
//Instancia de la clase Server
const server = new Server();
//Ejecucion del metodo start().
server.start();
