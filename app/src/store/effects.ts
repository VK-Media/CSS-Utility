import { ThunkAction } from 'redux-thunk';
import { ApplicationState, ApplicationAction } from './types';

import { resetSelectedModules } from './actions';
import styleApi from '../apis/styleApi';

type Effect = ThunkAction<any, ApplicationState, any, ApplicationAction>;

export const requestCss = (): Effect => (dispatch, getState) => {
    const selectedModules = getState().selectedModules;
    let url: string = 'http://localhost:5002/css?';

    selectedModules.forEach(selectedModule => {
        url += `${selectedModule}=1&`;
    });

    url = url.substring(0, url.length - 1);

    window.open(url);
    dispatch(resetSelectedModules());

    /*
    styleApi.get(url)
        .then(response => {
            console.log(response);
            dispatch(resetSelectedModules());
        })
        .catch(e => {
            console.log(e);
        });
        */
};