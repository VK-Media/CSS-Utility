
import { Action } from 'redux';

export interface Module {
    name: string;
}

export interface ApplicationState {
    selectedModules: Array<string>;
}

export interface AddModule extends Action {
    type: 'addModule';
    module: Module
}

export interface RequestCss extends Action {
    type: 'requestCss';
}

export interface ResetSelectedModules extends Action {
    type: 'resetSelectedModules';
}

export type ApplicationAction =
    | AddModule;