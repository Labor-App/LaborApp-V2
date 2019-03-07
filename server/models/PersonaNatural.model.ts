import database from "../database/database";
import { Persona } from "./index.models";
import { MysqlError } from "mysql";


export class PersonaNatural {

  constructor(
    public IdPersonaNatural: number | undefined,
    public tipoDocumentoPersona: Persona['tipoDocumentoPersona'],
    public numeroDocumentoPersona: Persona['numeroDocumentoPersona']
  ) {  }


  private static documentoUnico(documento: number, tipoDeDocumento: string){

    switch(tipoDeDocumento.toLowerCase()){
      case 'cedulaciudadania':
        return documento + 10
      case 'pasaporte':
        return documento + 100
    }
  }

  //=====================================================================
  // Esta Consulta Guarda en personaNatural en DB
  //=====================================================================
  /*
  * Se guarda primero en la tabla empresa (internamente el metodo
  * Persona.guardarPersona() tiene sus propias validaciones), luego lo guarda
  * en la tabla personaNatural, construye el idDePersonaNatural concatenando
  * el documento + un multiplo de 5
  */
  public static async guardarPersonaNatural(personaNatural: PersonaNatural, newPersona: Persona, correo: string ) {

    let personaRes: any = await Persona.guardarPersona(newPersona, correo);

    if (!personaRes.ok){
      return personaRes;
    }

    personaNatural['IdPersonaNatural'] = this.documentoUnico(
      personaNatural.numeroDocumentoPersona,
      personaNatural.tipoDocumentoPersona
    )

    return database.query(`
      INSERT INTO PersonaNatural
      SET IdPersonaNatural = ?,
      tipoDocumentoPersona = ?,
      numeroDocumentoPersona = ?`,
      [
        personaNatural['IdPersonaNatural'],
        personaNatural.tipoDocumentoPersona.toLowerCase(),
        personaNatural.numeroDocumentoPersona
      ]
    )
      .then(result => {

        if(personaRes.ok)
        return {
          ok: true,
          message: 'Persona Natural guardado exitosamente' + personaRes['message']
        }

        if(!personaRes.ok)
        return {
          ok: true,
          message: 'Persona Natural guardado exitosamente' + personaRes.err['message']
        }

      })
      .catch((error: MysqlError) => {

        if (error.code === 'ER_DUP_ENTRY') {

          return {
            ok: false,
            err: {
              message: 'Persona Natural ya existente'
            }
          }
        }
        return {
          ok: false,
          err: {
            message: 'Ocurrio un error al guardar el Persona Natural'
          },
          error

        }

      })

  }

  public static async actualizarPersonaNatural( newPersonaNatural: PersonaNatural) {

    return await database.query(`
      UPDATE PersonaNatural
      set ?
      WHERE numeroDocumentoPersona = ${ newPersonaNatural.numeroDocumentoPersona }
      AND tipoDocumentoPersona = ${ newPersonaNatural.tipoDocumentoPersona }`
    )
    .then(result => {
      return {
        ok: true,
        message: 'PersonaNatural Modificado exitosamente'
      }
    })
    .catch( (err: MysqlError) => {

      console.log(err)
      return {
        ok: false,
        err: {
          message: 'Ocurrio un error al modificar el usuario'
        }
      }
    })

  }

  public static async obtenerPersonaNatural() {

    return database.query(`
      SELECT *
      FROM PersonaNatural
      `
      // WHERE PersonaNatural.numeroDocumentoPersona = Personas.numeroDocumentoPersona
      // AND PersonaNatural.tipoDocumentoPersona = Personas.tipoDocumentoPersona`
    )
      .then( (result: PersonaNatural[]) => {

        if( result.length === 0 ){
          return {
            ok: false,
            err: {
              message: 'Query exitoso, Pero no hay coincidencias en las tablas PersonasNatural y Correos',
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
      .catch( err => {
        return {
          ok: false,
          message: 'Query fallido',
          err

        };
      })

  }

  public static obtenerUnaPersonaNatural(idPersonaNatural: PersonaNatural['IdPersonaNatural']): Object {

    return database.query(`
      SELECT *
      FROM PersonaNatural, correoPersonas
      WHERE PersonaNatural.numeroDocumentoPersona = correoPersonas.numeroDocumentoPersona
      AND PersonaNatural.tipoDocumentoPersona = correoPersonas.tipoDocumentoPersona
      AND IdPersonaNatural = ${ idPersonaNatural }`)
      .then( (result: PersonaNatural[]) => {

        if( result.length === 0 ){
          return {
            ok: false,
            err: {
              message: 'Query exitoso, Pero no hay coincidencias en las tablas PersonasNatural y Correos',
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
      .catch( err => {
        return {
          ok: false,
          message: 'Query fallido',
          err

        };
      })

  }

  public static borrarPersonaNatural(idPersonaNatural: PersonaNatural['IdPersonaNatural']): Object {

    return database.query(`
      DELETE
      FROM PersonaNatural
      WHERE IdPersonaNatural = ${ idPersonaNatural }`)
      .then( (result) => {

        if( result['affectedRows'] === 0 ){
          return {
            ok: false,
            err: {
              message: 'Query exitoso, Pero no hay coincidencias en las tablas PersonasNatural y Correos',
            },

          };
        }

        return {
          ok: true,
          message: 'Persona natural Borrada exitosamente',

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
