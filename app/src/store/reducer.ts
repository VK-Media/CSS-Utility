import produce from 'immer';

import { ApplicationState, ApplicationAction } from './types';

export const initialState: ApplicationState = {
    selectedModules: []
}

const reducer = (state = initialState, action: ApplicationAction) => {
    switch (action.type) {
        case "addModule":
            return produce(state, draft => {
                const moduleToPush = action.module.name;

                if (state.selectedModules.indexOf(moduleToPush) === -1) {
                    draft.selectedModules.push(action.module.name);
                }
            });
        case "resetSelectedModules":
            return produce(state, draft => {
                draft.selectedModules = [];
            });
        default:
            return state;
    }
}

export default reducer;