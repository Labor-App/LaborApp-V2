"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const nodemailer_1 = __importDefault(require("nodemailer"));
class SendEmail {
    constructor() {
        this.transporter = nodemailer_1.default.createTransport({
            //   service: 'gmail',
            //   auth: {
            //     user: 'jonathancolombia510@gmail.com',
            //     pass: '123456jonathan'
            //   }
            host: "ingnovatech.com",
            port: 2095,
            secure: true,
            auth: {
                user: "gerencia@ingnovatech.com",
                pass: "password" // your password
            }
        });
        this.mailOptions = {};
    }
    sendPdf(destinatario, userName, docPath, docName) {
        let pathAttachments = docPath || path_1.default.join(__dirname, `../../front/Demanda.pdf`);
        let filname = docName || `Demanda-${userName}.pdf`;
        this.mailOptions = {
            from: '"LaborApp" <gerencia@ingnovatech.com>',
            to: `${destinatario}`,
            subject: 'LaborApp - Demanda',
            text: `Hola!
            Hemos generado su demanda exitosamente gracias por utilizar LaborApp`,
            attachments: [
                {
                    filename: filname,
                    path: pathAttachments
                }
            ]
        };
        this.transporter.sendMail(this.mailOptions, (err, res) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log('email send', res.accepted);
                // fs.unlink( pathAttachments, err => {
                //   if (err) throw err;
                //   console.log( `PDF eliminado ${ pathAttachments }`);
                // });
            }
        });
    }
}
const sendEmail = new SendEmail();
exports.default = sendEmail;
