import { Request, Response } from 'express';
//Models
import { Empresa } from '../models/index.models';




class DemandadoControllers{

  /*
    METODOS PARA DEMANDADOS DE TIPO JURIDICO
  */

    //POST = Guarda todos los demandados de tipo juridico
    public async guardarEmpresa( req: Request, res: Response ) {

      const databaseRes: any = await Empresa.guardarEmpresa(req.body);

      if( databaseRes['message'].includes('ya existente')){
        return res.status(200).json(databaseRes)
      };
      if( databaseRes['ok'] === false){
        return res.status(500).json(databaseRes)
      };


      return res.status(200).json(databaseRes);


    }

    //GET = Retorna todos los demandados de tipo juridico
    public async getEmpresas( req: Request, res: Response ){

      const databaseRes: any = await Empresa.obtenerEmpresas();


      if( databaseRes['ok'] === false){
        return res.status(304).json(databaseRes)
      };

      return res.status(200).json(databaseRes);

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
