"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Agregar modulos
const express_1 = __importDefault(require("express"));
const HomeRouter_1 = __importDefault(require("./routers/HomeRouter"));
// definicion de la clase para crear el servidor
class Server {
    constructor() {
        // Ya vas a existir ... pero todabia no :( 
        this.app = express_1.default();
        this.port = process.env.port || 3000;
        this.app.set('port', this.port);
        this.app.set('port', this.port);
        this.app.use(express_1.default.json());
        this.configurarServidor();
    }
    configurarServidor() {
        this.app.use('/', HomeRouter_1.default);
    }
    iniciar() {
        this.app.listen(this.port, () => {
            console.log('servicio corriendo en el puerto: ', this.port);
        });
    }
}
// instanciar objetos ...
const server = new Server();
//Correr el servidor, utilizando la funcion iniciar
exports.default = server.iniciar();
