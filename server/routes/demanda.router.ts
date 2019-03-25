import { Router } from 'express';

import demandaControllers from '../controllers/demanda.controllers';
import { Autenticacion } from '../middleware/autenticacion.middleware';

class DemandaRouter{

  public router: Router;

  constructor(){
    this.router = Router();
    this.routes();
  }

  public routes(){

    this.router.get('/generar/:tipo/:id', demandaControllers.generarPdf );

    this.router.get('/enviar/:identificacion',Autenticacion.verificacionToken, demandaControllers.enviapdf );

    this.router.get('/descargar/:identificacion',Autenticacion.verificacionToken, demandaControllers.descargarPdf )

  }

}


const demandaRouter = new DemandaRouter();

export default demandaRouter.router;
