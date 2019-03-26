

let dateDiff = require('date-diff');


export class MontosConflictos {

    ////******Conflicto No 1 Despido sin justa causa **********/////

   static  MontoDSJC (tipoContrato: string, salario: number, 
    fechaInicioContrato: Date, fechaDespido: Date ): any {
        let duracionLaboral_anios = this.diferenciaFechas(fechaDespido,fechaInicioContrato,'anios');
        let duracionLaboral_dias = this.diferenciaFechas(fechaDespido,fechaInicioContrato,'dias');
        let montoBruto =  this.montoAdeudado(salario,fechaInicioContrato,fechaDespido);
        if(tipoContrato=='tf'){
            if( duracionLaboral_dias >= 15){
               return montoBruto;
            } else {
                return 0;
            }
        } else if(tipoContrato == 'ti'){
            if(duracionLaboral_anios>1){
                return montoBruto + (((salario/30)*20) * duracionLaboral_anios)
            } else {
                return montoBruto + salario;
            }

        } else if (tipoContrato == 'ol'){
            return montoBruto;
        } else {
            return 0;
        }
        }

    ////******Conflicto No 2 No pago de salario **********/////

    static MontoNoPagoSalario (fechaInicioSinPago: Date, fechaRetiro: Date, salario: number){
        let periodoSinPago = this.diferenciaFechas(fechaRetiro,fechaInicioSinPago,'dias');
        return (periodoSinPago/30)*salario;
    } 

        ////******Conflicto No 3 No Pago de Prima **********/////

    static MontoPagoPrima (inicioNoPagoPrima: Date, finalNoPagoPrima: Date, salario: number, tipoContrato: string) {
        
        if(tipoContrato=='ti' || tipoContrato=='tf'){
            
        /*
        let inicioNoPagoPrimaNum =  this.dateToNumber(inicioNoPagoPrima);
        let finalNoPagoPrimaNum =  this.dateToNumber(finalNoPagoPrima);
        let inicioNoPagoPrimaObj =  this.dateToSeparate(inicioNoPagoPrima);
        let finalNoPagoPrimaNObj =  this.dateToSeparate(finalNoPagoPrima);
        const primaMitadAnioNum = 530;
        const primaFinalAnioNum= 1120;
        let inicioNoPagoPri_mesDia = inicioNoPagoPrimaNum - (inicioNoPagoPrimaObj.anio*10000);
        let finNoPagoPri_mesDia = finalNoPagoPrimaNum - (finalNoPagoPrimaNObj.anio*10000); 
        */

        let periodoNoPagoPrima = this.diferenciaFechas(finalNoPagoPrima,inicioNoPagoPrima,'dias');

        return Math.round((salario*periodoNoPagoPrima)/360);
    
    } else { return 0;}
    }

 ////******Conflicto No 4 No Pago de Cesantias **********/////
    static MontoCesantias (inicioNoPagoCesantias: Date, finalNoPagoCesantias: Date, salario: number) {
        let periodoNoPagoCesantias = this.diferenciaFechas(finalNoPagoCesantias,inicioNoPagoCesantias,'dias');
        let MontoCesantias = ((periodoNoPagoCesantias*salario)/360);
        
        return {
             cesantias: MontoCesantias,  
             interesesCesantias: (MontoCesantias*0.12),
             dias: periodoNoPagoCesantias
            };
    }

////******Conflicto No 5 No Pago de Vacaciones **********/////
    static MontoVacaciones (inicioNoPagoVacas: Date, finalNoPagoVacas: Date, salario: number, tipoContrato: string){
        if(tipoContrato=='ti' || tipoContrato=='tf'){
            let PeriodoNoPagoVacas = this.diferenciaFechas(finalNoPagoVacas,inicioNoPagoVacas,'dias');
            return {
                dias: PeriodoNoPagoVacas,
                monto: Math.round((salario*PeriodoNoPagoVacas)/720)
            }
            
        } else {
            return 0
        }
}

////****** Calculo Mínima Cuantía **********/////

static calculaMinimaCuantia(montoDSJC: number, 
                           montoNoPagoSalario: number,
                           montoPrima: number,
                           montoCesantias: number,
                           montoVacas: number) {
    const totalMontos=montoDSJC + montoNoPagoSalario +
    montoPrima + montoCesantias + montoVacas;

    const valorMinimo2019 = 828116;
    const minimaCuantia = valorMinimo2019 * 20;
    let excedeMinimaCuantia: boolean;

    if(totalMontos <= minimaCuantia){
        excedeMinimaCuantia = false;
    } else {
        excedeMinimaCuantia = true;
    }

    const dataMontosTotales = {
        excedeMinimaCuantia,
        totalMontos
    }

    return dataMontosTotales;
    

    }

    //////////////////*****métodos de ayuda****//////////////

    static dateToSeparate (fecha: any): any {
        let fecha_ = new Date(fecha);
        let fechaResult= {
            anio: fecha_.getFullYear(),
            mes: fecha_.getMonth(),
            dia: fecha_.getDate()
        }

        return fechaResult;
    }

    static dateToNumber (fecha: Date): any {
        let fechaResul= this.dateToSeparate(fecha);
        let fechaNumber = (fechaResul.anio*10000) +
         (fechaResul.mes*100) + (fechaResul.dia);
         return fechaNumber; 
    }

    static diferenciaFechas (fechaFinal: Date, fechaInicio: Date,
         seleccion: string): any {
        let diff = new dateDiff(fechaFinal, fechaInicio);

        if (seleccion=='dias'){
            return diff.days();
        } else if (seleccion == 'anios'){
            return diff.years()
        } else {
            return 'error'
        }

    }

    static montoAdeudado (
        salario: number, 
        fechaInicioContrato: Date, 
        fechaDespido: Date){
            let diasFaltantes=this.diferenciaFechas(
                fechaDespido,
                fechaInicioContrato,
                'dias');
            let MontoAdedudado = diasFaltantes*(salario/30);
            return MontoAdedudado;
            
        }

}




export default MontosConflictos;










