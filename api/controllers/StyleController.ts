import { Request, Response } from 'express';
import * as fs from 'fs';
import * as sass from 'node-sass';
import * as md5 from 'md5';

import Files from '../utility/Files';
import StyleData from '../data/StyleData';

export class StyleController {
    public requestCss = (req: Request, res: Response) => {
        const requestData = req.body;
        const entries = Object.entries(requestData);
        const rootFolder = StyleData.getRootFolder();
        const essentialModule = StyleData.getModule('essential');
        let includedModules: string[] = [];
        let scssToRender: string = `@import '..${rootFolder}${essentialModule.path}.scss';`;

        // Should check if parent or child is already included, to make sure of not getting double styles
        for (const [moduleName, include] of entries) {
            if(include == 1){
                let fileToInclude: string;
                const module = StyleData.getModule(moduleName);

                if(Files.isFile(`${__dirname}/..${rootFolder}${module.path}.scss`)){
                    fileToInclude = `..${rootFolder}${module.path}.scss`;

                    scssToRender += `@import '${fileToInclude}';`;
                    includedModules.push(moduleName);
                }
            }
        }

        includedModules.sort();
        const namespace: string = md5(includedModules.join('-'));
        const tempScssFile: string = `${__dirname}/../temp/${namespace}.scss`;
        const cssOutput: string = `${__dirname}/../output/${namespace}.css`;

        // Create required folders if they don't already exist
        this.createRequiredFolders();

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
                            fs.unlink(tempScssFile, err => {
                                if(err){
                                    console.log(err);
                                    return res.send({ success: false });
                                } else {
                                    return res.send({ success: true });
                                }
                            });
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

    protected createRequiredFolders = (): boolean => {
        const tempFolder: string = `${__dirname}/../temp`;
        const outputFolder: string = `${__dirname}/../output`;
        let success = true;

        if(!Files.directoryExists(tempFolder)){
            if(!Files.createDirectory(tempFolder)){
                success = false;
            }
        }

        if(!Files.directoryExists(outputFolder)){
            if(!Files.createDirectory(outputFolder)){
                success = false;
            }
        }

        return success;
    }
}