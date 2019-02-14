import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export class Autenticacion {

  constructor(){}




  static verificacionToken( req: any | Request, res: Response, next: NextFunction){

    const token: any = req.get('token');

    jwt.verify(token, process.env.JWT_SECRET, (err: jwt.VerifyErrors, decoded: any) => {

      if(err){
        return res.status(401).json({
          ok:false,
          err: {
            message: 'Token invalido valido'
          }
        })
      }


      req.usuario = decoded['usuario'];

      next();
    })


  }

}
