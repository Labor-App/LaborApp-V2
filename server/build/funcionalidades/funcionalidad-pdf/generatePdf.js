"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs_1 = require("fs");
const docDefinition_1 = __importDefault(require("./docDefinition"));
const PdfPrinter = require('pdfmake/src/printer');
class GenerarPdf {
    constructor(docDefinition, docName) {
        this.fontDescriptors = {
            Roboto: {
                normal: path_1.join(__dirname, './fuentes/Roboto-Regular.ttf'),
                bold: path_1.join(__dirname, './fuentes/Roboto-Medium.ttf'),
                italics: path_1.join(__dirname, './fuentes/Roboto-Italic.ttf'),
                bolditalics: path_1.join(__dirname, './fuentes/Roboto-MediumItalic.ttf')
            }
        };
        this.chunks = [];
        this.docDirection = path_1.join(__dirname, `../../front/Demanda.pdf`);
        this.docName = `Demanda.pdf`;
        this.printer = new PdfPrinter(this.fontDescriptors);
        this.doc = this.printer.createPdfKitDocument(docDefinition);
        this.doc.on('data', (chunk) => {
            this.chunks.push(chunk);
        });
        this.doc.on('end', () => {
            const result = Buffer.concat(this.chunks);
            fs_1.writeFileSync(this.docDirection, result);
        });
        this.doc.end();
    }
    exists() {
        let exists;
        exists = fs_1.existsSync(this.docDirection);
        return exists;
    }
    get getPath() {
        return this.docDirection;
    }
    get getDocName() {
        return this.docName;
    }
}
exports.default = GenerarPdf;
const datosDemanda = {
    accionante: 'Jonathan Arias',
    accionado: 'Empresa',
    ciudadAccionante: "accionante.codigoDaneMunicipio",
    cedulaAccionante: 'accionante.numeroDocumentoPersona',
    lugarDeExpedicion: 'lugarDeExpedicion',
    nit: 'accionado.NItEmpresa',
    represetanteLegal: 'represetanteLegal',
    ciudadAccionado: 'ciudadAccionado'
};
console.log(datosDemanda);
//Generando el contenido del pdf con el objeto previamente creado.
const docDefinition = new docDefinition_1.default(datosDemanda);
//Generando el pdf ( contenido, nombre del accionante (para que cuando se genere el pdf, el nombre del mismo ('pdf') sea unico )).
new GenerarPdf(docDefinition.getDoc, docDefinition.getAccionante);
