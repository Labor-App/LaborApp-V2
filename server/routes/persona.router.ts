import { Router } from 'express';

import { PersonaControllers } from '../controllers/persona.controllers';
import { Autenticacion } from '../middleware/autenticacion.middleware';

class PersonaRouter{

  public router: Router;

  constructor(){
    this.router = Router();
    this.routes();
  }

  public routes(){

    this.router.post('/login' ,PersonaControllers.login);
    this.router.post('/renuevaToken', Autenticacion.verificacionToken ,PersonaControllers.renuevaToken);


    //=====================================================================
    // Guardar Usuario
    //=====================================================================
    this.router.post('/persona', PersonaControllers.guardarPersona);

    //=====================================================================
    // Obtener Todos los Usuarios
    //=====================================================================
    this.router.get('/persona', /*Autenticacion.verificacionToken,*/ PersonaControllers.obtenerPersona);

    //=====================================================================
    // Obtener Un Usuario
    //=====================================================================
    this.router.get('/persona/:id/:tipoId', PersonaControllers.obtenerUnaPersona);

    //=====================================================================
    // Actualizar un Usuario
    //=====================================================================
    this.router.put('/persona', PersonaControllers.actualizarPersona);

    //=====================================================================
    // Borrar un Usuario
    //=====================================================================
    this.router.delete('/persona/:id/:tipoId', PersonaControllers.borrarPersona);



  }

}


const personaRouter = new PersonaRouter();

export default personaRouter.router;
