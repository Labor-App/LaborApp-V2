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
import { Empresa, Persona, DemandaEmpresa, DemandaPersonaNatural } from '../models/index.models';



class DemandaControllers{
  /*
    METODOS PARA MANIPULAR LA DEMANDA => (PDF)
  */

  //GET = GENREA LA DEMANDA.
  public async generarPdf( req: Request, res: Response){
    let idDemanda: number = req.params.id;
    let tipo: string = req.params.tipo;
    let databaseResDemanda;
    let query = `SELECT * FROM conflictoDespidoSJC,conflictoPagoSalario,conflictoVacaciones,conflictoCesantias,conflictoPrimas,conflictosContactaAbogado 
      WHERE conflictoDespidoSJC.idDemandaEmpresa = ${ idDemanda }
      AND conflictoPagoSalario.idDemandaEmpresa = ${ idDemanda }
      AND conflictoVacaciones.idDemandaEmpresa = ${ idDemanda }
      AND conflictoCesantias.idDemandaEmpresa = ${ idDemanda }
      AND conflictoPrimas.idDemandaEmpresa = ${ idDemanda }` 

    try{
      if (tipo === 'empresa'){
        databaseResDemanda = await DemandaEmpresa.obtenerDemandaEmpresa(idDemanda);
        if(databaseResDemanda.result.length !== 0){
          let databaseResConflictos = database.query(query)
          console.log(databaseResConflictos)
        }else{
          throw ('')
        }

      }
      if (tipo === 'natural'){
        databaseResDemanda = await DemandaPersonaNatural.obtenerDemandaPersonaNatural(idDemanda)
        database.query(query + `idDemandaEmpresa = ${ idDemanda }` )
      }

    }catch(e){
      return res.status(400).json({
        ok: false,
        err: {
          message: `ocurrio un error al asignar la respuesta de la db o esta no esta viene undefined`
        }
      })
    }

    
    if(databaseResDemanda === undefined){
      return res.status(400).json({
        ok: false,
        err: {
          message: `ocurrio un error al asignar la respuesta de la db o esta no esta viene undefined`
        }
      })
    }


    

    return res.json({databaseResDemanda});
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
  public async enviapdf( req: Request, res: Response ){

    try{

      const identificacion = req.params.identificacion;

      const personaResult: Persona[] = await database.query(`SELECT * FROM Personas WHERE cedulaPersona = ${ identificacion }`);

      const persona: Persona = personaResult[0];

      sendEmail.sendPdf([], persona.nombresPersona )

      res.status(200).json({
        ok:true,
        message: 'Correo Enviado'

      })

    }
    catch(err){

      console.log('Error al enviar el pdf\n',err);

      res.status(500).json({
        ok:false,
        err: 'Error al enviar el PDF por correo',
        errMessge: err
      });

    }


  }

  //GET = DESCARGAR LA DEMANDA.
  public async descargarPdf(req:Request, res:Response){

    try{

      const identificacion = req.params.identificacion;

      const personaResult: Persona[] = await database.query(`SELECT * FROM Personas WHERE cedulaPersona = ${ identificacion }`);

      const persona: Persona = personaResult[0];

      res.status(200).download(path.join(__dirname, `../front/Demanda.pdf`));

    }
    catch(err){

      console.log('Error al descargar el PDF para descargar\n',err);

      res.status(500).json({
        ok:false,
        err: 'Error al descargar el PDF para descargar',
        errMessge: err
      });

    }


  }

}

const demandaControllers = new DemandaControllers();

export default demandaControllers;
