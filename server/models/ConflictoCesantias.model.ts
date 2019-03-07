import { ContratoLaboral, DemandaEmpresa } from "./index.models";
import { MysqlError } from "mysql";
import database from "../database/database";

export class ConflictoCesantias {

  constructor(
    public idConflictoCesantias: number | undefined,
    public fechaInicioContrato: ContratoLaboral['fechaInicioContrato'],
    public fechaFinalContrato: ContratoLaboral['fechaFinalContrato'],
    public fechaUltimasCesantiasPagadas: Date | null,
    public montoDinero_Cesantias: number | null,
    public montoDinero_InteresesCesantias: number | null,
    public idDemandaPersonaNatural: number | null,
    public idDemandaEmpresa: DemandaEmpresa['idDemandaEmpresa']
  ){  }

  public static async guardarConflictoPagoSalario(conflictoCesantias: ConflictoCesantias) {

    return database.query("INSERT INTO conflictoDespidoSJC set ?", [conflictoCesantias])
      .then( result => {
        return {
          ok: true,
          message: 'ConflictoCesantias guardada exitosamente'
        }
      })
      .catch( (err: MysqlError) => {

        if( err.code === 'ER_DUP_ENTRY' ){
          return {
            ok: false,
            message: 'ConflictoCesantias ya existente'
          }
        }

        return {
          ok: false,
          message: 'Ocurrio un error al guardar la ConflictoCesantias',
          err
        }

      })

  }

}
