//Modulos
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

//Models
import { Response, Request } from 'express';
import { Persona } from '../models/index.models';


export class PersonaControllers {

  //=====================================================================
  // Controller del Login (METODO = POST)
  //=====================================================================
  /*
  * Este Controller revisa que el usuario este registrado, genera un token
  * cuyo payload contiene informacion del usuario registrado.
  */
  public static async login(req: Request, res: Response) {


    const databaseRes: any = await Persona.login(req.body.email);


    if (databaseRes['ok'] === false) {
      return res.status(200).json(databaseRes)
    }


    if (!bcrypt.compareSync(req.body.contrasenaPersona, `${databaseRes['usuario'].contrasenaPersona}`)) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'Email o (Contraseña) incorrectos'
        }
      })
    }

    delete databaseRes['usuario'].contrasenaPersona;

    const cadocidad = 60 * 60 * 24 * 30;

    const token = jwt.sign({
      usuario: databaseRes['usuario'],
    }, process.env.JWT_SECRET, { expiresIn: cadocidad });

    databaseRes['token'] = token;

    return res.status(200).json(databaseRes);


  }


  //=====================================================================
  // Controller Para Renovar el token (METODO = POST)
  //=====================================================================
  /*
  * Este Controller se encarga de renovar el token, solo si el front
  * detecta que el token esta proximo a vencerse.
  */
  public static async renuevaToken(req: Request | any, res: Response) {

    const cadocidad = 60 * 60 * 24 * 30;

    const token = jwt.sign({
      usuario: req['usuario'],
    }, process.env.JWT_SECRET, { expiresIn: cadocidad });


    return res.status(200).json({
      ok: true,
      message: 'Token Renovado',
      usuario: req['usuario'],
      token
    });
  }


  //=====================================================================
  // Controller Para Guardar una Persona (METODO = POST)
  //=====================================================================
  /*
  * Este Controller se encarga de encriptar la contraaseña y
  * guardar la persona en DB.
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

    body.contrasenaPersona = bcrypt.hashSync(body.contrasenaPersona, 10)

    const databaseRes: any = await Persona.guardarPersona(
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
      ), body['correoPersona'])

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

    const databaseRes: any = await Persona.obtenerPersona();

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

    const databaseRes: any = await Persona.obtenerUnaPersona(identificacion, tipoIdentificacion);

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

    const databaseRes: any = await Persona.actualizarPersona(
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
      ), body['correoPersona']);

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

    const databaseRes: any = await Persona.borrarUnaPersona(identificacion, tipoIdentificacion);

    if (databaseRes['ok'] === false) {
      return res.status(400).json(databaseRes)
    };

    return res.status(200).json(databaseRes);
  }

}
