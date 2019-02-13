// NPM modulos
import express from  'express';
import morgan from  'morgan';
import cors from  'cors';
import path from 'path';


//Rutas
import indexRouter from './routes/index.router';


class Server{

  //Atrubutos

  public app:express.Application;// se esta diciendo a app que será de tipos express Application




  constructor(){

    require('./config/config');

    this.app = express(); // Igualamos el atributo app a todos los metodos dentro de la funcion express.
    //Ejecutamos los metodos de la clase .
    this.consfig();
    this.middlewares();
    this.routes();
    this.publicFolder();

  }


  //Metodos

  public consfig(): void{

  }

  public middlewares(): void{
    /*
      Este metodo se ejecuta en el constructor luego de las configuracione generales del server (Ej: port) y antes de las rutas, con el objetivo de registrar, procesar Cabeceras entre otras funcionalidades.
    */
    this.app.use(morgan('dev'));//Registra las peticiones que llegan al server
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));


  }

  public routes(): void{
    /*
      Este Metodo se ejecuta e el constructor y sirve para direccionar las peticiones que llegan al server.
    */
    this.app.use('/api/laborapp', indexRouter )

  }

  public publicFolder(){
    const publicPath = path.join(__dirname, './front/LaborApp')
    this.app.use(express.static(publicPath));

  }



  public start( ): void{
    /*
      Metodo para que el server escuche
      (este metodo no se ejecuta en el constructor, se llama en la instancia al final(afuera) de la clase ).
    */
    this.app.listen( process.env.PORT , () => {

      console.log(`server on port ${ process.env.PORT }` );

    })

  }





}

//Instancia de la clase Server
const server = new Server();

//Ejecucion del metodo start().
server.start();
