import { Request, Response } from 'express';
import * as fs from 'fs';
import * as sass from 'node-sass';
import * as md5 from 'md5';

import Files from '../utility/Files';

export class StyleController {
    protected rootFolder: string = '/styles/';

    // Should be more complex to take into account if some of the modules have dependencies
    protected fileMap: { [key: string]: string; } = {
        styles: 'styles',
        essential: 'essential',
        display: 'display/display',
        displayEssential: 'display/essential',
        displayFlex: 'display/flex/flex',
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
        let includedModules: string[] = [];
        let scssToRender: string = `@import '..${this.rootFolder}${this.fileMap.essential}.scss';`;

        // Should check if parent or child is already included, to make sure of not getting double styles
        for (const [module, include] of entries) {
            if(include == 1 && this.fileMap.hasOwnProperty(module)){
                let fileToInclude: string;

                if(Files.isFile(`${__dirname}/..${this.rootFolder}${this.fileMap[module]}.scss`)){
                    fileToInclude = `..${this.rootFolder}${this.fileMap[module]}.scss`;

                    scssToRender += `@import '${fileToInclude}';`;
                    includedModules.push(module);
                }
            }
        }

        includedModules.sort();
        const namespace: string = md5(includedModules.join('-'));
        const tempScssFile: string = `${__dirname}/../temp/${namespace}.scss`;
        const cssOutput: string = `${__dirname}/../output/${namespace}.css`;

        if(Files.isFile(cssOutput)){
            console.log('File already exists!');
            return res.send({ success: true });
        } else {
            fs.writeFile(tempScssFile, scssToRender, (err) => {
                if(err){
                    console.log(err);
                    return res.send({ success: false });
                } else {
                    this.renderScss(tempScssFile, cssOutput, err => {
                        if(err){
                            console.log(err);
                            return res.send({ success: false });
                        } else {
                            // When CSS file has been created, remove the temp SCSS file
                            return res.send({ success: true });
                        }
                    });
                }
            });
        }
    }

    protected renderScss(input: string, output: string, callback: Function): void {
        sass.render({
            file: input,
            outputStyle: 'compressed'
        }, (err, result) => {
            if(err){
                console.log(err);
            } else {
                fs.writeFile(output, result.css, err => {
                    callback(err);
                });
            }
        });
    }

    protected createScssFile() {

    }
}