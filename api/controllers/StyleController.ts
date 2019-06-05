import { Request, Response } from 'express';
import * as fs from 'fs';
import * as sass from 'node-sass';
import * as md5 from 'md5';

import Files from '../utility/Files';

export class StyleController {
    protected rootFolder: string = '/styles/';

    protected fileMap: { [key: string]: string; } = {
        styles: 'styles',
        essential: 'essential',
        display: 'display/display',
        displayEssential: 'display/essential',
        displayFlex: 'stylesdisplay/flex/flex',
        distribution: 'distribution/distribution',
        distributionOffset: 'distribution/offset/offset',
        distributionWidth: 'distribution/width/width',
        spacing: 'spacing/spacing',
        spacingMargin: 'spacing/margin/margin',
        spacingPadding: 'spacing/padding/padding',
        text: 'text/text',
        textAlign: 'text/align/align',
        textSize: 'text/size/size'
    }

    public requestCss = (req: Request, res: Response) => {
        const requestData = req.body;
        const entries = Object.entries(requestData);

        let scssToRender: string = `@import '..${this.rootFolder}${this.fileMap.essential}.scss';`;

        for (const [module, include] of entries) {
            if(include == 1 && this.fileMap.hasOwnProperty(module)){
                let fileToInclude: string;

                if(Files.isFile(`${__dirname}/..${this.rootFolder}${this.fileMap[module]}.scss`)){
                    fileToInclude = `..${this.rootFolder}${this.fileMap[module]}.scss`;

                    scssToRender += `@import '${fileToInclude}';`;
                }
            }
        }

        res.send({ scssToRender });

        /*
        const outputDirectory: string = './output';

        if (!Files.directoryExists(outputDirectory)) {
            Files.createDirectory(outputDirectory);
        }

        const success: boolean = this.renderScss('./styles/styles.scss', './output/styles.css');

        res.send({ success });
       */
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