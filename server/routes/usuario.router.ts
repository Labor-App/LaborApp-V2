import { Router } from 'express';

import usuarioControllers from '../controllers/usuario.controllers';
import { Autenticacion } from '../middleware/autenticacion.middleware';

class UsuarioRouter{

  public router: Router;

  constructor(){
    this.router = Router();
    this.routes();
  }

  public routes(){

    this.router.post('/login' ,usuarioControllers.login)

    this.router.post('/guardar', usuarioControllers.guardar);

    this.router.get('/usuarios', Autenticacion.verificacionToken, usuarioControllers.getUsuarios);

  }

}


const usuarioRouter = new UsuarioRouter();

export default usuarioRouter.router;
