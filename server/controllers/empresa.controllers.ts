import { Request, Response } from 'express';
//Models
import { Empresa, Persona } from '../models/index.models';

export class EmpresaControllers {


  //=====================================================================
  // Controller para Guardar una Persona (METODO = POST)
  //=====================================================================
  /*
  * Este Controller seencarga de guardar una empresa en DB usando su modelo,
  * e interactua con la respuesta del modelo.
  */
  public static async guardarEmpresa(req: Request, res: Response) {
    let body = req.body;
    req.body['empresa']
    const databaseRes: any = await Empresa.guardarEmpresa(
      new Empresa(
        body['NItEmpresa'],
        body['nombreEmpresaRS'],
        body['direccionEmpresa'],
        body['codigoCiudad'],
        body['telefonoEmpresa'],
        body['emailEmpresa'],
        body['tipoDocumentoPersona'],
        body['numeroDocumentoPersona']
      ), new Persona(
        body['tipoDocumentoPersona'],
        body['numeroDocumentoPersona'],
        body['nombresPersona'],
        body['apellidosPersona']

      ));

    if (databaseRes['ok'] === false) {
      return res.status(400).json(databaseRes)
    };

    return res.status(200).json(databaseRes);
  }



  //=====================================================================
  // Controller Para Obtener Todas las Empresas (METODO = GET)
  //=====================================================================
  /*
  * Este Controller se encarga de enviar todas las empresas en la DB
  */
  public static async obtenerEmpresa(req: Request, res: Response) {

    const databaseRes: any = await Empresa.obtenerEmpresas();


    if (databaseRes['ok'] === false) {
      return res.status(400).json(databaseRes)
    };

    return res.status(200).json(databaseRes);

  }



  //=====================================================================
  // Controller Para Obtener UNA  Empresa (METODO = GET)
  //=====================================================================
  /*
  * Este Controller se encarga de enviar una las empresas en la DB
  */
  public static async obtenerUnaEmpresa(req: Request, res: Response) {

    let identificacion = req.params.id;

    const databaseRes: any = await Empresa.obtenerUnaEmpresa(identificacion);

    if (databaseRes['ok'] === false) {
      return res.status(400).json(databaseRes)
    };

    return res.status(200).json(databaseRes);

  }



  //=====================================================================
  // Controller Para actualizar UNA  Empresa (METODO = PUT)
  //=====================================================================
  /*
  * Este Controller se encarga de actualizar una las empresas en la DB
  */
  public static async actualizarEmpresa(req: Request, res: Response) {


    const databaseRes: any = await Empresa.actualizarEmpresa(req.body);

    if (databaseRes['ok'] === false) {
      return res.status(400).json(databaseRes)
    };

    return res.status(200).json(databaseRes);

  }


  //=====================================================================
  // Controller Para Borrar UNA  Empresa (METODO = DELETE)
  //=====================================================================
  /*
  * Este Controller se encarga de actualizar una las empresas en la DB
  */
  public static async borrarEmpresa(req: Request, res: Response) {

    let id  = req.params.id;

    const databaseRes: any = await Empresa.borrarEmpresa(id);
    
    if (databaseRes['ok'] === false) {
      return res.status(400).json(databaseRes)
    };

    return res.status(200).json(databaseRes);

  }

}
