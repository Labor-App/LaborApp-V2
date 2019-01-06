import { Router } from 'express';

import demandadoControllers from '../controllers/demandado.controllers';

class DemandadoRouter{

  public router: Router;

  constructor(){
    this.router = Router();
    this.routes();
  }

  public routes(){

    //Demandados Empresa
    this.router.post('/guardar/empresa', demandadoControllers.guardarEmpresa);

    this.router.get('/empresas', demandadoControllers.getEmpresas);

    //Demandados Natural
    this.router.post('/guardar/natural', demandadoControllers.guardarNatural);

    this.router.get('/naturales', demandadoControllers.getNatural);

  }

}


const demandadoRouter = new DemandadoRouter();

export default demandadoRouter.router;
