import { Request, Response } from 'express';
// import { ConflictoDespidoSJC } from '../models/ConflictoDespidoSJC.model';
// import { ConflictoPagoSalario } from '../models/ConflictoPagoSalario.model';
// import { ConflictoVacaciones } from '../models/ConflictoVacaciones.model';
// import { ConflictoCesantias } from '../models/ConflictoCesantias.model';
// import { ConflictoPrimas } from '../models/ConflictoPrimas.model';
// import { ConflictosContactaAbogado } from '../models/ConflictosContactaAbogado.model';
import {  ConflictoPagoSalario, ConflictoVacaciones, /*ConflictoDespidoSJC,*/ConflictoCesantias, ConflictoPrimas, ConflictosContactaAbogado } from '../models/index.models'
import {ConflictoDespidoSJC} from '../models/conflictoDespidoSJC.model';


let revisarConflicto = (respuestaModelo: any, name: string, array: any[]) => {

	if (!respuestaModelo['ok']) {
		throw { [name]: respuestaModelo };
	}

	let objeto = {
		[name]: respuestaModelo
	}

	array.push(objeto)

}


export class ConflictoController {

	public static async guardarConflicto(req: Request, res: Response) {

		let body: any = req.body;

		let conflictos: object[] = [];

		for (let clave in body) {

			if (body[clave] == ('true' || true)) {

				try {

					switch (clave) {
						case 'conflictoDespidoSJC':

							let conflictoDespidoSJCRes = await ConflictoDespidoSJC.guardarConflictoDespidoSJC(
								new ConflictoDespidoSJC(
									undefined,
									body['idDemandaPersonaNatural'],
									body['idDemandaEmpresa'],
									body['fechaInicioContrato'],
									body['tipoContrato'],
									body['fechaDespido'],
									body['montoDinero_DSJC']
								)
							);

							revisarConflicto(conflictoDespidoSJCRes, 'conflictoDespidoSJCRes', conflictos);

							break;

						case 'conflictoPagoSalario':
							let conflictoPagoSalarioRes = await ConflictoPagoSalario.guardarConflictoPagoSalario(
								new ConflictoPagoSalario(
									undefined,
									body['fechaInicioContrato'],
									body['fechaInicioNoPago'],
									body['fechaFinalNoPagoSalario'],
									body['fechaFinalContrato'],
									body['montoDinero_PagoSalario'],
									body['idDemandaPersonaNatural'],
									body['idDemandaEmpresa']
								)
							);

							revisarConflicto(conflictoPagoSalarioRes, 'conflictoPagoSalarioRes', conflictos);

							break;

						case 'conflictoVacaciones':
							let conflictoVacacionesRes;

							if (body['fechaUltimasVacaciones'] == undefined) {
								conflictoVacacionesRes = {
									ok: false,
									err: {
										message: 'fechaUltimasVacaciones no puede ser nulo'
									}
								}
							} else {

								conflictoVacacionesRes = await ConflictoVacaciones.guardarConflictoVacaciones(
									new ConflictoVacaciones(
										undefined,
										body['fechaInicioContrato'],
										body['fechaFinalContrato'],
										body['fechaUltimasVacaciones'],
										body['fechaFinalNoPagoVacaciones'],
										body['montoDinero_Vacaciones'],
										body['idDemandaPersonaNatural'],
										body['idDemandaEmpresa'],
									)
								);
							}


							revisarConflicto(conflictoVacacionesRes, 'conflictoVacacionesRes', conflictos);

							break;

						case 'conflictoCesantias':

							let conflictoCesantiasRes = await ConflictoCesantias.guardarConflictoCesantias(
								new ConflictoCesantias(
									undefined,
									body['fechaInicioContrato'],
									body['fechaFinalContrato'],
									body['fechaUltimasCesantiasPagadas'],
									body['fechaFinalNoPagoCesantias'],
									body['montoDinero_Cesantias'],
									body['montoDinero_InteresesCesantias'],
									body['idDemandaPersonaNatural'],
									body['idDemandaEmpresa']
								)
							);


							revisarConflicto(conflictoCesantiasRes, 'conflictoCesantiasRes', conflictos);

							break;

						case 'conflictoPrimas':

							let conflictoPrimasRes = await ConflictoPrimas.guardarConflictoPrimas(
								new ConflictoPrimas(
									undefined,
									body['fechaInicioContrato'],
									body['fechaFinalContrato'],
									body['fechaUltimaPrimaPagada'],
									body['fechaFinalNoPagoCesantias'],
									body['montoDinero_Prima'],
									body['idDemandaPersonaNatural'],
									body['idDemandaEmpresa']
								)
							);

							revisarConflicto(conflictoPrimasRes, 'conflictoPrimasRes', conflictos);

							break;

						case 'conflictosContactaAbogado':

							let conflictosContactaAbogadoRes = await ConflictosContactaAbogado.guardarConflictosContactaAbogado(
								new ConflictosContactaAbogado(
									undefined,
									body['conflictoARL'],
									body['conflictoPensiones'],
									body['conflictoHorasExtras'],
									body['conflictoDominicalesFestivos'],
									body['idDemandaPersonaNatural'],
									body['idDemandaEmpresa']
								)
							);

							revisarConflicto(conflictosContactaAbogadoRes, 'conflictosContactaAbogadoRes', conflictos);

							break;

					}

				}
				catch (err) {
					console.log(err)
					return res.status(400).json({
						ok: false,
						err: {
							message: err[`${Object.keys(err)}`]['err']['message'] + ' En la tabla: ' + Object.keys(err)[0].replace('Res', ' ') + `;PERO TODOS LOS DEMAS CONFLICTOS ESTAN GUARDADOS EXITOSAMENTE`
						}
					});

				}

			}

		}


		return res.status(200).json({
			ok: true,
			conflictos,

		});

	}

