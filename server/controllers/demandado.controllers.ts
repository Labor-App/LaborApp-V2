//Conexion a la DB
import database from '../database/database';

//Models
import { Request, Response } from 'express';
import { MysqlError } from 'mysql';
import { Empresa } from '../models/Empresa.model';



class DemandadoControllers{

  /*
    METODOS PARA DEMANDADOS DE TIPO JURIDICO
  */

    //POST = Guarda todos los demandados de tipo juridico
    public async guardarEmpresa( req: Request, res: Response ) {

      const database: any = await Empresa.guardarEmpresa(req.body);

      if( database['ok'] === false){
        return res.status(500).json({
          ok: false,
          database
        })
      };

      if( database['message'] === 'Empresa ya existente'){
        return res.status(200).json({
          ok: false,
          database
        })
      };

      return res.status(200).json({
        ok: true,
        database
      });


    }

    //GET = Retorna todos los demandados de tipo juridico
    public async getEmpresas( req: Request, res: Response ){

      const database: any = await Empresa.obtenerEmpresas();

      if( database['ok'] === false){
        return res.status(500).json({
          ok: false,
          database
        })
      };

      return res.status(200).json({
        ok: true,
        database
      });

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
