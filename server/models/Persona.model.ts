import database from "../database/database";
import { MysqlError } from "mysql";
import { CorreoPersona } from "./CorreoPersona.model";


export class Persona {

  constructor(
    public tipoDocumentoPersona: string,
    public numeroDocumentoPersona: number,
    public nombresPersona: string | null,
    public apellidosPersona: string | null,
    public fechaNacimientoPersona?: Date,
    public direccionPersona?: string,
    public generoPersona?: string,
    public lugarExpedicionCedulaPersona?: string,
    public contrasenaPersona?: string,
    public codigoCiudad?: number,
  ) { }

  //=====================================================================
  // Esta consulta verifica si la Persona esta en db y la retorna
  //=====================================================================
  /*
  * Busca en la tabla Correos, luego si el correo esta utiliza la info. de
  * esta tabla (correos), y la utiliza para buscar mas informacion en le
  * tabla Personas
  */
  public static async login(correoPersona: string): Promise<object> {

    const correo = await CorreoPersona.correoPersonaExiste(correoPersona);

    if (!correo) {
      return {
        ok: false,
        err: {
          message: '(Email) o Contraseña incorrectos'
        }
      }
    }

    return database.query(`
      SELECT *
      FROM Personas
      WHERE tipoDocumentoPersona = '${ correo.tipoDocumentoPersona}'
      AND numeroDocumentoPersona = '${ correo.numeroDocumentoPersona}'
      AND contrasenaPersona IS NOT NULL LIMIT 1`)
      .then((result: Persona[]) => {

        if (result.length === 0 || result[0].contrasenaPersona === null) {
          return {
            ok: false,
            err: {
              message: '(Email) o Contraseña incorrectos'
            }
          }
        }

        return {
          ok: true,
          message: 'Usuario logeado',
          usuario: result[0]
        }
      })
      .catch((error: MysqlError) => {
        console.log(error)
        return {
          ok: false,
          err: {
            message: 'Ocurrio un error en el logeo',
          },
          error
        }
      })

  }


  //=====================================================================
  // Esta consulta guarda una Persona en db
  //=====================================================================
  /*
  * Usando otros modelos busca si la persona que se va a guardar, esta
  * guardada ya en otra tabla, si lo esta, actualiza el resgistro en la tabla
  * Personas luego si el correo existe no guarda nada.
  */
  public static async guardarPersona(newPersona: Persona, correoPersona?: string) {

    let existePersona = await database.query(`
      SELECT *
      FROM Personas
      WHERE tipoDocumentoPersona = '${ newPersona.tipoDocumentoPersona}'
      AND numeroDocumentoPersona = '${ newPersona.numeroDocumentoPersona}'
      AND contrasenaPersona IS NULL `)
      .then((result: any[]) => {
        if (result.length === 0) return false;
        return true;
      })

    if (existePersona && correoPersona != undefined) {
      return await this.actualizarPersona(newPersona, correoPersona.toLowerCase())
    }


    if (correoPersona != undefined && newPersona['contrasenaPersona'] != undefined) {

      let existeCorreo = await CorreoPersona.correoPersonaExiste(correoPersona.toLowerCase())

      if (existeCorreo) {
        return {
          ok: false,
          err: {
            message: 'Correo ya existente'
          }
        }
      }

    }

    newPersona.tipoDocumentoPersona = newPersona.tipoDocumentoPersona.toLowerCase();

    return database.query('INSERT INTO Personas set ?', [newPersona])
      .then(async result => {

        if (correoPersona != undefined) {
          let correoRes: any = await CorreoPersona.guardarCorreoPersona(
            new CorreoPersona(
              correoPersona,
              newPersona['tipoDocumentoPersona'],
              newPersona['numeroDocumentoPersona']
            )
          )

          if (!correoRes.ok) {
            correoRes['message'] = correoRes.err['message']
          }
          return {
            ok: true,
            message: 'Persona guardada exitosamente ' + correoRes['message']
          }
        }

        return {
          ok: true,
          message: 'Persona guardada exitosamente '
        }


      })
      .catch((error: MysqlError) => {

        if (error.code === 'ER_DUP_ENTRY') {

          return {
            ok: false,
            err: {
              message: 'Persona ya existente'
            }
          }
        }
        return {
          ok: false,
          err: {
            message: 'Ocurrio un error al guardar el Persona'
          },
          error

        }
      })

  }


