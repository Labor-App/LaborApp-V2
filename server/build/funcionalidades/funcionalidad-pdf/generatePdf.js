"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const PdfPrinter = require('pdfmake/src/printer');
class GenerarPdf {
    constructor(docDefinition, docName) {
        this.fontDescriptors = {
            Roboto: {
                normal: path_1.default.join(__dirname, './fuentes/Roboto-Regular.ttf'),
                bold: path_1.default.join(__dirname, './fuentes/Roboto-Medium.ttf'),
                italics: path_1.default.join(__dirname, './fuentes/Roboto-Italic.ttf'),
                bolditalics: path_1.default.join(__dirname, './fuentes/Roboto-MediumItalic.ttf')
            }
        };
        this.chunks = [];
        this.docDirection = path_1.default.join(__dirname, `../../front/Demanda.pdf`);
        this.docName = `Demanda.pdf`;
        this.printer = new PdfPrinter(this.fontDescriptors);
        this.doc = this.printer.createPdfKitDocument(docDefinition);
        this.doc.on('data', (chunk) => {
            this.chunks.push(chunk);
        });
        this.doc.on('end', () => {
            const result = Buffer.concat(this.chunks);
            fs_1.default.writeFileSync(this.docDirection, result);
        });
        this.doc.end();
    }
    exists() {
        let exists;
        exists = fs_1.default.existsSync(this.docDirection);
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
