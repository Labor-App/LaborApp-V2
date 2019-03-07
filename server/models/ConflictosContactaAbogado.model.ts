import { DemandaPersonaNatural, DemandaEmpresa } from "./index.models";
import database from "../database/database";
import { MysqlError } from "mysql";

export class ConflictosContactaAbogado {

  constructor(
    public idConflictoContactaAbogado: number | undefined,
    public idDemandaPersonaNatural: DemandaPersonaNatural['IdPersonaNatural'],
    public idDemandaEmpresa: DemandaEmpresa['idDemandaEmpresa'],
    public conflictoARL?: boolean | null,
    public conflictoPensiones?: boolean | null,
    public conflictoPrima?: boolean | null,
    public conflictoHorasExtras?: boolean | null,
    public conflictoDominicalesFestivos?: boolean | null,
  ){  }

  public static async guardarConflictosContactaAbogado(conflictosContactaAbogado: ConflictosContactaAbogado) {

    return database.query("INSERT INTO conflictoDespidoSJC set ?", [conflictosContactaAbogado])
      .then( result => {
        return {
          ok: true,
          message: 'ConflictosContactaAbogado guardada exitosamente'
        }
      })
      .catch( (err: MysqlError) => {

        if( err.code === 'ER_DUP_ENTRY' ){
          return {
            ok: false,
            message: 'ConflictosContactaAbogado ya existente'
          }
        }

        return {
          ok: false,
          message: 'Ocurrio un error al guardar la ConflictosContactaAbogado',
          err
        }

      })

  }

}
