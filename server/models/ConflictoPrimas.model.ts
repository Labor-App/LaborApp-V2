import { DemandaPersonaNatural } from "./DemandaPersonaNatural.model";
import { DemandaEmpresa } from "./DemandaEmpresa.model";
import { ContratoLaboral } from "./ContratoLaboral.model";
import database from "../database/database";
import { MysqlError } from "mysql";

export class ConflictoPrimas {

  constructor(
    public idConflictoPrima: number | undefined,
    public fechaInicioContrato: ContratoLaboral['fechaInicioContrato'],
    public fechaFinalContrato: ContratoLaboral['fechaFinalContrato'],
    public fechaUltimaPrimaPagada: Date | null,
    public fechaFinalNoPagoPrima: Date | null,
    public montoDinero_Prima: number | null,
    public idDemandaPersonaNatural: DemandaPersonaNatural['idDemandaPersonaNatural'] | null,
    public idDemandaEmpresa: DemandaEmpresa['idDemandaEmpresa'],

  ) { }


  public static async guardarConflictoPrimas(conflictoPrimas: ConflictoPrimas) {

    return database.query(`INSERT INTO conflictoPrimas set ?`, conflictoPrimas)
      .then(async result => {

        let conflictoPrimasRes: any =  await this.obtenerConflictoPrimas();

        conflictoPrimas['idConflictoPrima'] = conflictoPrimasRes.result[ conflictoPrimasRes.result.length - 1 ]['idConflictoPrima'];

        return {
          ok: true,
          message: 'conflictoPrimas guardada exitosamente',
          conflictoPrimas
        }

      })
      .catch((error: MysqlError) => {

        if (error.code === 'ER_DUP_ENTRY') {
          return {
            ok: false,
            err: {
              message: 'conflictoPrimas ya existente'
            }
          }
        }

        return {
          ok: false,
          err: {
            message: 'Ocurrio un error al guardar la conflictoPrimas',
          },
          error
        }

      })
  }

  public static async obtenerConflictoPrimas(id?: number) {

    let query = `SELECT * From conflictoPrimas`

    if (id != undefined) {
      query = `SELECT * From conflictoPrimas WHERE idConflictoPrima = ${id}`
    }

    return database.query(query)
      .then((result: ConflictoPrimas[]) => {

        if (result.length === 0) {
          return {
            ok: false,
            err: {
              message: 'Query exitoso, Pero no hay coincidencias en las tabla conflictoPrimas'
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

      .catch((error: MysqlError) => {

        return {
          ok: false,
          err: {
            message: 'Ocurrio un error al guardar la conflictoPrimas'
          },
          error
        }

      })

  }


}