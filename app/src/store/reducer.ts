import produce from 'immer';

import { ApplicationState, ApplicationAction } from './types';

export const initialState: ApplicationState = {
    selectedModules: []
}

const reducer = (state = initialState, action: ApplicationAction) => {
    switch (action.type) {
        case "addModule":
            return produce(state, draft => {
                draft.selectedModules.push(action.module.name);
            });
        default:
            return state;
    }
}

export default reducer;