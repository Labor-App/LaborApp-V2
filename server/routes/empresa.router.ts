import { Router } from 'express';

import { EmpresaControllers } from '../controllers/empresa.controllers';

class EmpresaRouter{

  public router: Router;

  constructor(){
    this.router = Router();
    this.routes();
  }

  public routes(){

    //=====================================================================
    // Guardar Una Empresa
    //=====================================================================
    this.router.post('/empresa', EmpresaControllers.guardarEmpresa);

    //=====================================================================
    // Obtener Todas las empresas
    //=====================================================================
    this.router.get('/empresa', EmpresaControllers.obtenerEmpresa);

    //=====================================================================
    // Obtener Una Empresa
    //=====================================================================
    this.router.get('/empresa/:id', EmpresaControllers.obtenerUnaEmpresa);

    //=====================================================================
    // Actualizar Una Empresa
    //=====================================================================
    this.router.put('/empresa', EmpresaControllers.actualizarEmpresa);

    //=====================================================================
    // Borrar Una Empresa
    //=====================================================================
    this.router.delete('/empresa/:id', EmpresaControllers.borrarEmpresa)


  }


}


const empresaRouter = new EmpresaRouter();

export default empresaRouter.router;
