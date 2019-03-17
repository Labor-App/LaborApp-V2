import { Router } from 'express';
import { ContratoLaboralController } from '../controllers/contratoLaboral.controllers';
import { ConflictoController } from '../controllers/conflicto.controllers';


class ConflictoRouter{

  public router: Router;

  constructor(){
    this.router = Router();
    this.routes();
  }

  public routes(){

    this.router.post('/conflicto', ConflictoController.guardarConflicto )
    
    this.router.get('/conflicto/:tipo', ConflictoController.obtenerConflictos )
    
    // this.router.get('/contrato/:id', )
    
    // this.router.put('/contrato/:id', )
    
    // this.router.delete('/contrato/:id', )


  }

}


export default  new ConflictoRouter().router;
