import { ContratoLaboral, DemandaEmpresa } from "./index.models";
import { MysqlError } from "mysql";
import database from "../database/database";

export class ConflictoPagoSalario{

  constructor(
    public idConflictoPagoSalario: number | undefined,
    public fechaInicioContrato: ContratoLaboral['fechaInicioContrato'],
    public fechaInicioNoPago: Date,
    public fechaFinalNoPagoSalario: Date,
    public fechaFinalContrato: ContratoLaboral['fechaFinalContrato'],
    public montoDinero_PagoSalario: number | null,
    public idDemandaPersonaNatural: number | null,
    public idDemandaEmpresa: DemandaEmpresa['idDemandaEmpresa']
  ){  }

  public static async guardarConflictoPagoSalario(conflictoPagoSalario: ConflictoPagoSalario) {

    return database.query("INSERT INTO conflictoPagoSalario set ?", [conflictoPagoSalario])
      .then( async result => {

        let conflictoPagoSalarioRes = await this.obtenerConflictoPagoSalario();

        conflictoPagoSalario['idConflictoPagoSalario'] = conflictoPagoSalarioRes.result[ conflictoPagoSalarioRes.result.length - 1  ]['idConflictoPagoSalario']

        return {
          ok: true,
          message: 'ConflictoPagoSalario guardada exitosamente',
          conflictoPagoSalario
          
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

  
  public static async obtenerConflictoPagoSalario(id?: number) {

    let query = `SELECT * FROM conflictoPagoSalario`

    if (id != undefined) {
      query = `SELECT * FROM conflictoPagoSalario WHERE idConflictoPagoSalario = ${id}`
    }

    return database.query(query)
    .then( (result: ConflictoPagoSalario[]) => {


      if(result .length === 0){
        return {
          ok: true,
          err: {
            message: 'Query exitoso, Pero no hay coincidencias en las tabla ConflictoPagoSalario'
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
