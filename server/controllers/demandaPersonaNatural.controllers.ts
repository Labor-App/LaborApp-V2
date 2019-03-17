import { Response, Request } from 'express';
import { DemandaPersonaNatural } from '../models/index.models';

export class DemandaPersonaNaturalController {

    public static async guardarDemandaPersonaNatural(req: Request, res: Response) {

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

        body['respuestaFinalDemandaersonaN'] = body['respuestaFinalDemandaersonaN'] === 'true' ? 1 : 0;
        body['superaMinimaCuantiaPersNat'] = body['superaMinimaCuantiaPersNat'] === 'true' ? 1 : 0;

        const databaseRes: any = await DemandaPersonaNatural.guardarDemandaPersonaNatural(
            new DemandaPersonaNatural(
                undefined,
                body['fechaDemandaPersonaNatural'],
                body['codigoCiudad'],
                body['tipoDocumentoPersona'],
                body['numeroDocumentoPersona'],
                body['IdPersonaNatural'],
                body['idContrato'],
                body['fechaPropuestaRadicacionDemandaPersonaN'],
                body['fecharRealRadicacionDemandaPersonaN'],
                body['fechaPropuestaRadicacionDerechoPetiPersonaN'],
                body['fecharRealRadicacionDerechoPetiPersonaN'],
                body['informeDesicionFinalDemandaPersonaN'],
                body['respuestaFinalDemandaersonaN'],
                body['montoTotalDemandaPersNat'],
                body['superaMinimaCuantiaPersNat']
            )
        )

        if (databaseRes['ok'] === false) {  
            return res.status(400).json(databaseRes)
        };

        return res.status(200).json(databaseRes);

    }

    public static async obtenerDemandaPersonaNatural(req: Request, res: Response){

        const databaseRes: any = await DemandaPersonaNatural.obtenerDemandaPersonaNatural();

        if (databaseRes['ok'] === false) {
            return res.status(400).json(databaseRes)
        };

        return res.status(200).json(databaseRes);

    }

    
    public static async borraDemandaPersonaNatural(req: Request, res: Response) {

        let id = req.params.id;

        const databaseRes: any = await DemandaPersonaNatural.borrarDemandaPersonaNatural(id);

        if (databaseRes['ok'] === false) {
            return res.status(400).json(databaseRes)
        };

        return res.status(200).json(databaseRes);

    }

}