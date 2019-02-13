//Modulos
import * as bcrypt from 'bcrypt';
import * as jwt  from 'jsonwebtoken';

//Database conection
import database  from '../database/database';


//Models
import { Response, Request } from 'express';
import { MysqlError } from 'mysql';
import { PersonaModel } from '../models/Persona.model';
import { Secret } from 'jsonwebtoken';


class UsuarioControllers{

  /*
    METODOS PARA UN USUARIO
  */
    //POST = login Usuario
    public async login(req: Request, res: Response){


      const body = req.body;

      try{

        const usuarioDB: PersonaModel[] = await database.query(`SELECT * FROM Personas WHERE correoPersona = '${body.correo}' LIMIT 1`);

        if( usuarioDB.length === 0 ){
          return res.status(400).json({
            ok: false,
            err: {
              message: '(Usuario) o Contraseña incorrectos'
            }

          })
        }

        // if( !bcrypt.compareSync(body.password, usuarioDB[0].password) ){
        //   return res.status(400).json({
        //     ok: false,
        //     err: {
        //       message: 'Usuario o (Contraseña) incorrectos'
        //     }
        //
        //   })
        // }

        // delete usuarioDB[0].password;


        const cadocidad = 60 * 60 * 24 * 30;

        const token = jwt.sign({
          usuario: usuarioDB[0],
        }, process.env.JWT_SECRET, { expiresIn: cadocidad });


        res.json({
          ok: true,
          usuario: usuarioDB[0],
          token
        })

      }catch(err){

        const error: MysqlError = err;

        //Mostrando Por consola el error
        console.log('Error Al logearse Los datos:\n', {
          ok: false,
          err: error.fatal,
          errCode: error.code,
          errSqlState: error.sqlState,
          errSqlMessage: error.sqlMessage,
          erro: err
         });

        //Respondiendo con el error
        res.status(500).json({
          ok: false,
          err: 'Error al logearse datos en DB',
          errSql: error.sqlMessage,
        });

      }

    }


    //POST = Guarda todos los Usuarios
    public async guardar(req:Request, res:Response){

      const body: PersonaModel = req.body;
      const newUsuario: PersonaModel = {

        cedulaPersona: body.cedulaPersona,
        correoPersona: body.correoPersona,
        apellidosPersona: bcrypt.hashSync(body.apellidosPersona, 10 ),
        nombresPersona: body.nombresPersona,
        fechaNacimientoPersona: body.fechaNacimientoPersona,
        codigoDaneMunicipio: bcrypt.hashSync(body.codigoDaneMunicipio, 10 )

      }

      try{

        const result = await database.query('INSERT INTO Personas set ?', [newUsuario]);

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
          err:{
            message:  'Error al insertar datos en DB'
          },
          errSql: error.sqlMessage,
        });

      }

    }

    //GET = Retorna todos los Usuarios
    public async getUsuarios(req:Request | any, res:Response){

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
        console.log('Error Al obtener los datos:\n', {
          ok: false,
          err: error.fatal,
          errCode: error.code,
          errSqlState: error.sqlState,
          errSqlMessage: error.sqlMessage
         });

        //Respondiendo con el error
        res.status(500).json({
          ok: false,
          err: 'Error Al obtener los datos',
          errSql: error.sqlMessage,
        });

      }

    }

  //
}

const usuarioControllers = new UsuarioControllers();
export default usuarioControllers;
