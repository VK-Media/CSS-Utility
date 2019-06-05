import * as fs from 'fs';
import * as sass from 'node-sass';

class Files {
    public static createDirectory(path: string): boolean {
        fs.mkdir(path, { recursive: true }, err => {
            if (err) return false;
        });

        return true;
    }

    public static directoryExists(path: string): boolean {
        return fs.existsSync(path)
    }
}

export default Files;