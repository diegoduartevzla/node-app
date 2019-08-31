"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// clase para el control de periciones y respuestas http
class HomeController {
    goHome(req, resp) {
        resp.json({ text: 'Hola, estas en Home' });
    }
}
const homeController = new HomeController();
exports.default = homeController;
