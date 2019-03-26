import { ContratoLaboral, DemandaPersonaNatural, DemandaEmpresa } from "./index.models";
import database from "../database/database";
import { MysqlError } from "mysql";

export class ConflictoVacaciones {

  constructor(
    public idConflictoVacaciones: number | undefined,
    public fechaInicioContrato: ContratoLaboral['fechaInicioContrato'],
    public fechaFinalContrato: ContratoLaboral['fechaFinalContrato'],
    public fechaUltimasVacaciones: Date,
    public fechaFinalNoPagoVacaciones: Date,
    public montoDinero_Vacaciones: number,
    public idDemandaPersonaNatural: DemandaPersonaNatural['idDemandaPersonaNatural'],
    public idDemandaEmpresa: DemandaEmpresa['idDemandaEmpresa'],
  ) { }


  public static async guardarConflictoVacaciones(conflictoVacaciones: ConflictoVacaciones) {

    return database.query("INSERT INTO conflictoVacaciones set ?", [conflictoVacaciones])
      .then(async result => {

        let conflictoVacacionesRes = await this.obtenerConflictoVacaciones();

        conflictoVacaciones['idConflictoVacaciones'] = conflictoVacacionesRes.result[conflictoVacacionesRes.result.length - 1 ]['idConflictoVacaciones']

        return {
          ok: true,
          message: 'ConflictoVacaciones guardada exitosamente',
          conflictoVacaciones
        }
      })
      .catch((err: MysqlError) => {

        if (err.code === 'ER_DUP_ENTRY') {
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


  public static async obtenerConflictoVacaciones(id?: number, tipo?: string) {

    let query = `SELECT * FROM conflictoVacaciones`

    if (id != undefined) {
      query = `SELECT * FROM conflictoVacaciones WHERE ${tipo} = ${id}`
    }

    return database.query(query)
    .then( (result: ConflictoVacaciones[]) => {


      if(result .length === 0){
        return {
          ok: true,
          err: {
            message: 'Query exitoso, Pero no hay coincidencias en las tabla ConflictoVacaciones'
          },
          result
        }
      }

      return {
        ok: true,
        message: 'Query exitoso',
        result

      }
      
    } )

  }

}
