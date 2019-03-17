import { ContratoLaboral, DemandaEmpresa } from "./index.models";
import { MysqlError } from "mysql";
import database from "../database/database";

export class ConflictoCesantias {

  constructor(
    public idConflictoCesantias: number | undefined,
    public fechaInicioContrato: ContratoLaboral['fechaInicioContrato'],
    public fechaFinalContrato: ContratoLaboral['fechaFinalContrato'],
    public fechaUltimasCesantiasPagadas: Date | null,
    public fechaFinalNoPagoCesantias: Date | null,
    public montoDinero_Cesantias: number | null,
    public montoDinero_InteresesCesantias: number | null,
    public idDemandaPersonaNatural: number | null,
    public idDemandaEmpresa: DemandaEmpresa['idDemandaEmpresa']
  ) { }

  public static async guardarConflictoCesantias(conflictoCesantias: ConflictoCesantias) {

    return database.query("INSERT INTO conflictoCesantias set ?", [conflictoCesantias])
      .then(async result => {

        let conflictoCesantiasRes = await this.obtenerConflictoCesantias();

        conflictoCesantias['idConflictoCesantias'] = conflictoCesantiasRes.result[conflictoCesantiasRes.result.length - 1]['idConflictoCesantias']

        return {
          ok: true,
          message: 'ConflictoCesantias guardada exitosamente',
          conflictoCesantias
        }
      })
      .catch((error: MysqlError) => {

        if (error.code === 'ER_DUP_ENTRY') {
          return {
            ok: false,
            err: {
              message: 'ConflictoCesantias ya existente'
            },
          }
        }

        return {
          ok: false,
          err: {
            message: 'Ocurrio un error al guardar la ConflictoCesantias',
          },
          error
        }

      })

  }

  public static obtenerConflictoCesantias(id?: number) {

    let query = `SELECT * FROM conflictoCesantias`

    if (id != undefined) {
      query = `SELECT * FROM conflictoCesantias WHERE idConflictoCesantias = ${id}`
    }

    return database.query(query)
      .then((result: ConflictoCesantias[]) => {

        if (result.length === 0) {
          return {
            ok: false,
            err: {
              message: 'Query exitoso, Pero no hay coincidencias en las tabla ConflictoCesantias'
            },
            result
          }
        }

        return {
          ok: true,
          message: 'Query exitoso',
          result

        }

      })


  }

}
