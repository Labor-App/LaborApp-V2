// Modulos
import path from 'path';

//Conexion a la DB
import database from '../database/database';

//Models
import { Request, Response } from 'express';
import { MysqlError } from 'mysql';
import { DocDefinitionModel } from '../models/DocDefinition.model';
import { EmpresaModel } from '../models/Empresa.model';
import { PersonaModel } from '../models/Persona.model';

//Funcionalidades
import sendEmail from '../funcionalidades/funcionalidadEmail/sendEmail';
import GenerarPdf from '../funcionalidades/funcionalidad-pdf/generatePdf';

//Definicion del Documento PDF
import DocDefinition from '../funcionalidades/funcionalidad-pdf/docDefinition';


class DemandaControllers{
  /*
    METODOS PARA MANIPULAR LA DEMANDA => (PDF)
  */

  //GET = GENREA LA DEMANDA.
  public async generarPdf( req: Request, res: Response){

    try{
      //Optenemos los patametros para la condulta
      const nit:number = req.params.nit;
      const identificacion:number =  req.params.identificacion;

      //Consultas de la DB
      const empresaResult: EmpresaModel[] = await database.query(`SELECT * FROM Empresa WHERE NItEmpresa = ${ nit }`);
      const personaResult: PersonaModel[] = await database.query(`SELECT * FROM Personas WHERE cedulaPersona = ${ identificacion }`);

      //Navegando entre la respuesta y almacenandol en una valiable para su posterior uso.
      const accionante: PersonaModel = personaResult[0];
      const accionado: EmpresaModel = empresaResult[0];


      //Metemos los datos de la consulta en el objeto que define el contenido del pdf.
      const datosDemanda:DocDefinitionModel = {

        accionante: accionante.nombresPersona,
        accionado: accionado.nombreEmpresaRS,
        ciudadAccionante: "accionante.codigoDaneMunicipio",
        cedulaAccionante: accionante.cedulaPersona,
        lugarDeExpedicion: 'lugarDeExpedicion',
        nit: accionado.NItEmpresa,
        represetanteLegal: 'represetanteLegal',
        ciudadAccionado: 'ciudadAccionado'

      }

      //Generando el contenido del pdf con el objeto previamente creado.
      const docDefinition = new DocDefinition(datosDemanda);


      //Generando el pdf ( contenido, nombre del accionante (para que cuando se genere el pdf, el nombre del mismo ('pdf') sea unico )).
      const generarPdf =  new GenerarPdf(docDefinition.getDoc, docDefinition.getAccionante);


      res.status(200).json({
        ok: true,
        err: 'PDF generado con exito'
      });

    }catch(err){
      console.log('Error al generar el pdf\n',err);

      res.status(500).json({
        ok:false,
        err: 'Error al generar el PDF',
        errMessge: err
      });

    }
  }

  //GET = ENVIA LA DEMANDA.
  public async enviapdf( req: Request, res: Response ){

    try{

      const identificacion = req.params.identificacion;

      const personaResult: PersonaModel[] = await database.query(`SELECT * FROM Personas WHERE cedulaPersona = ${ identificacion }`);

      const persona:PersonaModel = personaResult[0];

      sendEmail.sendPdf([persona.correoPersona], persona.nombresPersona )

      res.json({
        ok:true,

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

      const personaResult: PersonaModel[] = await database.query(`SELECT * FROM Personas WHERE cedulaPersona = ${ identificacion }`);

      const persona:PersonaModel = personaResult[0];

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
