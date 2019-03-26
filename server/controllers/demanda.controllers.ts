// Modulos
import path from 'path';

//Conexion a la DB
import database from '../database/database';

//Models
import { Request, Response } from 'express';
import { DocDefinitionModel } from '../models/DocDefinition.model';



//Funcionalidades
import sendEmail from '../funcionalidades/funcionalidadEmail/sendEmail';
import GenerarPdf from '../funcionalidades/funcionalidad-pdf/generatePdf';

//Definicion del Documento PDF
import DocDefinition from '../funcionalidades/funcionalidad-pdf/docDefinition';
import { Empresa, Persona, DemandaEmpresa, DemandaPersonaNatural, ConflictoCesantias, ConflictoPagoSalario, ConflictoPrimas, ConflictoVacaciones, ContratoLaboral } from '../models/index.models';
import { ConflictoDespidoSJC } from '../models/conflictoDespidoSJC.model';
import { CorreoPersona } from '../models/CorreoPersona.model';
import MontosConflictos from '../funcionalidades/montosConflictos/montosConflictos';



class DemandaControllers {
  /*
    METODOS PARA MANIPULAR LA DEMANDA => (PDF)
  */

  //GET = GENREA LA DEMANDA.
  public async generarPdf(req: Request, res: Response) {
    let idDemanda: number = req.params.id;
    let tipo: string = req.params.tipo;
    let databaseResDemanda: any;

    let query = async (demanda: any) => {

      let idDemanda;
      let tipo;


      let empresa;
      let representante;


      if (demanda.idDemandaEmpresa !== undefined) {
        tipo = 'idDemandaEmpresa'
        idDemanda = demanda.idDemandaEmpresa;
        empresa = await Empresa.obtenerUnaEmpresa(demanda.NItEmpresa);
        if (empresa.result[0].tipoDocumentoPersona != undefined) {
          representante = await Persona.obtenerUnaPersona(empresa.result[0].numeroDocumentoPersona, empresa.result[0].tipoDocumentoPersona)
        }

      }

      if (demanda.idDemandaPersonaNatural !== undefined) {
        tipo = 'idDemandaPersonaNatural'
        idDemanda = demanda.idDemandaPersonaNatural;
      }

      let persona = await Persona.obtenerUnaPersona(demanda.numeroDocumentoPersona, demanda.tipoDocumentoPersona)
      let correo = await CorreoPersona.obtenerCorreoPersona(persona.result[0].numeroDocumentoPersona, persona.result[0].tipoDocumentoPersona)
      let contrato = await ContratoLaboral.obtenerContratoLaboral(demanda.idContrato)
      let conflicto1 = await ConflictoDespidoSJC.obtenerConflictoDespidoSJC(idDemanda, tipo)
      let conflicto2 = await ConflictoCesantias.obtenerConflictoCesantias(idDemanda, tipo)
      let conflicto3 = await ConflictoPagoSalario.obtenerConflictoPagoSalario(idDemanda, tipo)
      let conflicto4 = await ConflictoPrimas.obtenerConflictoPrimas(idDemanda, tipo)
      let conflicto5 = await ConflictoVacaciones.obtenerConflictoVacaciones(idDemanda, tipo)


      return {
        persona: persona.result[0],
        correo: correo.result[0],
        empresa: (empresa != undefined) ? empresa.result[0] : undefined,
        representante: (representante != undefined) ? representante.result[0] : undefined,
        contrato: contrato.result[0],
        conflictoDespidoSJC: conflicto1.result[0],
        conflictoCesantias: conflicto2.result[0],
        conflictoPagoSalario: conflicto3.result[0],
        conflictoPrimas: conflicto4.result[0],
        conflictoVacaciones: conflicto5.result[0]


      }

    }

    let pdf = async (datosDemanda: any) => {
      try {
        const docDefinition = new DocDefinition(datosDemanda);
        await new GenerarPdf(docDefinition.getDoc, docDefinition.getAccionante);

      } catch (e) {
        console.log(e, 'err')
      }

    }

    try {
      if (tipo === 'empresa') {

        databaseResDemanda = await DemandaEmpresa.obtenerDemandaEmpresa(idDemanda);
        if (databaseResDemanda.result.length !== 0) {

          databaseResDemanda = databaseResDemanda.result[0];

          let respuesta = await query(databaseResDemanda)

          if(respuesta.conflictoPagoSalario.fechaInicioNoPago == undefined){

            console.log('si')

          }

          await pdf({
            accionante: respuesta.persona.nombresPersona,
            accionado: (respuesta.empresa != undefined) ? respuesta.empresa.nombreEmpresaRS : undefined,

            cedulaAccionante: respuesta.persona.numeroDocumentoPersona,
            cedulaAccionado: (respuesta.representante != undefined) ? respuesta.representante.numeroDocumentoPersona : 'No Aplica',

            ciudadAccionante: respuesta.persona.codigoCiudad,
            ciudadAccionado: (respuesta.empresa != undefined) ? respuesta.empresa.codigoCiudad : undefined,


            correoAccionante: respuesta.correo.correoPersona,
            correoAccionado: (respuesta.empresa != undefined) ? respuesta.empresa.emailEmpresa : undefined,

            direccionDeNotificacionAccionante: respuesta.persona.direccionPersona,
            direccionDeNotificacionAccionado: (respuesta.empresa != undefined) ? respuesta.empresa.direccionEmpresa : undefined,


            lugarDeExpedicionAccionante: respuesta.persona.lugarExpedicionCedulaPersona,
            lugarDeExpedicionAccionado: (respuesta.representante != undefined) ? respuesta.representante.lugarExpedicionCedulaPersona : undefined,

            nit: (respuesta.empresa != undefined) ? respuesta.empresa.NItEmpresa : undefined,
            represetanteLegal: (respuesta.representante != undefined) ? respuesta.representante.nombresPersona : 'No Aplica',

            fechaDeIngresoALaEmpresa: respuesta.contrato.fechaInicioContrato,
            primaDeServicios: undefined,
            indemnizacionPorNoPago: undefined,
            valorDeLasPretenciones: undefined,

            salarioPactado: respuesta.contrato.ultimoSalario,
            funcionesQueRealizaba: respuesta.contrato.descripcionFunciones,
            conflictos: undefined,
            incumplimientoDelEmpleador: undefined,
            fechaDeLaPrimeraSolicitudAlEmpleador: undefined,
            situacionActualFrenteALaRenunciaDelEmpleador: undefined,
            causa: undefined,
            salariosVencidos: MontosConflictos.MontoNoPagoSalario(respuesta.conflictoPagoSalario.fechaInicioNoPago, respuesta.conflictoPagoSalario.fechaFinalNoPagoSalario, respuesta.contrato.ultimoSalario),
            cesantias: MontosConflictos.MontoCesantias((respuesta.conflictoCesantias.fechaUltimasCesantiasPagadas !== null) ? respuesta.conflictoCesantias.fechaUltimasCesantiasPagadas : new Date(), (respuesta.conflictoCesantias.fechaFinalNoPagoCesantias != null) ? respuesta.conflictoCesantias.fechaFinalNoPagoCesantias : new Date(), respuesta.contrato.ultimoSalario).cesantias,
            diasDeTrabajo: MontosConflictos.MontoCesantias((respuesta.conflictoCesantias.fechaUltimasCesantiasPagadas !== null) ? respuesta.conflictoCesantias.fechaUltimasCesantiasPagadas : new Date(), (respuesta.conflictoCesantias.fechaFinalNoPagoCesantias != null) ? respuesta.conflictoCesantias.fechaFinalNoPagoCesantias : new Date(), respuesta.contrato.ultimoSalario).dias,
            interesesDeCesantias: MontosConflictos.MontoCesantias((respuesta.conflictoCesantias.fechaUltimasCesantiasPagadas !== null) ? respuesta.conflictoCesantias.fechaUltimasCesantiasPagadas : new Date(), (respuesta.conflictoCesantias.fechaFinalNoPagoCesantias != null) ? respuesta.conflictoCesantias.fechaFinalNoPagoCesantias : new Date(), respuesta.contrato.ultimoSalario).interesesCesantias,

          })

          return res.json({
            ok: true,
            message: `creado`
          });
        }




      } else {

        throw ('DemandaEmpresa no existe')
      }




      // if (tipo === 'natural') {


      //   return res.json({
      //     ok: true,
      //     message: `creado`
      //   });
      // } else {

      //   throw ('DemandaPersonaNatural no existe')
      // }




    } catch (e) {
      console.log(e, 'errooro')
      return res.status(400).json({
        ok: false,
        err: {
          message: e ? e : `ocurrio un error al asignar la respuesta de la db o esta no esta viene undefined`
        }
      })
    }





    return res.json({ ok: true });
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
  }

