import { ContratoLaboral, DemandaPersonaNatural, DemandaEmpresa } from "./index.models";
import database from "../database/database";
import { MysqlError } from "mysql";

export class ConflictoVacaciones {

  constructor(
    public idConflictoVacaciones: number | undefined,
    public fechaInicioContrato: ContratoLaboral['fechaInicioContrato'],
    public fechaFinalContrato: ContratoLaboral['fechaFinalContrato'],
    public fechaUltimasVacaciones: Date,
    public montoDinero_Vacaciones: number,
    public idDemandaPersonaNatural: DemandaPersonaNatural['idDemandaPersonaNatural'],
    public idDemandaEmpresa: DemandaEmpresa['idDemandaEmpresa'],
  ){  }


  public static async guardarConflictoPagoSalario(conflictoVacaciones: ConflictoVacaciones) {

    return database.query("INSERT INTO conflictoVacaciones set ?", [conflictoVacaciones])
      .then( result => {
        return {
          ok: true,
          message: 'ConflictoVacaciones guardada exitosamente'
        }
      })
      .catch( (err: MysqlError) => {

        if( err.code === 'ER_DUP_ENTRY' ){
          return {
            ok: false,
            message: 'ConflictoVacaciones ya existente'
          }
        }

        return {
          ok: false,
          message: 'Ocurrio un error al guardar la ConflictoVacaciones',
          err
        }

      })

  }

}
