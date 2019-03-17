import { Router } from "express";
import { DemandaEmpresaControllers } from "../controllers/demandaEmpresa.controllers";
import { DemandaPersonaNaturalController } from "../controllers/demandaPersonaNatural.controllers";

class DemandaPersonaNaturalRouter {

    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes() {

        this.router.post('/persona-natural', DemandaPersonaNaturalController.guardarDemandaPersonaNatural );

        this.router.get('/persona-natural', DemandaPersonaNaturalController.obtenerDemandaPersonaNatural );

        // this.router.put();

        this.router.delete('/persona-natural/:id', DemandaPersonaNaturalController.borraDemandaPersonaNatural );


    }

}

export default new DemandaPersonaNaturalRouter().router;

