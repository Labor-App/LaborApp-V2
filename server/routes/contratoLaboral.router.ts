import { Router } from 'express';


class ContratoLaboralRouter{

  public router: Router;

  constructor(){
    this.router = Router();
    this.routes();
  }

  public routes(){

    // this.router.post('/contrato', ContratoLaboralController)
    //
    // this.router.get('/contrato', ContratoLaboralController)
    //
    // this.router.get('/contrato/:id', ContratoLaboralController)
    //
    // this.router.put('/contrato/:id', ContratoLaboralController)
    //
    // this.router.delete('/contrato/:id', ContratoLaboralController)


  }

}


const contratoLaboralRouter = new ContratoLaboralRouter();

export default contratoLaboralRouter.router;
