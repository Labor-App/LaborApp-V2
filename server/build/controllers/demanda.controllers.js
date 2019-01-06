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
// Modulos
const path_1 = __importDefault(require("path"));
//Conexion a la DB
const database_1 = __importDefault(require("../database/database"));
//Funcionalidades
const sendEmail_1 = __importDefault(require("../funcionalidades/funcionalidadEmail/sendEmail"));
const generatePdf_1 = __importDefault(require("../funcionalidades/funcionalidad-pdf/generatePdf"));
//Definicion del Documento PDF
const docDefinition_1 = __importDefault(require("../funcionalidades/funcionalidad-pdf/docDefinition"));
class DemandaControllers {
    /*
      METODOS PARA MANIPULAR LA DEMANDA => (PDF)
    */
    //GET = GENREA LA DEMANDA.
    generarPdf(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //Optenemos los patametros para la condulta
                const nit = req.params.nit;
                const identificacion = req.params.identificacion;
                //Consultas de la DB
                const empresaResult = yield database_1.default.query(`SELECT * FROM Empresa WHERE NItEmpresa = ${nit}`);
                const personaResult = yield database_1.default.query(`SELECT * FROM Personas WHERE cedulaPersona = ${identificacion}`);
                //Navegando entre la respuesta y almacenandol en una valiable para su posterior uso.
                const accionante = personaResult[0];
                const accionado = empresaResult[0];
                //Metemos los datos de la consulta en el objeto que define el contenido del pdf.
                const datosDemanda = {
                    accionante: accionante.nombresPersona,
                    accionado: accionado.nombreEmpresaRS,
                    ciudadAccionante: "accionante.codigoDaneMunicipio",
                    cedulaAccionante: accionante.cedulaPersona,
                    lugarDeExpedicion: 'lugarDeExpedicion',
                    nit: accionado.NItEmpresa,
                    represetanteLegal: 'represetanteLegal',
                    ciudadAccionado: 'ciudadAccionado'
                };
                //Generando el contenido del pdf con el objeto previamente creado.
                const docDefinition = new docDefinition_1.default(datosDemanda);
                //Generando el pdf ( contenido, nombre del accionante (para que cuando se genere el pdf, el nombre del mismo ('pdf') sea unico )).
                const generarPdf = new generatePdf_1.default(docDefinition.getDoc, docDefinition.getAccionante);
                res.status(200).json({
                    ok: true,
                    err: 'PDF generado con exito'
                });
            }
            catch (err) {
                console.log('Error al generar el pdf\n', err);
                res.status(500).json({
                    ok: false,
                    err: 'Error al generar el PDF',
                    errMessge: err
                });
            }
        });
    }
    //GET = ENVIA LA DEMANDA.
    enviapdf(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const identificacion = req.params.identificacion;
                const personaResult = yield database_1.default.query(`SELECT * FROM Personas WHERE cedulaPersona = ${identificacion}`);
                const persona = personaResult[0];
                sendEmail_1.default.sendPdf([persona.correoPersona], persona.nombresPersona);
                res.json({
                    ok: true,
                });
            }
            catch (err) {
                console.log('Error al enviar el pdf\n', err);
                res.status(500).json({
                    ok: false,
                    err: 'Error al enviar el PDF por correo',
                    errMessge: err
                });
            }
        });
    }
    //GET = DESCARGAR LA DEMANDA.
    descargarPdf(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const identificacion = req.params.identificacion;
                const personaResult = yield database_1.default.query(`SELECT * FROM Personas WHERE cedulaPersona = ${identificacion}`);
                const persona = personaResult[0];
                res.status(200).download(path_1.default.join(__dirname, `../funcionalidades/funcionalidad-pdf/docs/Demanda-${persona.nombresPersona}.pdf`));
            }
            catch (err) {
                console.log('Error al enviar el PDF para descargar\n', err);
                res.status(500).json({
                    ok: false,
                    err: 'Error al enviar el PDF para descargar',
                    errMessge: err
                });
            }
        });
    }
}
const demandaControllers = new DemandaControllers();
exports.default = demandaControllers;
