import { Request, Response } from 'express';
import * as fs from 'fs';
import * as sass from 'node-sass';

import Files from '../utility/Files';

export class StyleController {
    public requestCss(req: Request, res: Response){
        const outputDirectory: string = './output';

        if (!Files.directoryExists(outputDirectory)) {
            Files.createDirectory(outputDirectory);
        }

        const success: boolean = this.renderScss('./styles/styles.scss', './output/styles.css');

        res.send({ success });
    }

    protected renderScss(input: string, output: string): boolean {
        sass.render({
            file: input,
            outputStyle: 'compressed'
        }, (err, result) => {
            if (err) {
                console.log(err);
                return false;
            }

            fs.writeFile(output, result.css, err => {
                if (err) {
                    console.log(err);
                    return false;
                }
            });
        });

        return true;
    }

    protected createScssFile() {

    }
}