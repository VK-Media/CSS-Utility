interface Module { path: string; dependencies?: Array<string> }
interface ModuleMap { [s: string]: Module; }

export default class StyleData {
    protected static rootFolder: string = '/styles/';

    // This should definitely be saved in a database instead...
    protected static moduleMap: ModuleMap = {
        styles: {
            path: 'styles',
            dependencies: ['essential']
        },
        essential: {
            path: 'essential'
        },
        display: {
            path: 'display/display',
            dependencies: ['displayEssential']
        },
        displayEssential: {
            path: 'display/essential'
        },
        displayFlex: {
            path: 'display/flex/flex', 
            dependencies: ['displayEssential']
        },
        distribution: {
            path: 'distribution/distribution'
        },
        distributionOffset: {
            path: 'distribution/offset/offset'
        },
        distributionWidth: {
            path: 'distribution/width/width'
        },
        spacing: {
            path: 'spacing/spacing'
        },
        spacingMargin: {
            path: 'spacing/margin/margin'
        },
        spacingPadding: {
            path: 'spacing/padding/padding'
        },
        text: {
            path: 'text/text'
        },
        textAlign: {
            path: 'text/align/align'
        },
        textSize: {
            path: 'text/size/size'
        }
    }

    public static getRootFolder = (): string => {
        return StyleData.rootFolder;
    }

    public static getModule = (moduleName: string): Module => {
        const moduleExists = StyleData.moduleMap.hasOwnProperty(moduleName);

        return moduleExists ? StyleData.moduleMap[moduleName] : null;
    }

    public static addModule = (moduleName: string, module: Module): boolean => {
        const moduleExists = StyleData.moduleMap.hasOwnProperty(moduleName);

        if(!moduleExists){
            StyleData.moduleMap[moduleName] = module;
            return true;
        }

        return false;
    }
}