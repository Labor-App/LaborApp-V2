import { ContratoLaboral, DemandaEmpresa } from "./index.models";
import { MysqlError } from "mysql";
import database from "../database/database";

export class ConflictoPagoSalario{

  constructor(
    public idConflictoPagoSalario: number | undefined,
    public fechaInicioContrato: ContratoLaboral['fechaInicioContrato'],
    public fechaInicioNoPago: Date,
    public fechaFinalContrato: ContratoLaboral['fechaFinalContrato'],
    public montoDinero_PagoSalario: number | null,
    public idDemandaPersonaNatural: number | null,
    public idDemandaEmpresa: DemandaEmpresa['idDemandaEmpresa']
  ){  }

  public static async guardarConflictoPagoSalario(conflictoPagoSalario: ConflictoPagoSalario) {

    return database.query("INSERT INTO conflictoDespidoSJC set ?", [conflictoPagoSalario])
      .then( result => {
        return {
          ok: true,
          message: 'ConflictoPagoSalario guardada exitosamente'
        }
      })
      .catch( (err: MysqlError) => {

        if( err.code === 'ER_DUP_ENTRY' ){
          return {
            ok: false,
            message: 'ConflictoPagoSalario ya existente'
          }
        }

        return {
          ok: false,
          message: 'Ocurrio un error al guardar la ConflictoPagoSalario',
          err
        }

      })

  }

}
