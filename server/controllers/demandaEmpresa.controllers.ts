import { Response, Request } from 'express';
import { DemandaEmpresa } from '../models/index.models';

export class DemandaEmpresaControllers {

    public static async guardarDemandaEmpresa(req: Request, res: Response) {

        let body = req.body;

        let resNegativaErrorFront = (res: Response) => {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Error al enviar datos desde el frontend'
                }
            })
        }

        if( JSON.stringify(body).length <= 2 ) {
            return resNegativaErrorFront(res);
        }


        for( let key in body ) {
           
            if( body[key] === undefined ) {
                return resNegativaErrorFront(res);
            }

        }

        body['respuestaFinalDemandaEmpresa'] = body['respuestaFinalDemandaEmpresa'] === 'true' ? 1 : 0;
        body['superaMinimaCuantiaPersJuri'] = body['superaMinimaCuantiaPersJuri'] === 'true' ? 1 : 0;

        const databaseRes: any = await DemandaEmpresa.guardarDemandaEmpresa(
            new DemandaEmpresa(
                undefined,
                body['fechaDemandaEmpresa'],
                body['codigoCiudad'],
                body['tipoDocumentoPersona'].toLowerCase(),
                body['numeroDocumentoPersona'],
                body['NItEmpresa'],
                body['idContrato'],
                body['fechaPropuestaRadicacionDemandaEmpresa'],
                body['fecharRealRadicacionDemandaEmpresa'],
                body['fechaPropuestaRadicacionDerechoPetiEmpresa'],
                body['fecharRealRadicacionDerechoPetiEmpresa'],
                body['informeDesicionFinalDemandaEmpresa'],
                body['respuestaFinalDemandaEmpresa'],
                body['montoTotalDemandaPersJuri'],
                body['superaMinimaCuantiaPersJuri']
            )
        )

        if (databaseRes['ok'] === false) {
            return res.status(400).json(databaseRes)
        };

        return res.status(200).json(databaseRes);

    }

    public static async obtenerDemandaEmpresa(req: Request, res: Response){

        const databaseRes: any = await DemandaEmpresa.obtenerDemandaEmpresa();

        if (databaseRes['ok'] === false) {
            return res.status(400).json(databaseRes)
        };

        return res.status(200).json(databaseRes);

    }

    
    public static async borraDemandaEmpresa(req: Request, res: Response){

        let id = req.params.id;

        const databaseRes: any = await DemandaEmpresa.borrarDemandaEmpresa(id);

        if (databaseRes['ok'] === false) {
            return res.status(400).json(databaseRes)
        };

        return res.status(200).json(databaseRes);

    }

}