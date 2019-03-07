import { Persona, PersonaNatural, ContratoLaboral } from "./index.models";
import database from "../database/database";
import { MysqlError } from "mysql";


export class DemandaPersonaNatural {

  constructor(
    public idDemandaPersonaNatural: number | undefined,
    public fechaDemandaPersonaNatural: Date,
    public codigoCiudad: number,
    public tipoDocumentoPersona: Persona['tipoDocumentoPersona'],
    public numeroDocumentoPersona: Persona['numeroDocumentoPersona'],
    public IdPersonaNatural: PersonaNatural['IdPersonaNatural'],
    public idContrato: ContratoLaboral['idContrato'],
    public fechaPropuestaRadicacionDemandaPersonaN: Date | null,
    public fecharRealRadicacionDemandaPersonaN: Date | null,
    public fechaPropuestaRadicacionDerechoPetiPersonaN: Date | null,
    public fecharRealRadicacionDerechoPetiPersonaN: Date | null,
    public informeDesicionFinalDemandaPersonaN: string,
    public respuestaFinalDemandaersonaN: Boolean
  ){  }


  public static guardarDemandaPersonaNatural(demandaPersonaNatural: DemandaPersonaNatural){

    database.query(`INSERT INTO demandaPersonaNatural set ?`, [demandaPersonaNatural])
    .then( result => {
      return {
        ok: true,
        message: 'Demanda Persona Natural guardada exitosamente'
      }
    })
    .catch( (err: MysqlError) => {

      if( err.code === 'ER_DUP_ENTRY' ){

        return {
          ok: false,
          message: 'Demanda Persona Natural ya existente'
        }
      }

      return {
        ok: false,
        message: 'Ocurrio un error al guardar la Demanda Persona Natural',
        err
      }

    })
  }

}