  //=====================================================================
  // Esta consulta actualiza un apersona en DB
  //=====================================================================
  /*
  * Para Aactualizar un registro en la tabla Perssonas Requerimos Tambien
  * Cambiar la tabla de correoPersona.
  */
  public static async actualizarPersona(newPersona: Persona, correoPersona: string) {

    if (newPersona['contrasenaPersona'] === undefined) {
      return {
        ok: false,
        err: {
          message: 'Actualizar a una persona desde la informacion de una Empresa o personaNatural no es permitido, por ahora'
        }
      }
    }

    if (correoPersona != undefined) {

      CorreoPersona.actualizarCorreoPersona(
        new CorreoPersona(
          correoPersona,
          newPersona.tipoDocumentoPersona,
          newPersona.numeroDocumentoPersona
        ))
    }

    return database.query(`
      UPDATE Personas set ?
      WHERE numeroDocumentoPersona = ${ newPersona.numeroDocumentoPersona}
      AND tipoDocumentoPersona = '${ newPersona.tipoDocumentoPersona}'`, [newPersona])
      .then(result => {
        if (result['affectedRows'] === 0) {
          return {
            ok: false,
            message: 'Persona no encontrada al modificar'
          }
        }

        return {
          ok: true,
          message: 'Persona Modificado exitosamente'
        }

      })
      .catch((err: MysqlError) => {

        console.log(err)
        return {
          ok: false,
          err: {
            message: 'Ocurrio un error al modificar el Persona'
          }

        }

      })
  }


  //=====================================================================
  // Esta consulta retorna todas las personas en db
  //=====================================================================
  /*
  * Retorna todas las personas haciendo match entre la tabla correo y personas
  * ( si la persona no tiene correo no puede ser vista con esta consulta)
  */
  public static async obtenerPersona(): Promise<Object> {

    return database.query(`
      SELECT *
      FROM Personas
      `
      // WHERE Personas.numeroDocumentoPersona = correoPersonas.numeroDocumentoPersona
      // AND Personas.tipoDocumentoPersona = correoPersonas.tipoDocumentoPersona`
    )
      .then(result => {

        if (result.length === 0) {
          return {
            ok: false,
            err: {
              message: 'Query exitoso, Pero no hay coincidencias en las tablas Personas y Correos',
            },
            result

          };
        }

        return {
          ok: true,
          message: 'Query exitoso',
          result

        };
      })
      .catch((error: MysqlError) => {
        return {
          ok: false,
          err: {
            message: 'Query fallido',
          },
          error

        };
      })

  }


  //=====================================================================
  // Esta consulta retorna todas las personas en db
  //=====================================================================
  public static async obtenerUnaPersona(identificacion: any, tipoDocumentoPersona: string) {

    return database.query(`
      SELECT *
      FROM Personas
      WHERE Personas.numeroDocumentoPersona = ${ identificacion}
      AND Personas.tipoDocumentoPersona = '${ tipoDocumentoPersona}'`)
      .then((result: object[]) => {


        if (result.length === 0) {
          return {
            ok: false,
            err: {
              message: 'No encontrado',
            }
          }
        }

        return {
          ok: true,
          message: 'Query exitoso',
          result

        };
      })
      .catch((error: MysqlError) => {
        return {
          ok: false,
          err: {
            message: 'Query fallido',
          },
          error

        };
      })

  }



  public static async borrarUnaPersona(identificacion: any, tipoDocumentoPersona: string) {

    return database.query(`
      DELETE
      FROM Personas
      WHERE Personas.numeroDocumentoPersona = ${ identificacion}
      AND Personas.tipoDocumentoPersona = '${ tipoDocumentoPersona}'`)
      .then(async (result) => {

        if (result['affectedRows'] === 0) {
          return {
            ok: false,
            err: {
              message: 'No encontrado',
            }
          }
        }

        let correoPersonaRes: any = await CorreoPersona.borrarCorreoPersona(tipoDocumentoPersona, identificacion)

        if (correoPersonaRes.ok) {
          return {
            ok: true,
            message: 'Persona Eliminada con exito ' + correoPersonaRes['message']
          };
        }

        if (!correoPersonaRes.ok) {
          return {
            ok: true,
            message: 'Persona Eliminada con exito ' + correoPersonaRes.err['message']
          };
        }

      })
      .catch((error: MysqlError) => {
        return {
          ok: false,
          err: {
            message: 'Query fallido',
          },
          error

        };
      })

  }


}
