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
    public informeDesicionFinalDemandaPersonaN: string | null,
    public respuestaFinalDemandaersonaN: number | null,
    public montoTotalDemandaPersNat: number | null,
    public superaMinimaCuantiaPersNat: number | null
  ) { }


  public static async guardarDemandaPersonaNatural(demandaPersonaNatural: DemandaPersonaNatural) {


    let personaNaturalRes = await PersonaNatural.obtenerUnaPersonaNatural(demandaPersonaNatural.IdPersonaNatural);

    if (!personaNaturalRes.ok) {
      return {
        ok: false,
        err: {
          message: 'No se encontro ninguna persona natural, con ese id'
        }
      }
    }


    let personaRes = await Persona.obtenerUnaPersona(demandaPersonaNatural.numeroDocumentoPersona, demandaPersonaNatural.tipoDocumentoPersona)

    if (!personaRes.ok) {
      return {
        ok: false,
        err: {
          message: 'La persona que solicita la demanda no esta resgistrada, primero ingrese una persona'
        }
      }
    }

    let contratoLaboralRes = await ContratoLaboral.obtenerContratoLaboral(demandaPersonaNatural.idContrato);

    if (!contratoLaboralRes.ok) {
      return {
        ok: false,
        err: {
          message: 'No se encontro ningun contrato, con ese id'
        }
      }
    } else {

      if (contratoLaboralRes.result[0]['IdPersonaNatural'] === null || contratoLaboralRes.result[0]['IdPersonaNatural'] != demandaPersonaNatural.IdPersonaNatural) {
        return {
          ok: false,
          err: {
            message: 'La informacion del contrato, referente a la PersonaNatural no coincide con el (id)'
          }
        }

      }
    }

    return database.query(`INSERT INTO demandaPersonaNatural set ?`, [demandaPersonaNatural])
      .then(async result => {

        let demandaPersonaNaturalRes = await this.obtenerDemandaPersonaNatural()

        demandaPersonaNatural['idDemandaPersonaNatural'] = demandaPersonaNaturalRes.result[demandaPersonaNaturalRes.result.length - 1].idDemandaPersonaNatural;

        return {
          ok: true,
          message: 'Demanda Persona Natural guardada exitosamente',
          demandaPersonaNatural
        }
      })
      .catch((err: MysqlError) => {

        if (err.code === 'ER_DUP_ENTRY') {

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

  public static async obtenerDemandaPersonaNatural(id?: number) {
    let query = `SELECT * FROM demandaPersonaNatural`

    if(id != (undefined || null)){
      query = `SELECT * FROM demandaPersonaNatural WHERE idDemandaPersonaNatural = ${id}`
    }

    return database.query(query)
      .then((result: DemandaPersonaNatural[]) => {

        if (result.length === 0) {
          return {
            ok: false,
            err: {
              message: 'Query exitoso, Pero no hay coincidencias en las tabla Demanda Persona Natural'
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

  public static async borrarDemandaPersonaNatural(id: DemandaPersonaNatural['idDemandaPersonaNatural']) {

    return database.query(`
    DELETE
    FROM demandaPersonaNatural
    WHERE idDemandaPersonaNatural = ${ id}`)
      .then((result) => {


        if (result['affectedRows'] === 0) {
          return {
            ok: false,
            err: {
              message: 'Query exitoso, Pero no hay coincidencias en las tabla Demanda Persona Natural'
            }

          }
        }

        return {
          ok: true,
          message: 'Demanda PersonaNatural borrada exitosamente'
        }

      })

  }

}
