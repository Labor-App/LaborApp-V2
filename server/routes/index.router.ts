import { Router } from 'express';

import demandaRouter from './demanda.router';
import personaRouter from './persona.router';
import empresaRouter from './empresa.router';
import personaNaturalRouter from './personaNatural.router';
import contratoLaboralRouter from './contratoLaboral.router';

class IndexRouter{

  public router: Router = Router();


  constructor(){
    this.routes();
  }


  public routes(){
    this.router.use( demandaRouter);
    this.router.use( personaRouter);
    this.router.use('/demandado', empresaRouter);
    this.router.use('/demandado', personaNaturalRouter);
    this.router.use('/contrato', contratoLaboralRouter);
  }



}


const indexRouter = new IndexRouter();

export default indexRouter.router;
