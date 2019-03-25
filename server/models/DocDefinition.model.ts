import { ConflictoPagoSalario } from "./ConflictoPagoSalario.model";

export interface DocDefinitionModel{

  // Nombres
  accionante:string,
  accionado:string,

  // Cedulas
  cedulaAccionante:string,
  cedulaAccionado:string,

  //Ciudad
  ciudadAccionante:string,
  ciudadAccionado:string,

  //Correo
  correoAccionante:string,
  correoAccionado:string,

  
  // Notificaciones
  direccionDeNotificacionAccionante: string ,
  direccionDeNotificacionAccionado: string ,


  // Lugar de expedicion
  lugarDeExpedicionAccionante:string,
  lugarDeExpedicionAccionado:string,
  
  // Solo Empresas
  nit?:number,
  represetanteLegal:string,

  // FechaDeingreso a la empresa
  fechaDeIngresoALaEmpresa: string | Date,


  // Hechos
  salarioPactado?: number,
  funcionesQueRealizaba: string,
  conflictos: String[],
  incumplimientoDelEmpleador: any,
  fechaDeLaPrimeraSolicitudAlEmpleador: string | Date,
  situacionActualFrenteALaRenunciaDelEmpleador: string,

  // Peticiones
  causa: string,
  salariosVencidos: string | number,
  cesantias: string | number,
  diasDeTrabajo: number | string,
  interesesDeCesantias: number | string,
  primaDeServicios: number | string,
  indemnizacionPorNoPago: number | string, 
  valorDeLasPretenciones: string | number,




  




}
