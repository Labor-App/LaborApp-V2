import { DocDefinitionModel } from '../../models/docDefinition.model';


export default class DocDefinition{

  public doc: object;
  variablesPdf: any;

  constructor( variablesPdf: any ){
    this.variablesPdf = variablesPdf;

    this.doc = {
      pageMargins: [ 40, 60, 40, 60 ],
      pageOrientation: 'portrait',
      pageSize: 'A4',
      content: [

        {
          //Titulo
          text:'DEMANDA\n\n\n',bold:true,alignment: 'center',fontSize: 20
        },

        {
          text:[
          `Señor
          Juez civil de pequeñas Causas - laboral `,
          {text: `CIUDAD`, fontSize: 15, bold: true},
          '(Reparto)\nE. S. D',
          '\n\n',
          'Referencia 	    :	Demanda',
          '\n',
          'Demandante 	:	',
          {text: `${ variablesPdf.accionante }`, fontSize: 15, bold: true},
          `.`,
          '\n',
          'Demandado 	 :	',
          {text: `${ variablesPdf.accionado }`, fontSize: 15, bold: true},
          `.`
          ]
        },

        {
          //Parrafo
          text: [
            {text: '\n'},

            {text: `${ variablesPdf.accionante }`, fontSize: 15, bold: true},

            `, colombiano, mayor de edad y domiciliado en `,
            {text: `${ variablesPdf.ciudadAccionante }`, fontSize: 15, bold: true},
            `, con cedula de ciudadanía número  `,
            {text: `${ variablesPdf.cedulaAccionante }`, fontSize: 15, bold: true},
            ` de `,
            {text: `${ variablesPdf.lugarDeExpedicion }`, fontSize: 15, bold: true},
            ` obrando en mi nombre, presento ante su honorable despacho demanda contra `,
            {text: `${ variablesPdf.accionado }`, fontSize: 15, bold: true},
            `. Identificada con él NIT `,
            {text: `${ variablesPdf.nit }`, fontSize: 15, bold: true},
            `, representada legalmente por `,
            {text: `${ variablesPdf.represetanteLegal } `, fontSize: 15, bold: true},
            `o quien haga sus veces, entidad con domicilio en la ciudad de `,
            {text: `${ variablesPdf.ciudadAccionado }`, fontSize: 15, bold: true},
            `, para que mediante el tramite propio del proceso ordinario laboral de mínima cuantía y mediante sentencia se profieran las respectivas condenas que más adelante entrare a solicitar, para lo cual me fundamento en los hechos y normas que a continuación relaciono.`

          ], alignment: 'justify'
        },
        {
          text:`\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id estlaborum.`,
          alignment: 'justify'
        },
        {
          columns:[

            {
              text:[
                {text:`\n\n\n\n\n\n\n\n\n\n\n\n\n_____________________________\n`},
                {text:`dddsdsdsdsdsdsd`}

              ], alignment: 'center'
            },
            {
              text:[
                {text:`\n\n\n\n\n\n\n\n\n\n\n\n\n_____________________________\n`},
                {text:`dddsdsdsdsdsdsd`}

              ], alignment: 'center'
            }
          ]
        },


      ]
    };


  }

  get getDoc(){

    return this.doc;

  }

  get getAccionante(){

    return this.variablesPdf.accionante;

  }






}











// export default{
//     pageMargins: [ 40, 60, 40, 60 ],
//     pageOrientation: 'portrait',
//     pageSize: 'A4',
//     content: [
//
//       {
//         //Titulo
//         text:'DEMANDA\n\n\n',bold:true,alignment: 'center',fontSize: 20
//       },
//
//       {
//         text:[
//         `Señor
//         Juez civil de pequeñas Causas - laboral `,
//         {text: `CIUDAD`, fontSize: 15, bold: true},
//         '(Reparto)\nE. S. D',
//         '\n\n',
//         'Referencia 	    :	Demanda',
//         '\n'
//         'Demandante 	:	',
//         {text: `ACCIONANTE`, fontSize: 15, bold: true},
//         `.`,
//         '\n',
//         'Demandado 	 :	',
//         {text: `ACCIONADO`, fontSize: 15, bold: true},
//         `.`
//         ]
//       },
//
//       {
//         //Parrafo
//         text: [
//           {text: '\n'},
//
//           {text: `ACCIONANTE`, fontSize: 15, bold: true},
//
//           `, colombiano, mayor de edad y domiciliado en `,
//           {text: `CIUDAD`, fontSize: 15, bold: true},
//           `, con cedula de ciudadanía número  `,
//           {text: `CEDULA`, fontSize: 15, bold: true},
//           ` de `,
//           {text: `LUGAR DE EXPEDICIÓN`, fontSize: 15, bold: true},
//           ` obrando en mi nombre, presento ante su honorable despacho demanda contra`,
//           {text: `ACCIONADO`, fontSize: 15, bold: true},
//           `. Identificada con él NIT `,
//           {text: `NÚMERO DE NIT`, fontSize: 15, bold: true},
//           `, representada legalmente por `,
//           {text: `REPRESENTANTE LEGAL `, fontSize: 15, bold: true},
//           `o quien haga sus veces, entidad con domicilio en la ciudad de `,
//           {text: `CIUDAD`, fontSize: 15, bold: true},
//           `, para que mediante el tramite propio del proceso ordinario laboral de mínima cuantía y mediante sentencia se profieran las respectivas condenas que más adelante entrare a solicitar, para lo cual me fundamento en los hechos y normas que a continuación relaciono.`
//
//         ], alignment: 'justify'
//       },
//       {
//         text:`\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id estlaborum.`,
//         alignment: 'justify'
//       },
//       {
//         columns:[
//
//           {
//             text:[
//               {text:`\n\n\n\n\n\n\n\n\n\n\n\n\n_____________________________\n`},
//               {text:`dddsdsdsdsdsdsd`}
//
//             ], alignment: 'center'
//           },
//           {
//             text:[
//               {text:`\n\n\n\n\n\n\n\n\n\n\n\n\n_____________________________\n`},
//               {text:`dddsdsdsdsdsdsd`}
//
//             ], alignment: 'center'
//           }
//         ]
//       },
//
//
//     ]
// }
