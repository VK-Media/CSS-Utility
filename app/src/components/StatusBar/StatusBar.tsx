import React from 'react';
import { connect } from 'react-redux'

import { requestCss, resetSelectedModules } from '../../store/actions';

import './StatusBar.scss';

type Props = {
    requestCss: () => void;
    resetSelectedModules: () => void;
}

const StatusBar: React.FC<Props> = props => {
    return (
        <div className="status-bar">
            <div className="button reset-modules" onClick={() => props.resetSelectedModules()}><span>Reset</span></div>
            <div className="button download-css" onClick={() => props.requestCss()}><span>Download CSS</span></div>
        </div>
    );
}

export default connect(null, { requestCss, resetSelectedModules })(StatusBar);
