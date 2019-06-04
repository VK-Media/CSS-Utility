import { StyleController } from "../controllers/index";

export default class StyleRoutes {
    public styleController: StyleController = new StyleController();

    public routes(app): void {
        app.route('/css')
            .post(this.styleController.requestCss)
    }
}