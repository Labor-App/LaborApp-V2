import { Router } from 'express';

import usuarioControllers from '../controllers/usuario.controllers';

class UsuarioRouter{

  public router: Router;

  constructor(){
    this.router = Router();
    this.routes();
  }

  public routes(){

    this.router.post('/guardar', usuarioControllers.guardar);

    this.router.get('/usuarios', usuarioControllers.getUsuarios);

  }

}


const usuarioRouter = new UsuarioRouter();

export default usuarioRouter.router;
