import { ApplicationState, ApplicationAction } from './types';

export const initialState: ApplicationState = {
    loading: {
        users: false,
    },
    users: [],
}

const reducer = (state = initialState, action: ApplicationAction) => {
    switch (action.type) {
        case "loadUsersRequest":
            return action.payload
        default:
            return state;
    }
}

export default reducer;