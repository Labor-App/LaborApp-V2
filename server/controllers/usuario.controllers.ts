//Modulos
import * as bcrypt from 'bcrypt';
import * as jwt  from 'jsonwebtoken';

//Models
import { Response, Request } from 'express';
import { Usuario } from '../models/index.models';




class UsuarioControllers{

  /*
    METODOS PARA UN USUARIO
  */
    //POST = login Usuario
    public async login(req: Request, res: Response){


      const databaseRes: any = await Usuario.login(new Usuario(req.body.email));


      if (databaseRes['ok'] === false){
        return res.status(200).json(databaseRes)
      }

      // if( !bcrypt.compareSync(req.body.password, databaseRes['usuario'].password) ){
      //   return res.status(400).json({
      //     ok: false,
      //     err: {
      //       message: 'Email o Contraseña incorrectos'
      //     }
      //   })
      // }

      delete databaseRes['usuario'].password;

      const cadocidad = 60 * 60 * 24 * 30;

      const token = jwt.sign({
        usuario: databaseRes['usuario'],
      }, process.env.JWT_SECRET, { expiresIn: cadocidad });

      databaseRes['token'] = token;

      return res.status(200).json(databaseRes);


    }

    //Get =Renovacion del token
    public async renuevaToken(req: Request | any , res: Response){

      const cadocidad = 60 * 60 * 24 * 30;

      const token = jwt.sign({
        usuario: req['usuario'],
      }, process.env.JWT_SECRET, { expiresIn: cadocidad });


      return res.status(200).json({
        ok: true,
        message: 'Token Renovado',
        usuario: req['usuario'],
        token
      });
    }

    //POST = Guarda todos los Usuarios
    public async guardar(req:Request, res:Response){


      if(req.body == null || req.body == undefined) {

        return res.status(400).json({
          ok: false,
          err: {
            message: 'Error al enviar datos del front'
          }
        })
      }

      const databaseRes: any = await Usuario.guardarUsuario(req.body)

      if( databaseRes['message'] === 'Usuario ya existente'){
        return res.status(200).json(databaseRes)
      };

      if( databaseRes['ok'] === false){
        return res.status(400).json(databaseRes)
      };

      return res.status(200).json(databaseRes);

    }

    //GET = Retorna todos los Usuarios
    public async getUsuarios(req:Request | any, res:Response){

      const databaseRes: any = await Usuario.obtenerEmpresas();

      if( databaseRes['ok'] === false){
        return res.status(400).json(databaseRes)
      };

      return res.status(200).json(databaseRes);

    }

  //
}

const usuarioControllers = new UsuarioControllers();
export default usuarioControllers;