  //GET = ENVIA LA DEMANDA.
  public async enviapdf(req: Request, res: Response) {

    try {

      const identificacion = req.params.identificacion;

      const personaResult: Persona[] = await database.query(`SELECT * FROM Personas WHERE cedulaPersona = ${identificacion}`);

      const persona: Persona = personaResult[0];

      sendEmail.sendPdf([], persona.nombresPersona)

      res.status(200).json({
        ok: true,
        message: 'Correo Enviado'

      })

    }
    catch (err) {

      console.log('Error al enviar el pdf\n', err);

      res.status(500).json({
        ok: false,
        err: 'Error al enviar el PDF por correo',
        errMessge: err
      });

    }


  }

  //GET = DESCARGAR LA DEMANDA.
  public async descargarPdf(req: Request, res: Response) {

    try {

      const identificacion = req.params.identificacion;

      // const personaResult: Persona[] = await database.query(`SELECT * FROM Personas WHERE cedulaPersona = ${identificacion}`);

      // const persona: Persona = personaResult[0];

      res.status(200).download(path.join(__dirname, `../front/Demanda.pdf`));

    }
    catch (err) {

      console.log('Error al descargar el PDF para descargar\n', err);

      res.status(500).json({
        ok: false,
        err: 'Error al descargar el PDF para descargar',
        errMessge: err
      });

    }


  }

}

const demandaControllers = new DemandaControllers();

export default demandaControllers;
