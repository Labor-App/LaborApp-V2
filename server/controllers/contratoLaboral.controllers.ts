import { Response, Request } from 'express';
import { ContratoLaboral } from '../models/index.models';

export class ContratoLaboralController {


  public static async guardarContratoLaboral(req: Request, res: Response) {

    let body = req.body;

    if (req.body == null || req.body == undefined) {

      return res.status(400).json({
        ok: false,
        err: {
          message: 'Error al enviar datos del front'
        }
      })
    }

    const databaseRes: any = await ContratoLaboral.guardarContratoLaboral(
      new ContratoLaboral(
        undefined,
        body['tipoContrato'].toLowerCase(),
        body['fechaInicioContrato'],
        body['fechaFinalContrato'],
        body['ultimoSalario'],
        body['descripcionFunciones'],
        body['tipoDocumentoPersona'].toLowerCase(),
        body['numeroDocumentoPersona'],
        body['IdPersonaNatural'],
        body['NItEmpresa']
      )
    )


    if (databaseRes['ok'] === false) {
      return res.status(400).json(databaseRes)
    };

    return res.status(200).json(databaseRes);

  }


  public static async obtenerContratoLaboral(req: Request | any, res: Response) {

    const databaseRes: any = await ContratoLaboral.obtenerContratoLaboral();

    if (databaseRes['ok'] === false) {
      return res.status(400).json(databaseRes)
    };

    return res.status(200).json(databaseRes);

  }


  public static async obtenerUnContratoLaboral(req: Request, res: Response) {

    let identificacion = req.params.id;
    let tipoIdentificacion = req.params.tipoId;

    const databaseRes: any = await ContratoLaboral

    if (databaseRes['ok'] === false) {
      return res.status(400).json(databaseRes)
    };

    return res.status(200).json(databaseRes);
  }



  public static async actualizarContratoLaboral(req: Request, res: Response) {

    let body = req.body;

    const databaseRes: any = await ContratoLaboral

    if (databaseRes['ok'] === false) {
      return res.status(400).json(databaseRes)
    };

    return res.status(200).json(databaseRes);
  }



  public static async borrarContratoLaboral(req: Request, res: Response) {

    let id = req.params.id;

    const databaseRes: any = await ContratoLaboral.borrarContratoLaboral(id)

    if (databaseRes['ok'] === false) {
      return res.status(400).json(databaseRes)
    };

    return res.status(200).json(databaseRes);
  }


}
