import database from "../database/database";
import { MysqlError, queryCallback } from "mysql";

export class Empresa {

  constructor(
    public NItEmpresa: number,
    public nombreEmpresaRS: string,
    public telefonoEmpresa: number,
    public emailEmpresa: string,
    public direccionEmpresa: string,
    public codigoDaneMunicipio: number,
  ){  }

  public static guardarEmpresa(empresa: Empresa): object {

    return database.query("INSERT INTO Empresa set ?", [empresa])
      .then( result => {
        return {
          ok: true,
          message: 'Empresa guardada exitosamente'
        }
      })
      .catch( (err: MysqlError) => {

        if( err.code === 'ER_DUP_ENTRY' ){
          return {
            ok: true,
            message: 'Empresa ya existente'
          }
        }

        return {
          ok: false,
          message: 'Ocurrio un error al guardar la empresa'

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
        console.log(err)
      })

  }

}
