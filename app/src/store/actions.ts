import { Module, AddModule, ResetSelectedModules } from './types';

export const addModule = (module: Module): AddModule => ({
    type: 'addModule',
    module: module
});

export const resetSelectedModules = (): ResetSelectedModules => ({
    type: 'resetSelectedModules'
});