	public static async obtenerConflictos(req: Request, res: Response) {

		let tipo = req.params.tipo;


		if (tipo == undefined) {
			return res.status(400).json({
				ok: false,
				err: {
					message: 'Error al enviar datos desde el front'
				}
			})
		}

		let conflictos: any[] = [];

		try {
			switch (tipo) {
				case 'conflictoDespidoSJC':

					let conflictoDespidoSJCRes = await ConflictoDespidoSJC.obtenerConflictoDespidoSJC();

					revisarConflicto(conflictoDespidoSJCRes, 'conflictoDespidoSJCRes', conflictos)

					break;

				case 'conflictoPagoSalario':

					let conflictoPagoSalarioRes = await ConflictoPagoSalario.obtenerConflictoPagoSalario();

					revisarConflicto(conflictoPagoSalarioRes, 'conflictoPagoSalarioRes', conflictos);

					break;

				case 'conflictoVacaciones':

					let conflictoVacacionesRes = await ConflictoVacaciones.obtenerConflictoVacaciones();

					revisarConflicto(conflictoVacacionesRes, 'conflictoVacacionesRes', conflictos);

					break;

				case 'conflictoCesantias':

					let conflictoCesantiasRes = await ConflictoCesantias.obtenerConflictoCesantias();

					revisarConflicto(conflictoCesantiasRes, 'conflictoCesantiasRes', conflictos);

					break;

				case 'conflictoPrimas':

					let conflictoPrimasRes = await ConflictoPrimas.obtenerConflictoPrimas();

					revisarConflicto(conflictoPrimasRes, 'conflictoPrimasRes', conflictos);

					break;

				case 'conflictosContactaAbogado':

					let conflictosContactaAbogadoRes = await ConflictosContactaAbogado.obtenerConflictosContactaAbogado();

					revisarConflicto(conflictosContactaAbogadoRes, 'conflictosContactaAbogadoRes', conflictos)

					break;

			}
		}
		catch (err) {
			console.log(err)
			return res.status(400).json({
				ok: false,
				err: {
					message: err[`${Object.keys(err)}`]['err']['message'] + ' En la tabla: ' + Object.keys(err)[0].replace('Res', ' ') + `;PERO TODOS LOS DEMAS CONFLICTOS ESTAN GUARDADOS EXITOSAMENTE`
				}
			});
		}

		return res.status(200).json({
			ok: true,
			conflictos,

		});


	}
}