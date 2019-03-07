import { Router } from 'express';
import { PersonaNaturalControllers } from '../controllers/personaNatural.controllers';


class PersonaNaturalRouter{

  public router: Router;

  constructor(){
    this.router = Router();
    this.routes();
  }

  public routes(){

    //=====================================================================
    // Guardar Una PersonaNatural
    //=====================================================================
    this.router.post('/persona-natural', PersonaNaturalControllers.guardarPersonaNatural);

    //=====================================================================
    // Obtener Todas las Personas Naturales
    //=====================================================================
    this.router.get('/persona-natural', PersonaNaturalControllers.obtenerPersonaNatural);

    //=====================================================================
    // Obtener Una Persona Natural
    //=====================================================================
    this.router.get('/persona-natural/:id', PersonaNaturalControllers.obtenerUnaPersonaNatural);

    //=====================================================================
    // Actualizar Una PersonaNatural
    //=====================================================================
    this.router.put('/persona-natural/:id',PersonaNaturalControllers.actualizarPersonaNatural);

    //=====================================================================
    // Borrar Una PersonaNatural
    //=====================================================================
    this.router.delete('/persona-natural/:id', PersonaNaturalControllers.borrarPersonaNatural);



  }

}


const personaNaturalRouter = new PersonaNaturalRouter();

export default personaNaturalRouter.router;
