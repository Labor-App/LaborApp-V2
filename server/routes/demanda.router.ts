import { Router } from 'express';

import demandaControllers from '../controllers/demanda.controllers';

class DemandaRouter{

  public router: Router;

  constructor(){
    this.router = Router();
    this.routes();
  }

  public routes(){

    this.router.get('/generar/:nit/:identificacion', demandaControllers.generarPdf );

    this.router.get('/enviar/:identificacion', demandaControllers.enviapdf );

    this.router.get('/descargar/:identificacion', demandaControllers.descargarPdf )

  }

}


const demandaRouter = new DemandaRouter();

export default demandaRouter.router;
