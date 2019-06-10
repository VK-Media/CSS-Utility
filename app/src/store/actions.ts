import { Module, AddModule, RequestCss, ResetSelectedModules } from './types';

export const addModule = (module: Module): AddModule => ({
    type: 'addModule',
    module: module
});

export const requestCss = (): RequestCss => ({
    type: 'requestCss'
});

export const resetSelectedModules = (): ResetSelectedModules => ({
    type: 'resetSelectedModules'
});