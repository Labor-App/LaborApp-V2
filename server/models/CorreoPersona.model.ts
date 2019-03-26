import database from "../database/database";
import { Persona } from "./index.models";
import { MysqlError } from "mysql";

export class CorreoPersona {

  constructor(

    public correoPersona: string,
    public tipoDocumentoPersona: Persona['tipoDocumentoPersona'],
    public numeroDocumentoPersona: Persona['numeroDocumentoPersona']

  ) { }


  public static async correoPersonaExiste(email: string) {

    let query = `SELECT *
                FROM correoPersonas
                WHERE correoPersona = '${ email}'`


    return database.query(query)
      .then((result: CorreoPersona[]) => {
        if (result.length === 0) return false;
        return result[0];
      })

  }


  public static async guardarCorreoPersona(correoPersona: CorreoPersona) {

    correoPersona.correoPersona = correoPersona.correoPersona.toLowerCase();
    correoPersona.tipoDocumentoPersona = correoPersona.tipoDocumentoPersona.toLowerCase();

    return await database.query(`INSERT INTO correoPersonas set ?`, [correoPersona])
      .then(result => {

        return {
          ok: true,
          message: 'CorreoPersona guardado exitosamente'
        }

      })
      .catch((err: MysqlError) => {

        if (err.code === 'ER_DUP_ENTRY') {
          return {
            ok: false,
            err: {
              message: 'CorreoPersona ya existente'
            }
          }
        }
        return {
          ok: false,
          err: {
            message: 'Ocurrio un error al guardar el CorreoPersona'
          }

        }

      })

  }

  public static async actualizarCorreoPersona(correoPersona: CorreoPersona): Promise<object> {


    return database.query(`
      UPDATE correoPersonas set ?
      WHERE numeroDocumentoPersona = ${ correoPersona.numeroDocumentoPersona}
      AND tipoDocumentoPersona = '${ correoPersona.tipoDocumentoPersona}'`, [correoPersona])
      .then(result => {

        return {
          ok: true,
          message: 'Correo Modificado exitosamente'
        }

      })
      .catch((err: MysqlError) => {

        console.log(err)
        return {
          ok: false,
          err: {
            message: 'Ocurrio un error al modificar el Correo'
          }

        }

      })
  }

  public static async obtenerCorreoPersona(id?: number, tipo?: string) {

    let query = `SELECT * FROM correoPersonas`
    if ((id && tipo) != undefined) {
      query = `SELECT * FROM correoPersonas WHERE numeroDocumentoPersona = ${id} AND tipoDocumentoPersona = '${tipo}'`
    }

    return database.query(query)
      .then((result: CorreoPersona[]) => {

        if (result.length === 0) {
          return {
            ok: false,
            err: {
              message: `no hay registros con esos datos`
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

  }



  public static async borrarCorreoPersona(tipoDocumentoPersona: Persona['tipoDocumentoPersona'], numeroDocumentoPersona: Persona['numeroDocumentoPersona']) {

    return database.query(`
      DELETE
      FROM correoPersonas
      WHERE correoPersonas.numeroDocumentoPersona = ${ numeroDocumentoPersona}
      AND correoPersonas.tipoDocumentoPersona = '${ tipoDocumentoPersona}'`)
      .then(result => {

        if (result['affectedRows'] === 0) {
          return {
            ok: false,
            message: 'Correo Persona No Fue eliminado',

          };
        }

        return {
          ok: true,
          message: 'Correo Persona Eliminado exitosamente',

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

}
