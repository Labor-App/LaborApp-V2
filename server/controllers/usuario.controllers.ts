//Database conection
import database  from '../database/database';


//Models
import { Response, Request } from 'express';
import { MysqlError } from 'mysql';
import { PersonaModel } from '../models/Persona.model';


class UsuarioControllers{

  /*
    METODOS PARA UN USUARIO
  */

    //POST = Guarda todos los Usuarios
    public async guardar(req:Request, res:Response){

      console.log(req.body);

      try{

        const result = await database.query('INSERT INTO Personas set ?', [req.body]);

        res.status(200).json({
          ok: true,
          result
        });

      }catch(err){

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

    //GET = Retorna todos los Usuarios
    public async getUsuarios(req:Request, res:Response){

      try{

        const result:PersonaModel[] = await database.query('SELECT * FROM Personas');

        res.status(200).json({
          ok: true,
          result
        });

      }catch(err){

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

  //
}

const usuarioControllers = new UsuarioControllers();
export default usuarioControllers;
