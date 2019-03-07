import { Persona, Empresa, ContratoLaboral } from "./index.models";
import database from "../database/database";
import { MysqlError } from "mysql";

export class DemandaEmpresa {

  constructor(
    public idDemandaEmpresa: number | undefined,
    public fechaDemandaEmpresa: Date,
    public codigoCiudad: number,
    public tipoDocumentoPersona: Persona['tipoDocumentoPersona'],
    public numeroDocumentoPersona: Persona['numeroDocumentoPersona'],
    public NItEmpresa: Empresa['NItEmpresa'],
    public idContrato: ContratoLaboral['idContrato'],
    public fechaPropuestaRadicacionDemandaEmpresa: Date | null,
    public fecharRealRadicacionDemandaEmpresa: Date | null,
    public fechaPropuestaRadicacionDerechoPetiEmpresa: Date | null,
    public fecharRealRadicacionDerechoPetiEmpresa: Date | null,
    public informeDesicionFinalDemandaEmpresa: string | null,
    public respuestaFinalDemandaEmpresa: boolean | null
  ){  }


  public static guardarDemandaPersonaNatural(demandaEmpresa: DemandaEmpresa){

    database.query(`INSERT INTO demandaPersonaNatural set ?`, [demandaEmpresa])
    .then( result => {
      return {
        ok: true,
        message: 'Demanda Empresa guardada exitosamente'
      }
    })
    .catch( (err: MysqlError) => {

      if( err.code === 'ER_DUP_ENTRY' ){

        return {
          ok: false,
          message: 'Demanda Empresa ya existente'
        }
      }

      return {
        ok: false,
        message: 'Ocurrio un error al guardar la Demanda Empresa',
        err
      }

    })
  }
}
