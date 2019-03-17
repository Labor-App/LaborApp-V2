import { Router } from "express";
import { DemandaEmpresaControllers } from "../controllers/demandaEmpresa.controllers";

class DemandaEmpresaRouter {

    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes() {

        this.router.post('/empresa', DemandaEmpresaControllers.guardarDemandaEmpresa );

        this.router.get('/empresa', DemandaEmpresaControllers.obtenerDemandaEmpresa);

        // this.router.put();

        this.router.delete('/empresa/:id', DemandaEmpresaControllers.borraDemandaEmpresa);


    }

}

export default new DemandaEmpresaRouter().router;

