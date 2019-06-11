import React from 'react';
import { connect } from 'react-redux';

import { resetSelectedModules } from '../../store/actions';
import { requestCss } from '../../store/effects';
import { ApplicationState } from '../../store/types';

import './StatusBar.scss';

type Props = {
    selectedModules: Array<string>;
    requestCss: () => void;
    resetSelectedModules: () => void;
}

const StatusBar: React.FC<Props> = props => {
    const renderModuleCount = () => {
        const message: string = 'Currently selected modules: ';
        let count: number = 0;

        props.selectedModules.forEach(selectedModule => {
            count++;
        });

        if (count) {
            return <div className="module-count d-f ai-c"><div>{message}<span>{count}</span></div></div>
        }

        return <div className="module-count d-f ai-c"></div>;
    }

    return (
        <div className="status-bar d-f jc-sb ai-s">
            {renderModuleCount()}

            <div className="d-f jc-fe">
                <div
                    className="button d-f jc-c ai-c reset-modules"
                    onClick={() => props.resetSelectedModules()}
                ><span>Reset</span></div>

                <div
                    className="button d-f jc-c ai-c download-css"
                    onClick={() => props.requestCss()}
                ><span>Download CSS</span></div>
            </div>
        </div>
    );
}

const mapStateToProps = (state: ApplicationState) => {
    return {
        selectedModules: state.selectedModules
    }
}

export default connect(mapStateToProps, { requestCss, resetSelectedModules })(StatusBar);
