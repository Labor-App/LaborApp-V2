import database from "../database/database";
import { MysqlError } from "mysql";
import { ConsultorioJuridico, PersonaNatural } from "./index.models";


export class Persona {

  constructor(
    public tipoDocumentoPersona: string | null,
    public numeroDocumentoPersona: number | null,
    public nombresPersona: string | null,
    public apellidosPersona: string | null,
    public correoPersona?: string | null,
    public fechaNacimientoPersona?: Date,
    public direccionPersona?: string,
    public generoPersona?: string,

    public lugarExpedicionCedulaPersona?: string,

    public contrasenaPersona?: string,
    public codigoCiudad?: number,
  ){ }


  public static login( usuario: Persona): Object {

    return database.query(`SELECT * FROM Personas WHERE correoPersona = '${ usuario.correoPersona }' AND contrasenaPersona IS NOT NULL LIMIT 1`)
      .then( (result: Persona[]) => {


        if( result.length === 0 || result[0].contrasenaPersona === null){
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
      .catch( (error: MysqlError) =>  {
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

  public static async guardarUsuario( newUsuario: Persona ): Promise<Object>  {

    const existeArreglo = await Promise.all([ ConsultorioJuridico.existeConsultorioJuridico(newUsuario), PersonaNatural.existePersonaNatural(newUsuario)])
    let existe = false;

    for(let position of existeArreglo){
      if(position) {
        existe = position;
      }
    }

    if( existe ){
      return await this.actualizarPersona(newUsuario)
    }

    return database.query('INSERT INTO Personas set ?', [newUsuario])
    .then( result => {

      return {
        ok: true,
        message: 'Usuario guardada exitosamente'
      }

    })
    .catch( (err: MysqlError) => {

      if( err.code === 'ER_DUP_ENTRY' ){
        return {
          ok: false,
          err: {
            message: 'Usuario ya existente'
          }
        }
      }
      console.log(err)
      return {
        ok: false,
        err: {
          message: 'Ocurrio un error al guardar el usuario'
        }

      }

    })

  }

  private static actualizarPersona(newUsuario: Persona): object {

    return database.query(`UPDATE Personas set ? WHERE numeroDocumentoPersona = ${ newUsuario.numeroDocumentoPersona } AND correoPersona = '${ newUsuario.correoPersona }'`, [newUsuario])
    .then( result => {

      return {
        ok: true,
        message: 'Usuario Modificado exitosamente'
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

  public static obtenerEmpresas(): Object {

    return database.query('SELECT * FROM Personas')
      .then( result => {
        return {
          ok: true,
          message: 'Query exitoso',
          result

        };
      })
      .catch( (error: MysqlError)=> {
        return {
          ok: false,
          err:{
            message: 'Query fallido',
          },
          error

        };
      })

  }

}
