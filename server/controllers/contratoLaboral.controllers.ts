import { Response, Request } from 'express';
import { ContratoLaboral } from '../models/index.models';

export class ContratoLaboralContro {

  //=====================================================================
  // Controller Para Guardar una ContratoLaboral (METODO = POST)
  //=====================================================================
  /*
  * Este Controller se encarga de guardar ContratoLaboral
  */
  public static async guardarPersona(req: Request, res: Response) {

    let body = req.body;

    if (req.body == null || req.body == undefined) {

      return res.status(400).json({
        ok: false,
        err: {
          message: 'Error al enviar datos del front'
        }
      })
    }

    const databaseRes: any = await ContratoLaboral.guardarContraatoLaboral(
      new ContratoLaboral(
        undefined,
        body['tipoContrato'],
        body['fechaInicioContrato'],
        body['fechaFinalContrato'],
        body['ultimoSalario'],
        body['descripcionFunciones'],
        body['tipoDocumentoPersona'],
        body['numeroDocumentoPersona'],
        body['IdPersonaNatural'],
        body['NItEmpresa']
      )
    )

    if (databaseRes['message'] === 'Usuario ya existente') {
      return res.status(200).json(databaseRes)
    };

    if (databaseRes['ok'] === false) {
      return res.status(400).json(databaseRes)
    };

    return res.status(200).json(databaseRes);

  }


  //=====================================================================
  // Controller Para Obtener Todas las Personas (METODO = GET)
  //=====================================================================
  /*
  * Este Controller se encarga de enviar todas las personas en la DB
  */
  public static async obtenerPersona(req: Request | any, res: Response) {

    const databaseRes: any = await ContratoLaboral

    if (databaseRes['ok'] === false) {
      return res.status(400).json(databaseRes)
    };

    return res.status(200).json(databaseRes);

  }


  //=====================================================================
  // Controller Para Obtener una Persona (METODO = GET)
  //=====================================================================
  /*
  * Este Controller se encarga de retornar una sola persona
  */
  public static async obtenerUnaPersona(req: Request, res: Response) {

    let identificacion = req.params.id;
    let tipoIdentificacion = req.params.tipoId;

    const databaseRes: any = await ContratoLaboral

    if (databaseRes['ok'] === false) {
      return res.status(400).json(databaseRes)
    };

    return res.status(200).json(databaseRes);
  }


  //=====================================================================
  // Controller Para Actualizar una Persona (METODO = PUT)
  //=====================================================================
  /*
  * Este Controller se encarga de actualizar una sola persona mediante el id
  */
  public static async actualizarPersona(req: Request, res: Response) {

    let body = req.body;

    const databaseRes: any = await ContratoLaboral

    if (databaseRes['ok'] === false) {
      return res.status(400).json(databaseRes)
    };

    return res.status(200).json(databaseRes);
  }


  //=====================================================================
  // Controller Para Borrar una Persona (METODO = DELETE)
  //=====================================================================
  /*
  * Este Controller se encarga de Borrar una sola persona
  */
  public static async borrarPersona(req: Request, res: Response) {

    let identificacion = req.params.id;
    let tipoIdentificacion = req.params.tipoId;

    const databaseRes: any = await ContratoLaboral

    if (databaseRes['ok'] === false) {
      return res.status(400).json(databaseRes)
    };

    return res.status(200).json(databaseRes);
  }


}
