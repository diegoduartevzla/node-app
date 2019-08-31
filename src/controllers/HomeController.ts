// importar librerias
import{ Request, Response } from 'express';


// clase para el control de periciones y respuestas http
class HomeController {

    public goHome(req: Request,resp: Response){

        resp.json({text: 'Hola, estas en Home'});
    }
}

const homeController = new HomeController();
export default homeController;

