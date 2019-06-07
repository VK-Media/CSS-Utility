interface Module { path: string; dependencies?: Array<string>, parents?: Array<string> }
interface ModuleMap { [s: string]: Module; }

export default class StyleData {
    protected static rootFolder: string = '/styles/';

    // This should definitely be saved in a database instead...
    protected static moduleMap: ModuleMap = {
        styles: {
            path: 'styles'
        },
        essential: {
            path: 'essential'
        },
        display: {
            path: 'display/display',
            dependencies: ['displayEssential'],
            parents: ['styles']
        },
        displayEssential: {
            path: 'display/essential'
        },
        displayFlex: {
            path: 'display/flex/flex', 
            dependencies: ['displayEssential'],
            parents: ['styles', 'display']
        },
        distribution: {
            path: 'distribution/distribution',
            parents: ['styles']
        },
        distributionOffset: {
            path: 'distribution/offset/offset',
            parents: ['styles', 'distribution']
        },
        distributionWidth: {
            path: 'distribution/width/width',
            parents: ['styles', 'distribution']
        },
        spacing: {
            path: 'spacing/spacing',
            parents: ['styles']
        },
        spacingMargin: {
            path: 'spacing/margin/margin',
            parents: ['styles', 'spacing']
        },
        spacingPadding: {
            path: 'spacing/padding/padding',
            parents: ['styles', 'spacing']
        },
        text: {
            path: 'text/text',
            parents: ['styles']
        },
        textAlign: {
            path: 'text/align/align',
            parents: ['styles', 'text']
        },
        textSize: {
            path: 'text/size/size',
            parents: ['styles', 'text']
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