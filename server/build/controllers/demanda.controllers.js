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
const index_models_1 = require("../models/index.models");
class DemandaControllers {
    /*
      METODOS PARA MANIPULAR LA DEMANDA => (PDF)
    */
    //GET = GENREA LA DEMANDA.
    generarPdf(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let idDemanda = req.params.id;
            let tipo = req.params.tipo;
            let databaseResDemanda;
            let query = (tipo, id, tabla) => {
                let tipoPersona = 'PersonaNatural';
                let identificacionTipoPersona = 'IdPersonaNatural';
                if (tabla === 'demandaEmpresa') {
                    tipoPersona = 'Empresa';
                    identificacionTipoPersona = 'NItEmpresa';
                }
                return `SELECT * 
      FROM conflictoDespidoSJC,
        conflictoPagoSalario,
        conflictoVacaciones,
        conflictoCesantias,
        conflictoPrimas,
        ${tabla}
      WHERE conflictoDespidoSJC.${tipo} = ${id}
      AND conflictoPagoSalario.${tipo} = ${id}
      AND conflictoVacaciones.${tipo} = ${id}
      AND conflictoCesantias.${tipo} = ${id}
      AND conflictoPrimas.${tipo} = ${id}

      AND conflictoDespidoSJC.${tipo} = conflictoPagoSalario.${tipo}
      AND conflictoDespidoSJC.${tipo} = conflictoVacaciones.${tipo}
      AND conflictoDespidoSJC.${tipo} = conflictoCesantias.${tipo}
      AND conflictoDespidoSJC.${tipo} = conflictoPrimas.${tipo}
      AND conflictoPagoSalario.${tipo} = conflictoVacaciones.${tipo}
      AND conflictoPagoSalario.${tipo} = conflictoCesantias.${tipo}
      AND conflictoPagoSalario.${tipo} = conflictoPrimas.${tipo}
      AND conflictoVacaciones.${tipo} = conflictoCesantias.${tipo}
      AND conflictoVacaciones.${tipo} = conflictoPrimas.${tipo}
      AND conflictoCesantias.${tipo} = conflictoPrimas.${tipo}
      AND ${tabla}.${tipo} = conflictoPrimas.${tipo}
      AND ${tabla}.${tipo} = conflictoCesantias.${tipo}
      AND ${tabla}.${tipo} = conflictoVacaciones.${tipo}
      AND ${tabla}.${tipo} = conflictoPagoSalario.${tipo}
      AND ${tabla}.${tipo} = conflictoDespidoSJC.${tipo}`;
            };
            let pdf = (datosDemanda) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const docDefinition = new docDefinition_1.default(datosDemanda);
                    yield new generatePdf_1.default(docDefinition.getDoc, docDefinition.getAccionante);
                }
                catch (e) {
                    console.log(e, 'err');
                }
            });
            try {
                if (tipo === 'empresa') {
                    databaseResDemanda = yield index_models_1.DemandaEmpresa.obtenerDemandaEmpresa(idDemanda);
                    if (databaseResDemanda.result.length !== 0) {
                        databaseResDemanda = databaseResDemanda.result[0];
                        let databaseResConflictos = yield database_1.default.query(query('idDemandaEmpresa', idDemanda, 'demandaEmpresa'));
                        let databaseResEmpresa = yield index_models_1.Empresa.obtenerUnaEmpresa(databaseResDemanda.NItEmpresa);
                        let databaseResPersona = yield index_models_1.Persona.obtenerUnaPersona(databaseResDemanda.numeroDocumentoPersona, databaseResDemanda.tipoDocumentoPersona);
                        let databaseResRepresentanteLegal;
                        if (databaseResEmpresa.result !== null) {
                            console.log(databaseResEmpresa.result[0].numeroDocumentoPersona, 'representante legal');
                            if (databaseResEmpresa.result[0].numeroDocumentoPersona !== null) {
                                databaseResRepresentanteLegal = yield index_models_1.Persona.obtenerUnaPersona(databaseResEmpresa.result[0].numeroDocumentoPersona, databaseResEmpresa.result[0].tipoDocumentoPersona);
                            }
                        }
                        if ((databaseResEmpresa.result || databaseResPersona.result) != null) {
                            if (databaseResRepresentanteLegal === undefined) {
                                databaseResRepresentanteLegal = 'no aplica';
                            }
                            yield pdf({
                                accionante: databaseResPersona.result[0].nombresPersona,
                                accionado: databaseResEmpresa.result[0].nombreEmpresaRS,
                                cedulaAccionado: databaseResRepresentanteLegal,
                                ciudadAccionante: databaseResPersona.result[0].codigoCiudad,
                                ciudadAccionado: databaseResEmpresa.result[0].codigoCiudad,
                                correoAccionante: '',
                                correoAccionado: databaseResEmpresa.result[0].emailEmpresa,
                                direccionDeNotificacionAccionante: databaseResPersona.result[0].direccionPersona,
                                direccionDeNotificacionAccionado: databaseResEmpresa.result[0].direccionEmpresa,
                                lugarDeExpedicionAccionante: databaseResPersona.result[0].lugarExpedicionCedulaPersona,
                                lugarDeExpedicionAccionado: databaseResRepresentanteLegal,
                                nit: databaseResEmpresa.result[0].NItEmpresa,
                                represetanteLegal: databaseResRepresentanteLegal,
                                fechaDeIngresoALaEmpresa: undefined,
                                primaDeServicios: undefined,
                                indemnizacionPorNoPago: undefined,
                                valorDeLasPretenciones: undefined,
                                salarioPactado: undefined,
                                funcionesQueRealizaba: undefined,
                                conflictos: undefined,
                                incumplimientoDelEmpleador: undefined,
                                fechaDeLaPrimeraSolicitudAlEmpleador: undefined,
                                situacionActualFrenteALaRenunciaDelEmpleador: undefined,
                                causa: undefined,
                                salariosVencidos: undefined,
                                cesantias: undefined,
                                diasDeTrabajo: undefined,
                                interesesDeCesantias: undefined,
                            });
                        }
                        return res.json({
                            databaseResConflictos
                        });
                    }
                    else {
                        throw ('DemandaEmpresa no existe');
                    }
                }
                if (tipo === 'natural') {
                    databaseResDemanda = yield index_models_1.DemandaPersonaNatural.obtenerDemandaPersonaNatural(idDemanda);
                    database_1.default.query(query + `idDemandaEmpresa = ${idDemanda}`);
                    if (databaseResDemanda.result.length !== 0) {
                        let databaseResPdf = yield database_1.default.query(query('idDemandaPersonaNatural', idDemanda, 'demandaPersonaNatural'));
                        // pdf({
                        //   accionante: databaseResPdf.nombresPersona,
                        //   accionado: databaseResPdf.nombreEmpresaRS,
                        //   cedulaAccionante: databaseResPdf.numeroDocumentoPersona,
                        //   ce
                        // })
                        return res.json({ databaseResPdf });
                    }
                    else {
                        throw ('DemandaPersonaNatural no existe');
                    }
                }
            }
            catch (e) {
                console.log(e, 'errooro');
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: e ? e : `ocurrio un error al asignar la respuesta de la db o esta no esta viene undefined`
                    }
                });
            }
            if (databaseResDemanda === undefined) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: `ocurrio un error al asignar la respuesta de la db o esta no esta viene undefined`
                    }
                });
            }
            return res.json({ databaseResDemanda });
            // try{
            //   //Optenemos los patametros para la condulta
            //   //Consultas de la DB
            //   const empresaResult: Empresa[] = await database.query(`SELECT * FROM Empresa WHERE NItEmpresa = ${ nit }`);
            //   const personaResult: Persona[] = await database.query(`SELECT * FROM Personas WHERE cedulaPersona = ${ identificacion }`);
            //   //Navegando entre la respuesta y almacenandol en una valiable para su posterior uso.
            //   const accionante: Persona = personaResult[0];
            //   const accionado: Empresa = empresaResult[0];
            //   //Metemos los datos de la consulta en el objeto que define el contenido del pdf.
            //   const datosDemanda = {
            //     accionante: accionante.nombresPersona,
            //     accionado: accionado.nombreEmpresaRS,
            //     ciudadAccionante: "accionante.codigoDaneMunicipio",
            //     cedulaAccionante: accionante.numeroDocumentoPersona,
            //     lugarDeExpedicion: 'lugarDeExpedicion',
            //     nit: accionado.NItEmpresa,
            //     represetanteLegal: 'represetanteLegal',
            //     ciudadAccionado: 'ciudadAccionado'
            //   }
            //   console.log(datosDemanda)
            //   //Generando el contenido del pdf con el objeto previamente creado.
            //   const docDefinition = new DocDefinition(datosDemanda);
            //   //Generando el pdf ( contenido, nombre del accionante (para que cuando se genere el pdf, el nombre del mismo ('pdf') sea unico )).
            //   await new GenerarPdf(docDefinition.getDoc, docDefinition.getAccionante);
            //   res.status(200).json({
            //     ok: true,
            //     message: 'PDF generado con exito'
            //   });
            // }catch(err){
            //   console.log('Error al generar el pdf\n',err);
            //   res.status(500).json({
            //     ok:false,
            //     err: 'Error al generar el PDF',
            //     errMessge: err
            //   });
            // }
        });
    }
    //GET = ENVIA LA DEMANDA.
    enviapdf(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const identificacion = req.params.identificacion;
                const personaResult = yield database_1.default.query(`SELECT * FROM Personas WHERE cedulaPersona = ${identificacion}`);
                const persona = personaResult[0];
                sendEmail_1.default.sendPdf([], persona.nombresPersona);
                res.status(200).json({
                    ok: true,
                    message: 'Correo Enviado'
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
                // const personaResult: Persona[] = await database.query(`SELECT * FROM Personas WHERE cedulaPersona = ${identificacion}`);
                // const persona: Persona = personaResult[0];
                res.status(200).download(path_1.default.join(__dirname, `../front/Demanda.pdf`));
            }
            catch (err) {
                console.log('Error al descargar el PDF para descargar\n', err);
                res.status(500).json({
                    ok: false,
                    err: 'Error al descargar el PDF para descargar',
                    errMessge: err
                });
            }
        });
    }
}
const demandaControllers = new DemandaControllers();
exports.default = demandaControllers;
