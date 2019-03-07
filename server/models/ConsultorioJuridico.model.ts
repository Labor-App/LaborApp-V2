import database from "../database/database";
import { Persona } from "./index.models";
import { MysqlError } from "mysql";


export class ConsultorioJuridico {

  constructor(
    public IdconsultorioJuridico: number | undefined | null,
    public nombreConsultorioJuridico: string,
    public telefonoConsultorioJuridico: number,
    public codigoCiudad: number,
    public tipoDocumentoPersona: Persona['tipoDocumentoPersona'],
    public numeroDocumentoPersona: Persona['numeroDocumentoPersona'],
    public tipoConsultorioJuridico?: string,
    public emailConsultorioJuridico?: string,
    public direccionConsultorioJuridico?: string,
  ) { }


  public static async existeConsultorioJuridico(persona: Persona): Promise<boolean> {

    return await database.query(`SELECT * FROM consultorioJuridico WHERE numeroDocumentoPersona = '${persona.numeroDocumentoPersona}' AND tipoDocumentoPersona = '${persona.tipoDocumentoPersona}'`
    )
      .then((result: any[]) => {

        if (result.length === 0) {
          return false;
        }

        return true;

      })

  }

  public static async guardarConsultorioJuridico(consultorio: ConsultorioJuridico) {

    return database.query(`INSERT INTO consultorioJuridico set ?`, [consultorio])
      .then(result => {

        return {
          ok: true,
          message: 'Consultorio Juridico guardado exitosamente'
        }

      })
      .catch((err: MysqlError) => {

        if (err.code === 'ER_DUP_ENTRY') {
          return {
            ok: false,
            err: {
              message: 'Consultorio Juridico ya existente'
            }
          }
        }
        console.log(err)
        return {
          ok: false,
          err: {
            message: 'Ocurrio un error al guardar el Consultorio Juridico'
          }

        }

      })

  }

}
