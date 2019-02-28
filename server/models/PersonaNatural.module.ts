import database from "../database/database";
import { Persona } from "./index.models";
import { MysqlError } from "mysql";


export class PersonaNatural {

  constructor(
    public IdPersonaNatural: number | undefined | null,
    public tipoDocumentoPersona: string |null,
    public numeroDocumentoPersona: number | null,
    public correoPersona?: string | null,
  ) { }


  public static async existePersonaNatural(persona: Persona): Promise<boolean> {

    return await database.query(`SELECT * FROM PersonaNatural WHERE numeroDocumentoPersona = '${persona.numeroDocumentoPersona}' AND tipoDocumentoPersona = '${persona.tipoDocumentoPersona}' AND correoPersona = '${persona.correoPersona}'`
    )
      .then((result: any[]) => {

        if (result.length === 0) {
          return false;
        }

        return true;

      })

  }

  public static async guardarPersonaNatural(personaNatural: PersonaNatural) {

    return database.query(`INSERT INTO PersonaNatural set ?`, [personaNatural])
      .then(result => {

        return {
          ok: true,
          message: 'Persona Natural guardado exitosamente'
        }

      })
      .catch((err: MysqlError) => {

        if (err.code === 'ER_DUP_ENTRY') {
          return {
            ok: false,
            err: {
              message: 'Persona Natural ya existente'
            }
          }
        }
        console.log(err)
        return {
          ok: false,
          err: {
            message: 'Ocurrio un error al guardar el Persona Natural'
          }

        }

      })

  }


  public static obtenerPersonaNatural(): Object {

    return database.query('SELECT * FROM PersonaNatural')
      .then( result => {
        return {
          ok: true,
          message: 'Query exitoso',
          result

        };
      })
      .catch( err => {
        return {
          ok: false,
          message: 'Query fallido',
          err

        };
      })

  }

}
