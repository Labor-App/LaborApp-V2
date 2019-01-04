import  express from  'express';
import morgan from  'morgan';
import cors from  'cors';


class Server{

public app:express.Application;// se esta diciendo a app que será de tipos express

public port = process.env.PORT||3000;
constructor(){
    this.app=express();
    this.start();
    
}

start( ):void{
    this.app.listen(this.port,()=>{ 
        console.log(`server on port ${this.port}` )
    })

}





} 


const server=new Server();




