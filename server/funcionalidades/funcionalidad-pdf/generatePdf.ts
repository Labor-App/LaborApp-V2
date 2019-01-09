import path from 'path';
import fs from 'fs';

const PdfPrinter = require('pdfmake/src/printer');


export default class GenerarPdf{

  public printer?:any;

  public doc?:any;

  public fontDescriptors?: object = {
    Roboto: {
      normal: path.join(__dirname, './fuentes/Roboto-Regular.ttf'),
      bold: path.join(__dirname, './fuentes/Roboto-Medium.ttf'),
      italics: path.join(__dirname, './fuentes/Roboto-Italic.ttf'),
      bolditalics: path.join(__dirname, './fuentes/Roboto-MediumItalic.ttf')
    }
  };

  public chunks: any[] = [];

  public docDirection:string;

  public docName: string ;

  constructor( docDefinition:object, docName: string ){

    this.docDirection = path.join(__dirname, `../../front/Demanda.pdf`);

    this.docName = `Demanda.pdf`

    this.printer = new PdfPrinter(this.fontDescriptors);

    this.doc = this.printer.createPdfKitDocument(docDefinition);

    this.doc.on('data', (chunk:any) => {
      this.chunks.push(chunk);
    });

    this.doc.on('end', () => {
      const result = Buffer.concat(this.chunks);
      fs.writeFileSync(this.docDirection, result);
    });

    this.doc.end();



  }



  public  exists ( ){

    let exists:boolean;

    exists = fs.existsSync(this.docDirection);


    return exists;
  }

  public get getPath(){
    return this.docDirection;
  }

  public get getDocName(){
    return this.docName;
  }




}
