import database from '../database/database';
import { DemandaPersonaNatural, DemandaEmpresa, ContratoLaboral } from './index.models';
import { MysqlError } from 'mysql';

export class ConflictoDespidoSJC {

  constructor(
    public idConflictoDespidoSJC:number | undefined ,
    public idDemandaPersonaNatural: DemandaPersonaNatural['idDemandaPersonaNatural'] | null,
    public idDemandaEmpresa: DemandaEmpresa['idDemandaEmpresa'] | null,
    public fechaInicioContrato: ContratoLaboral['fechaInicioContrato'],
    public fechaDespido: Date | null,
    public montoDinero_DSJC: number | null
  ){  }


  public static async guardarConflictoDespidoSJC(conflictoDespidoSJC: ConflictoDespidoSJC) {

    return database.query("INSERT INTO conflictoDespidoSJC set ?", [conflictoDespidoSJC])
      .then( result => {
        return {
          ok: true,
          message: 'ConflictoDespidoSJC guardada exitosamente'
        }
      })
      .catch( (err: MysqlError) => {

        if( err.code === 'ER_DUP_ENTRY' ){
          return {
            ok: false,
            message: 'ConflictoDespidoSJC ya existente'
          }
        }

        return {
          ok: false,
          message: 'Ocurrio un error al guardar la ConflictoDespidoSJC',
          err
        }

      })

  }

}
