import database from "../database/database";
import { MysqlError } from "mysql";
import { Persona, PersonaNatural } from "./index.models";

export class Empresa {

  constructor(
    public NItEmpresa: number,
    public nombreEmpresaRS: string,
    public direccionEmpresa: string,
    public codigoCiudad: number,
    public telefonoEmpresa?: number,
    public emailEmpresa?: string,
    public tipoDocumentoPersona?: string | null,
    public numeroDocumentoPersona?: number | null,
    public correoPersona?: string | null
  ){  }

  public static async guardarEmpresa(empresa: Empresa, persona?: Persona): Promise<object> {

    if(persona != undefined){

      persona.codigoCiudad = empresa.codigoCiudad;
      empresa.tipoDocumentoPersona = persona.tipoDocumentoPersona;
      empresa.numeroDocumentoPersona = persona.numeroDocumentoPersona;
      empresa.correoPersona = persona.correoPersona;


      await Persona.guardarUsuario(persona);

      await PersonaNatural.guardarPersonaNatural(
        new PersonaNatural(
          undefined,
          persona.tipoDocumentoPersona,
          persona.numeroDocumentoPersona,
          persona.correoPersona
        )
      )
    }

    return database.query("INSERT INTO Empresa set ?", [empresa])
      .then( result => {
        return {
          ok: true,
          message: 'Empresa guardada exitosamente'
        }
      })
      .catch( (err: MysqlError) => {

        if( err.code === 'ER_DUP_ENTRY' ){
          if (persona != undefined){
            return this.actualizarEmpresa(empresa);
          }
          return {
            ok: false,
            message: 'Empresa ya existente'
          }
        }

        return {
          ok: false,
          message: 'Ocurrio un error al guardar la empresa',
          err
        }

      })

  }

  private static actualizarEmpresa(empresa: Empresa){

    return database.query(`UPDATE Empresa set ? WHERE NItEmpresa = '${ empresa.NItEmpresa }'`, [empresa])
    .then( result => {

      return {
        ok: true,
        message: 'Empresa Modificado exitosamente'
      }

    })
    .catch( (err: MysqlError) => {

      console.log(err)
      return {
        ok: false,
        err: {
          message: 'Ocurrio un error al modificar la Empresa'
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
      .catch( err => {
        return {
          ok: false,
          message: 'Query fallido',
          err

        };
      })

  }

}
