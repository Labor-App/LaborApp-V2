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
    public IdPersonaNatural: PersonaNatural['IdPersonaNatural'] | null,
    public NItEmpresa: Empresa['NItEmpresa'] | null

  ){  }

  public static async guardarContraatoLaboral(contratoLaboral: ContratoLaboral){

    contratoLaboral.tipoDocumentoPersona = contratoLaboral.tipoDocumentoPersona.toLowerCase();
    contratoLaboral.tipoContrato = contratoLaboral.tipoContrato.toLowerCase();
    
    return database.query(`INSERT INTO contratoLaboral set ?`, [contratoLaboral])
      .then((result) => {
        return {
          ok: true,
          message: 'Contrato Laboral guardado exitosamente'
        }
      })
      .catch( (err: MysqlError) => {

        if( err.code === 'ER_DUP_ENTRY' ){
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


 }
