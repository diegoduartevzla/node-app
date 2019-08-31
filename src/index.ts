// Agregar modulos
import express, {Application} from 'express';
import homeRouter from './routers/HomeRouter'

// definicion de la clase para crear el servidor
class Server{

    // Aplicacion web debe tener -> servicio + puerto
    app : Application;
    port: any;
    constructor(){
        // Ya vas a existir ... pero todabia no :( 
        this.app = express();
        this.port = process.env.port || 3000;
        this.app.set('port',this.port);

        this.app.set('port', this.port);
        this.app.use(express.json());

        this.configurarServidor();
    }

configurarServidor():void{

    this.app.use('/', homeRouter)
}


iniciar(): void{

    this.app.listen(this.port,( ) =>{
        
        console.log('servicio corriendo en el puerto: ', this.port);
    });

}

}
// instanciar objetos ...
const server = new Server();
//Correr el servidor, utilizando la funcion iniciar
export default server.iniciar();
