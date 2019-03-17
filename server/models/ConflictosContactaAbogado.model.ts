import { DemandaPersonaNatural, DemandaEmpresa } from "./index.models";
import database from "../database/database";
import { MysqlError } from "mysql";

export class ConflictosContactaAbogado {

  constructor(
    public idConflictoContactaAbogado: number | undefined,
    public conflictoARL: number | null,
    public conflictoPensiones: number | null,
    public conflictoHorasExtras: number | null,
    public conflictoDominicalesFestivos: number | null,
    public idDemandaPersonaNatural: DemandaPersonaNatural['IdPersonaNatural'],
    public idDemandaEmpresa: DemandaEmpresa['idDemandaEmpresa'],
  ) { }

  public static async guardarConflictosContactaAbogado(conflictosContactaAbogado: ConflictosContactaAbogado) {

    return database.query("INSERT INTO conflictosContactaAbogado set ?", [conflictosContactaAbogado])
      .then(async result => {

        let conflictosContactaAbogadoRes = await this.obtenerConflictosContactaAbogado();

        conflictosContactaAbogado['idConflictoContactaAbogado'] = conflictosContactaAbogadoRes.result[conflictosContactaAbogadoRes.result.length - 1]['idConflictoContactaAbogado']

        return {
          ok: true,
          message: 'ConflictosContactaAbogado guardada exitosamente',
          conflictosContactaAbogado
        }
      })
      .catch((error: MysqlError) => {

        if (error.code === 'ER_DUP_ENTRY') {
          return {
            ok: false,
            err: {
              message: 'ConflictosContactaAbogado ya existente',
            }
            
          }
        }
MediaStreamError
        return {
          ok: false,
          err: {
            message: 'Ocurrio un error al guardar la ConflictosContactaAbogado',
          },
          error
        }

      })

  }


  public static async obtenerConflictosContactaAbogado(id?: number) {

    let query = `SELECT * FROM conflictosContactaAbogado`


    if (id != undefined) {
      query = `SELECT * FROM conflictosContactaAbogado WHERE idConflictoContactaAbogado = $ {id}`
    }


    return database.query(query)
      .then((result: ConflictosContactaAbogado[]) => {

        if (result.length === 0) {
          return {
            ok: false,
            err: {
              message: 'Query exitoso, Pero no hay coincidencias en las tabla ConflictoDespidoSJC'
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
