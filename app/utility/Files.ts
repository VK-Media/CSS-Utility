import * as fs from 'fs';
import * as sass from 'node-sass';

class Files {
    public static createOutputDirectory(path: string): boolean {
        fs.mkdir(path, { recursive: true }, err => {
            if (err) return false;
        });

        return true;
    }

    public static directoryExists(path: string): boolean {
        return fs.existsSync(path)
    }

    public static renderScss(input: string, output: string): boolean{
        sass.render({
            file: input,
            outputStyle: 'compressed'
        }, (err, result) => {
            if(err){
                console.log(err);
                return false;
            }

            fs.writeFile(output, result.css, err => {
                if(err){
                    console.log(err);
                    return false;
                }
            });
        });

        return true;
    }

    public static createScssFile(){
        
    }
}

export default Files;