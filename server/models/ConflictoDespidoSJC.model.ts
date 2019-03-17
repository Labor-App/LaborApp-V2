import database from '../database/database';
import { DemandaPersonaNatural, DemandaEmpresa, ContratoLaboral } from './index.models';
import { MysqlError } from 'mysql';

export class ConflictoDespidoSJC {

  constructor(
    public idConflictoDespidoSJC: number | undefined,
    public idDemandaPersonaNatural: DemandaPersonaNatural['idDemandaPersonaNatural'] | null,
    public idDemandaEmpresa: DemandaEmpresa['idDemandaEmpresa'] | null,
    public fechaInicioContrato: ContratoLaboral['fechaInicioContrato'],
    public tipoContrato: ContratoLaboral['tipoContrato'],
    public fechaDespido: Date | null,
    public montoDinero_DSJC: number | null
  ) { }


  public static async guardarConflictoDespidoSJC(conflictoDespidoSJC: ConflictoDespidoSJC) {

    return database.query("INSERT INTO conflictoDespidoSJC set ?", [conflictoDespidoSJC])
      .then(async result => {

        let conflictoDespidoSJCRes = await this.obtenerConflictoDespidoSJC();

        conflictoDespidoSJC['idConflictoDespidoSJC'] = conflictoDespidoSJCRes.result[conflictoDespidoSJCRes.result.length - 1]['idConflictoDespidoSJC']

        return {
          ok: true,
          message: 'ConflictoDespidoSJC guardada exitosamente',
          conflictoDespidoSJC
        }
      })
      .catch((error: MysqlError) => {

        if (error.code === 'ER_DUP_ENTRY') {
          return {
            ok: false,
            err: {
              message: 'ConflictoDespidoSJC ya existente'
            },
          }
        }

        return {
          ok: false,
          err: {
            message: 'Ocurrio un error al guardar la ConflictoDespidoSJC',
          },
          error
        }

      })

  }


  public static async obtenerConflictoDespidoSJC(id?: number) {

    let query = `SELECT * FROM conflictoDespidoSJC`


    if (id != undefined) {
      query = `SELECT * FROM conflictoDespidoSJC WHERE idConflictoDespidoSJC = $ {id}`
    }


    return database.query(query)
      .then((result: ConflictoDespidoSJC[]) => {

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
