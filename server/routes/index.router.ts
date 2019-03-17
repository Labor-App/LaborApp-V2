import { Router } from 'express';

import demandaRouter from './demanda.router';
import personaRouter from './persona.router';
import empresaRouter from './empresa.router';
import personaNaturalRouter from './personaNatural.router';
import contratoLaboralRouter from './contratoLaboral.router';
import demandaEmpresaRouter from './demandaEmpresa.router';
import demandaPersonaNaturalRouter from './demandaPersonaNatural.router';
import conflictoRouter from './conflicto.router';

class IndexRouter{

  public router: Router = Router();


  constructor(){
    this.routes();
  }


  public routes(){
    this.router.use( demandaRouter);
    this.router.use( personaRouter);
    this.router.use( '/demandado', empresaRouter);
    this.router.use( '/demandado', personaNaturalRouter);
    this.router.use( contratoLaboralRouter);
    this.router.use( '/demanda', demandaEmpresaRouter);
    this.router.use( '/demanda', demandaPersonaNaturalRouter);
    this.router.use( conflictoRouter);
  }



}


const indexRouter = new IndexRouter();

export default indexRouter.router;
