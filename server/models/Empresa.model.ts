import database from "../database/database";
import { MysqlError } from "mysql";
import { Persona } from "./index.models";

export class Empresa {

  constructor(
    public NItEmpresa: number | undefined,
    public nombreEmpresaRS: string,
    public direccionEmpresa: string,
    public codigoCiudad: number,
    public telefonoEmpresa?: number,
    public emailEmpresa?: string,
    public tipoDocumentoPersona?: Persona['tipoDocumentoPersona'],
    public numeroDocumentoPersona?: Persona['numeroDocumentoPersona'],
  ){  }

  //=====================================================================
  //  Esta Consulta Guarda una empresa en DB
  //=====================================================================
  /*
  * El metodo identifica si la empresa tiene representante legal, que seria
  * una  Persona, usando el modelo de Persona la guarda y
  * continua guardando la empresa; en el caso de que alguien introduzca la
  * misma empresa, pero esta vez tenga informacion del representante lega la info
  * de la empresa se actualiza.
  */
  public static async guardarEmpresa(empresa: Empresa, persona: Persona): Promise<object> {


    if(persona.numeroDocumentoPersona != undefined){
      console.log(persona)
      persona.codigoCiudad = empresa.codigoCiudad;
      empresa.tipoDocumentoPersona = persona.tipoDocumentoPersona;
      empresa.numeroDocumentoPersona = persona.numeroDocumentoPersona;
      let personaRes = await  Persona.guardarPersona(persona, empresa.emailEmpresa)
      if (personaRes.ok === false){
        console.log(personaRes);
      }
    }

    return database.query("INSERT INTO Empresa set ?", [empresa])
      .then( result => {
        return {
          ok: true,
          message: 'Empresa guardada exitosamente'
        }
      })
      .catch( async (err: MysqlError) => {

        if( err.code === 'ER_DUP_ENTRY' ){
          if (persona != undefined){

            let empresaRes:  any = await this.obtenerUnaEmpresa(empresa.NItEmpresa)

            if(empresaRes['ok'] && empresaRes.result[0]['numeroDocumentoPersona'] === null){
              return this.actualizarEmpresa(empresa);
            }
          }
          return {
            ok: false,
            message: 'Empresa ya existente'
          }
        }

        return {
          ok: false,
          message: 'Ocurrio un error al guardar la empresa',
          err
        }

      })

  }


  //=====================================================================
  // Esta consulta Actualiza una Empresa en DB
  //=====================================================================
  /*
  * Como parametro recive la nueva empresa y mediante los datos de la nueva
  * empresa se busca la que se actualiza.
  */
  public static async actualizarEmpresa(empresa: Empresa){

    if(empresa.numeroDocumentoPersona || empresa.tipoDocumentoPersona){
      return {
        ok: false,
        err: {
          message: 'Cambiar los datos de el representante legal, no esta disponble, porfavor no los envie'
        }

      }
    }

    return database.query(`
      UPDATE Empresa set ?
      WHERE NItEmpresa = '${ empresa.NItEmpresa }'`, [empresa])
    .then( result => {

      return {
        ok: true,
        message: 'Empresa Modificado exitosamente'
      }

    })
    .catch( (err: MysqlError) => {

      console.log(err)
      return {
        ok: false,
        err: {
          message: 'Ocurrio un error al modificar la Empresa'
        }

      }

    })

  }



  //=====================================================================
  // Esta consulta retorna una las empresas en DB
  //=====================================================================
  /*
  * Busca a una sola empresa mediante el nit.
  */
  public static async obtenerUnaEmpresa(nit: Empresa['NItEmpresa']) {

    return database.query(`
      SELECT *
      FROM Empresa
      WHERE Empresa.NItEmpresa = ${ nit }`)
      .then( (result: any[]) => {

        if(result.length === 0){
          return {
            ok: false,
            err: {
              message: 'Query exitoso, Pero no hay coincidencias en las tablas Personas y Empresas',
            }
          };
        }

        return {
          ok: true,
          message: 'Query exitoso',
          result

        };
      })
      .catch( err => {
        return {
          ok: false,
          message: 'Query fallido',
          err

        };
      })

  }


  //=====================================================================
  // Esta consulta Borra una empresas en DB
  //=====================================================================
  /*
  *  Mediante el nit se busca y se borra la empresa.
  */
  public static async borrarEmpresa(nit: Empresa['NItEmpresa']) {

    return database.query(`
      DELETE
      FROM Empresa
      WHERE Empresa.NItEmpresa = ${ nit }`)
      .then( (result) => {

        if(result['affectedRows'] === 0){
          return {
            ok: false,
            err: {
              message: 'Query exitoso, Pero no hay coincidencias en las tabla Empresas',
            }
          };
        }

        return {
          ok: true,
          message: 'Query exitoso',
          result

        };
      })
      .catch( err => {
        return {
          ok: false,
          message: 'Query fallido',
          err

        };
      })

  }



  //=====================================================================
  // Esta consulta retorna todas las empresas en DB
  //=====================================================================
  public static obtenerEmpresas(): Object {

    return database.query(`
      SELECT *
      FROM Empresa`)
      .then( (result: Empresa[]) => {

        if (result.length === 0){
          return {
            ok: false,
            err: {
              message: 'Query exitoso, Pero no hay coincidencias en las tabla Empresas',
            }
          }

        }

        return {
          ok: true,
          message: 'Query exitoso',
          result

        };
      })
      .catch( err => {
        return {
          ok: false,
          message: 'Query fallido',
          err

        };
      })

  }

}
