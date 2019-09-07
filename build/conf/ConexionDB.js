"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importacion de paquetes
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const Keys_1 = __importDefault(require("./Keys"));
//Declaracion de Objeto de conexion
const conn = promise_mysql_1.default.createPool(Keys_1.default.config);
conn.then(connection => {
    console.log('Connectado');
    connection.end;
});
exports.default = conn;
