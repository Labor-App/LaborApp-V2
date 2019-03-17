import { Router } from 'express';
import { ContratoLaboralController } from '../controllers/contratoLaboral.controllers';


class ContratoLaboralRouter{

  public router: Router;

  constructor(){
    this.router = Router();
    this.routes();
  }

  public routes(){

    this.router.post('/contrato', ContratoLaboralController.guardarContratoLaboral )
    
    this.router.get('/contrato', ContratoLaboralController.obtenerContratoLaboral )
    
    this.router.get('/contrato/:id', ContratoLaboralController.obtenerUnContratoLaboral)
    
    this.router.put('/contrato/:id', ContratoLaboralController.actualizarContratoLaboral)
    
    this.router.delete('/contrato/:id', ContratoLaboralController.borrarContratoLaboral)


  }

}


const contratoLaboralRouter = new ContratoLaboralRouter();

export default contratoLaboralRouter.router;
