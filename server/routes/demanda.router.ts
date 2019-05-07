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

    this.router.get('/generar/:tipo/:id', demandaControllers.generarPdf ); // id de la demanda, tipo: natural o jurídico

    this.router.get('/enviar/:identificacion',Autenticacion.verificacionToken, demandaControllers.enviapdf );

    this.router.get('/descargar/:identificacion', demandaControllers.descargarPdf )

  }

}


const demandaRouter = new DemandaRouter();

export default demandaRouter.router;
