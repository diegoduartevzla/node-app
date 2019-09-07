//importacion de paquetes
import mysql from 'promise-mysql';
import keys from './Keys';

//Declaracion de Objeto de conexion

const conn = mysql.createPool(keys.config);

conn.then(

    connection =>{
        console.log('Connectado');
        connection.end;
    }
);
export default conn;
