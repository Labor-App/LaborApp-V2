import { PersonaNatural, Empresa, Persona } from "./index.models";
import database from "../database/database";
import { MysqlError } from "mysql";



export class ContratoLaboral {

  constructor(
    public idContrato: number | undefined,
    public tipoContrato: string,
    public fechaInicioContrato: Date,
    public fechaFinalContrato: Date | null,
    public ultimoSalario: number,
    public descripcionFunciones: string,
    public tipoDocumentoPersona: Persona['tipoDocumentoPersona'],
    public numeroDocumentoPersona: Persona['numeroDocumentoPersona'],
    public IdPersonaNatural?: PersonaNatural['IdPersonaNatural'],
    public NItEmpresa?: Empresa['NItEmpresa']

  ) { }

  public static async guardarContratoLaboral(contratoLaboral: ContratoLaboral) {

    if ( (contratoLaboral.NItEmpresa && contratoLaboral.IdPersonaNatural) !== undefined) {
      return {
        ok:false,
        err: {
          message: 'El contrato solo debe hacer referencia a una persona natural o a una empresa; nunca ambas'
        }
      }
    }

    if (contratoLaboral.NItEmpresa != undefined) {
      let empresasRes = await Empresa.obtenerUnaEmpresa(contratoLaboral.NItEmpresa)
      if (!empresasRes['ok']) {
        return {
          ok: false,
          err: {
            message: 'La empresa que emitio este contrato no existe'
          }
        }
      }
    }

    if (contratoLaboral.IdPersonaNatural != undefined) {
      let personaNaturalRes = await PersonaNatural.obtenerUnaPersonaNatural(contratoLaboral.IdPersonaNatural)
      if (!personaNaturalRes['ok']) {
        return {
          ok: false,
          err: {
            message: 'La Persona Natural que emitio este contrato no existe'
          }
        }
      }
    }

    let personaRes = await Persona.obtenerUnaPersona(contratoLaboral.numeroDocumentoPersona, contratoLaboral.tipoDocumentoPersona)

    if (!personaRes['ok']) {
      return {
        ok: false,
        err: {
          message: 'La Persona implicada en este contrato no existe'
        }
      }
    }


    return database.query(`INSERT INTO contratoLaboral set ?`, [contratoLaboral])
      .then(async (result) => {

        let contratoLaboralRes = await this.obtenerContratoLaboral();
        
        contratoLaboral['idContrato'] = contratoLaboralRes.result[contratoLaboralRes.result.length - 1].idContrato;

        return {
          ok: true,
          message: 'Contrato Laboral guardado exitosamente',
          contratoLaboral
        }
      })
      .catch((err: MysqlError) => {
        console.log(err)
        if (err.code === 'ER_DUP_ENTRY') {
          return {
            ok: false,
            message: 'Contrato Laboral ya existente'
          }
        }

        return {
          ok: false,
          message: 'Ocurrio un error al guardar la Contrato Laboral',
          err
        }

      })

  }



  public static async obtenerContratoLaboral(id?: number) {

    if(id !==  undefined){
      return database.query(`SELECT * FROM contratoLaboral WHERE idContrato = ${ id }`)
      .then( (result: ContratoLaboral[]) => {
        
        if ( result.length === 0){
          return {
            ok: false,
            err: {
              message: 'Query exitoso, Pero no hay coincidencias en las tablas Contrato Laboral'
            },
            result
          }
        }

        return {
          ok: true,
          result
        }

      })
    }


    return database.query(`SELECT * FROM contratoLaboral ORDER BY idContrato ASC`)
      .then((result: ContratoLaboral[]) => {

        if (result.length === 0) {
          return {
            ok: false,
            err: {
              message: 'Query exitoso, Pero no hay coincidencias en las tablas Contrato Laboral'
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

  public static async borrarContratoLaboral(id: ContratoLaboral['idContrato']) {

    return database.query(`
      DELETE 
      FROM contratoLaboral
      WHERE idContrato = ${ id}`)
      .then((result) => {

        if (result['affectedRows'] === 0) {
          return {
            ok: false,
            err: {
              message: 'No encontrado',
            }
          }
        }

        return {
          ok: true,
          message: 'Contrato Laboral Eliminado con exito '
        };

      })
      .catch((error: MysqlError) => {
        return {
          ok: false,
          err: {
            message: 'Query fallido',
          },
          error

        };
      })

  }


}
