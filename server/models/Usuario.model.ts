import database from "../database/database";
import { MysqlError } from "mysql";


export class Usuario {

  constructor(
    public correoPersona: string,
    public nombresPersona?: string,
    public cedulaPersona?: number,
    public apellidosPersona?: string,
    public fechaNacimientoPersona?: string,
    public codigoDaneMunicipio?: string,
  ){ }


  public static login( usuario: Usuario): Object {

    return database.query(`SELECT * FROM Personas WHERE correoPersona = '${ usuario.correoPersona }' LIMIT 1`)
      .then( (result: Usuario[]) => {

        if( result.length === 0){
          return {
            ok: false,
            err: {
              message: 'Email o Contraseña incorrectos'
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
        return {
          ok: false,
          err: {
            message: 'Ocurrio un error en el logeo',
          },
          error
        }
      })
  }

  public static guardarUsuario( newUsuario: Usuario ): Object {

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

        return {
          ok: false,
          err: {
            message: 'Ocurrio un error al guardar el usuario'
          }

        }

      })

  }

  public static obtenerEmpresas(): Object {

    return database.query('SELECT * FROM Empresa')
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
