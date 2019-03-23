"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DocDefinition {
    constructor(variablesPdf) {
        this.variablesPdf = variablesPdf;
        this.doc = {
            pageMargins: [40, 60, 40, 60],
            pageOrientation: 'portrait',
            pageSize: 'A4',
            content: [
                {
                    //Titulo
                    text: 'DEMANDA\n\n\n', bold: true, alignment: 'center', fontSize: 20
                },
                {
                    text: [
                        `Señor
          Juez civil de pequeñas Causas - laboral `,
                        { text: `CIUDAD`, fontSize: 15, bold: true },
                        '(Reparto)\nE. S. D',
                        '\n\n',
                        'Referencia 	    :	Demanda',
                        '\n',
                        'Demandante 	:	',
                        { text: `${variablesPdf.accionante}`, fontSize: 15, bold: true },
                        `.`,
                        '\n',
                        'Demandado 	 :	',
                        { text: `${variablesPdf.accionado}`, fontSize: 15, bold: true },
                        `.`
                    ]
                },
                {
                    //Parrafo
                    text: [
                        { text: '\n' },
                        { text: `${variablesPdf.accionante}`, fontSize: 15, bold: true },
                        `, colombiano, mayor de edad y domiciliado en `,
                        { text: `${variablesPdf.ciudadAccionante}`, fontSize: 15, bold: true },
                        `, con cedula de ciudadanía número  `,
                        { text: `${variablesPdf.cedulaAccionante}`, fontSize: 15, bold: true },
                        ` de `,
                        { text: `${variablesPdf.lugarDeExpedicion}`, fontSize: 15, bold: true },
                        ` obrando en mi nombre, presento ante su honorable despacho demanda contra `,
                        { text: `${variablesPdf.accionado}`, fontSize: 15, bold: true },
                        `. Identificada con él NIT `,
                        { text: `${variablesPdf.nit}`, fontSize: 15, bold: true },
                        `, representada legalmente por `,
                        { text: `${variablesPdf.represetanteLegal} `, fontSize: 15, bold: true },
                        `o quien haga sus veces, entidad con domicilio en la ciudad de `,
                        { text: `${variablesPdf.ciudadAccionado}`, fontSize: 15, bold: true },
                        `, para que mediante el tramite propio del proceso ordinario laboral de mínima cuantía y mediante sentencia se profieran las respectivas condenas que más adelante entrare a solicitar, para lo cual me fundamento en los hechos y normas que a continuación relaciono.`,
                    ], alignment: 'justify'
                },
                { text: `\n\nTipo de proceso`, alignment: 'center', bold: true },
                {
                    text: `\n\nEn razón de la cuantía siendo esta inferior a veinte (20) SMLMV, corresponde la presente acción a la descrita como ordinaria laboral de única instancia.`,
                    alignment: 'justify'
                },
                { text: `\n\n\nHechos`, alignment: 'center', bold: true },
                {
                    text: `\n1. ${'FECHA DE INGRESO A LA EMPRESA'}`, alignment: 'left', bold: true
                },
                {
                    text: `\n2. ${'FECHA DE INGRESO A LA EMPRESA'}`, alignment: 'left', bold: true
                },
                {
                    text: `\n3. ${'FECHA DE INGRESO A LA EMPRESA'}`, alignment: 'left', bold: true
                },
                {
                    text: `\n4. ${'FECHA DE INGRESO A LA EMPRESA'}`, alignment: 'left', bold: true
                },
                {
                    text: `\n5. ${'FECHA DE INGRESO A LA EMPRESA'}`, alignment: 'left', bold: true
                },
                {
                    text: `\n6. ${'FECHA DE INGRESO A LA EMPRESA'}`, alignment: 'left', bold: true
                },
                {
                    text: `\n7. ${'FECHA DE INGRESO A LA EMPRESA'}`, alignment: 'left', bold: true
                },
                {
                    text: `\n8. ${'FECHA DE INGRESO A LA EMPRESA'}`, alignment: 'left', bold: true
                },
                {
                    text: `\n9. ${'FECHA DE INGRESO A LA EMPRESA'}`, alignment: 'left', bold: true
                },
                {
                    text: `\n10. ${'FECHA DE INGRESO A LA EMPRESA'}`, alignment: 'left', bold: true
                },
                { text: `\n\n\nPeticiones`, alignment: 'center', bold: true },
                {
                    text: `\nSolicito al señor juez que una vez probados los hechos arriba enunciados se declare:    `,
                    alignment: 'justify'
                },
                {
                    columns: [
                        {
                            text: [
                                { text: `\n\n\n\n\n\n\n\n\n\n\n\n\n_____________________________\n` },
                                { text: `dddsdsdsdsdsdsd` }
                            ], alignment: 'center'
                        },
                        {
                            text: [
                                { text: `\n\n\n\n\n\n\n\n\n\n\n\n\n_____________________________\n` },
                                { text: `dddsdsdsdsdsdsd` }
                            ], alignment: 'center'
                        }
                    ]
                },
            ]
        };
    }
    get getDoc() {
        return this.doc;
    }
    get getAccionante() {
        return this.variablesPdf.accionante;
    }
}
exports.default = DocDefinition;
