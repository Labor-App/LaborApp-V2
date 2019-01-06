//Conexion a la DB
import database from '../database/database';

//Models
import { Request, Response } from 'express';
import { MysqlError } from 'mysql';
import { EmpresaModel } from '../models/Empresa.model';



class DemandadoControllers{

  /*
    METODOS PARA DEMANDADOS DE TIPO JURIDICO
  */

    //POST = Guarda todos los demandados de tipo juridico
    public async guardarEmpresa( req: Request, res: Response ){

      const body: EmpresaModel = req.body;

      try{

        const result = await database.query("INSERT INTO Empresa set ?", [body])

        res.status(200).json({
          ok: true,
          result
        });

      }
      //Manejo de errores
      catch(err){

        //Typado de sql  errores
        const error: MysqlError = err;

        //Mostrando Por consola el error
        console.log('Error Al insertar Los datos:\n', {
          ok: false,
          err: error.fatal,
          errCode: error.code,
          errSqlState: error.sqlState,
          errSqlMessage: error.sqlMessage
         });

        //Respondiendo con el error
        res.status(500).json({
          ok: false,
          err: 'Error al insertar datos en DB',
          errSql: error.sqlMessage,
        });

      }

    }

    //GET = Retorna todos los demandados de tipo juridico
    public async getEmpresas( req: Request, res: Response ){

      try{

        const result:EmpresaModel[] = await database.query('SELECT * FROM Empresa');

        res.status(200).json({
          ok: true,
          result
        });

      }catch(err){

        //Typado de sql  errores
        const error: MysqlError = err;

        //Mostrando Por consola el error
        console.log('Error al consultar las empresas demandadas:\n', {
          ok: false,
          err: error.fatal,
          errCode: error.code,
          errSqlState: error.sqlState,
          errSqlMessage: error.sqlMessage
         });

        //Respondiendo con el error
        res.status(500).json({
          ok: false,
          err: 'Error al consultar las empresas demandadas en DB',
          errSql: error.sqlMessage,
        });

      }

    }


  /*
    METODOS PARA DEMANDADOS DE TIPO NATURAL
  */

    //POST = Guarda todos los demandados de tipo natural.
    public async guardarNatural( req: Request, res: Response ){

    }

    //GET = Retorna todos los demandados de tipo natural.
    public async getNatural( req: Request, res: Response ){

    }


  //



}

const demandadoControllers = new DemandadoControllers();

export default demandadoControllers;
