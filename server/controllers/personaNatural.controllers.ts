//Models
import { Response, Request } from 'express';
import { PersonaNatural, Persona } from '../models/index.models';


export class PersonaNaturalControllers {

  //=====================================================================
  // Controller Para Guardar una PersonaNatural (METODO = POST)
  //=====================================================================
  /*
  * Este Controller se encarga de encriptar la contraaseña y
  * guardar la persona en DB.
  */
  public static async guardarPersonaNatural(req: Request, res: Response) {

    const body = req.body;

    if (req.body == null || req.body == undefined) {

      return res.status(400).json({
        ok: false,
        err: {
          message: 'Error al enviar datos del front'
        }
      })
    }

    const databaseRes: any = await PersonaNatural.guardarPersonaNatural(
      new PersonaNatural(
        undefined,
        body['tipoDocumentoPersona'],
        body['numeroDocumentoPersona']
      ),
      new Persona(
        body['tipoDocumentoPersona'],
        body['numeroDocumentoPersona'],
        body['nombresPersona'],
        body['apellidosPersona'],
        body['fechaNacimientoPersona'],
        body['direccionPersona'],
        body['generoPersona'],
        body['lugarExpedicionCedulaPersona'],
        body['contrasenaPersona'],
        body['codigoCiudad']
      ),
      body['correoPersona']
    )

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
  public static async obtenerPersonaNatural(req: Request | any, res: Response) {

    const databaseRes: any = await PersonaNatural.obtenerPersonaNatural();

    if (databaseRes['ok'] === false) {
      return res.status(400).json(databaseRes)
    };

    return res.status(200).json(databaseRes);

  }


  //=====================================================================
  // Controller Para Obtener una PersonaNatural (METODO = GET)
  //=====================================================================
  /*
  * Este Controller se encarga de retornar una sola personaNatural Mediante el ID
  */
  public static async obtenerUnaPersonaNatural(req: Request, res: Response) {

    let identificacion = req.params.id;

    const databaseRes: any = await PersonaNatural.obtenerUnaPersonaNatural(identificacion);

    if (databaseRes['ok'] === false) {
      return res.status(400).json(databaseRes)
    };

    return res.status(200).json(databaseRes);
  }


  //=====================================================================
  // Controller Para Borrar una PersonaNatural (METODO = GET)
  //=====================================================================
  /*
  * Este Controller se encarga de Borrar una sola personaNatural Mediante el ID
  */
  public static async borrarPersonaNatural(req: Request, res: Response) {

    let identificacion = req.params.id;

    const databaseRes: any = await PersonaNatural.borrarPersonaNatural(identificacion);

    if (databaseRes['ok'] === false) {
      return res.status(400).json(databaseRes)
    };

    return res.status(200).json(databaseRes);
  }


  //=====================================================================
  // Controller Para Actualizar una PersonaNatural (METODO = PUT)
  //=====================================================================
  /*
  * Este Controller se encarga de retornar una sola personaNatural Mediante el ID
  */
  public static async actualizarPersonaNatural(req: Request, res: Response) {

    let body = req.body;

    const databaseRes: any = await PersonaNatural.actualizarPersonaNatural(
      new PersonaNatural(
        undefined,
        body['tipoDocumentoPersona'],
        body['numeroDocumentoPersona']
      )
    );


    if (databaseRes['ok'] === false) {
      return res.status(400).json(databaseRes)
    };

    return res.status(200).json(databaseRes);
  }


}
