import path from 'path';
import fs from 'fs';
import nodemailer  from 'nodemailer';


class SendEmail{


  public transporter: nodemailer.Transporter;

  public mailOptions: nodemailer.SendMailOptions;

  constructor(){

    this.transporter = nodemailer.createTransport(
      {
        service: 'gmail',
        auth: {
          user: 'ingnovatech.recyapp@gmail.com',
          pass: 'STIVEN1911'
        }
      // host: "ingnovatech.com",
      // port: 2095,
      // secure: true,
      // auth: {
      // user: "gerencia@ingnovatech.com", // your domain email address
      // pass: "password" // your password
      // }
    }
    )
    this.mailOptions = {};


  }


  sendPdf( destinatario:string[], userName?:string, docPath?:string  , docName?:string ){

    let pathAttachments = docPath || path.join(__dirname, `../../front/Demanda.pdf`)
    let filname = docName || `Demanda-${ userName }.pdf`

    this.mailOptions = {
      from: 'LaborApp',
      to: `${ destinatario }`,
      subject: 'LaborApp - Demanda',
      text: `Hola!
            Hemos generado su demanda exitosamente gracias por utilizar LaborApp`,
      attachments:[
        {
          filename: filname,
          path: pathAttachments
        }
      ]
    };

    this.transporter.sendMail( this.mailOptions, (err, res) => {



      if(err){
        console.log(err);
      }else{
        console.log('email send',res.accepted);
        // fs.unlink( pathAttachments, err => {
        //   if (err) throw err;
        //   console.log( `PDF eliminado ${ pathAttachments }`);
        // });

      }

    });
  }

}

const sendEmail = new SendEmail();

export default sendEmail;
