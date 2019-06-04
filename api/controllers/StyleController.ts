import { Request, Response } from 'express';

import Files from '../utility/Files';

export class StyleController {
    public requestCss(req: Request, res: Response){
        const outputDirectory: string = './output';

        if (!Files.directoryExists(outputDirectory)) {
            Files.createOutputDirectory(outputDirectory);
        }

        const success: boolean = Files.renderScss('./styles/styles.scss', './output/styles.css');

        res.send({ success });
    }
}