import { ThunkAction } from 'redux-thunk';
import { ApplicationState, ApplicationAction } from './types';

import { resetSelectedModules } from './actions';
import styleApi from '../apis/styleApi';

type Effect = ThunkAction<any, ApplicationState, any, ApplicationAction>;

export const requestCss = (): Effect => (dispatch, getState) => {
    const selectedModules = getState().selectedModules;
    let data: { [s: string]: number } = {};

    selectedModules.forEach(selectedModule => {
        data[selectedModule] = 1;
    });

    styleApi.post('/css', data)
        .then(response => {
            console.log(response);
            dispatch(resetSelectedModules());
        })
        .catch(e => {
            console.log(e);
        });
};