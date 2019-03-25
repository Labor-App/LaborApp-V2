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
    public respuestaFinalDemandaEmpresa: number | null,
    public montoTotalDemandaPersJuri: number | null,
    public superaMinimaCuantiaPersJuri: number | null
  ) { }


  public static async guardarDemandaEmpresa(demandaEmpresa: DemandaEmpresa) {


    let personaRes = await Persona.obtenerUnaPersona(demandaEmpresa.numeroDocumentoPersona, demandaEmpresa.tipoDocumentoPersona);

    if (!personaRes.ok) {
      return {
        ok: false,
        err: {
          message: 'Esta demanda no coincide con ninguna Persona en db, primero ingrese los datos de la persona'
        }
      }
    }

    let empresaRes = await Empresa.obtenerUnaEmpresa(demandaEmpresa.NItEmpresa);

    if (!empresaRes.ok) {
      return {
        ok: false,
        err: {
          message: 'Esta demanda no coincide con ninguna Empresa en db, primero ingrese los datos de la Empresa'
        }
      }
    }

    let contratoLaboralRes = await ContratoLaboral.obtenerContratoLaboral(demandaEmpresa.idContrato);

    if (!contratoLaboralRes.ok) {

      return {
        ok: false,
        err: {
          message: 'Esta demanda no coincide con ningun contrato en db, primero ingrese los datos del contrato'
        }
      }
    } else {


      if (contratoLaboralRes.result[0]['NItEmpresa'] === (null|| undefined) || contratoLaboralRes.result[0]['NItEmpresa'] != demandaEmpresa.NItEmpresa) {
        return {
          ok: false,
          err: {
            message: 'La informacion del contrato, referente a la empresa no coincide con la (nit)'
          }
        }

      }

      return database.query(`INSERT INTO demandaEmpresa set ?`, [demandaEmpresa])
        .then(async result => {

          let demandaEmpresaRes = await this.obtenerDemandaEmpresa();

          if (demandaEmpresaRes.ok) {
            demandaEmpresa['idDemandaEmpresa'] = demandaEmpresaRes.result[demandaEmpresaRes.result.length - 1].idDemandaEmpresa;
          }

          return {
            ok: true,
            message: 'Demanda Empresa guardada exitosamente',
            demandaEmpresa
          }
        })
        .catch((err: MysqlError) => {

          if (err.code === 'ER_DUP_ENTRY') {

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

  public static async obtenerDemandaEmpresa(id?: number) {

    let query = `SELECT * FROM demandaEmpresa`

    if(id != (undefined || null)){
      query = `SELECT * FROM demandaEmpresa WHERE idDemandaEmpresa = ${ id }`
    }

    return database.query(query)
      .then((result: DemandaEmpresa[]) => {

        if (result.length === 0) {
          return {
            ok: false,
            err: {
              message: 'Query exitoso, Pero no hay coincidencias en las tabla Demanda Empresa'
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

  public static async borrarDemandaEmpresa(id: number) {

    return database.query(`
    DELETE
    FROM demandaEmpresa
    WHERE idDemandaEmpresa = ${ id}`)
      .then((result) => {


        if (result['affectedRows'] === 0) {
          return {
            ok: false,
            err: {
              message: 'Demanda de Empresa no encontrada'
            }

          }
        }

        return {
          ok: true,
          message: 'Demanda de Empresa Eliminada'

        }

      })

  }

}
