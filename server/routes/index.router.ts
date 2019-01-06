import { Router } from 'express';

import demandaRouter from './demanda.router';
import usuarioRouter from './usuario.router';
import demandadoRouter from './demandado.routes';

class IndexRouter{

  public router: Router = Router();


  constructor(){
    this.routes();
  }


  public routes(){
    this.router.use('/demanda', demandaRouter);
    this.router.use('/usuario', usuarioRouter);
    this.router.use('/demandado', demandadoRouter);
  }



}


const indexRouter = new IndexRouter();

export default indexRouter.router;
