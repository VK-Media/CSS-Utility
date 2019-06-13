import React from 'react';

import CssModule from '../../../../utils/CssModule';

import './Offset.scss';

const Offset: React.FC = () => {
    return (
        <CssModule cssKey="distributionOffset" title="Distribution/Offset">
            <div className="container d-f fw-w distribution-offset">
                <div className="w-11 os-1"><div className="item ta-c"><span className="purple">(.os-1)</span></div></div>
                <div className="w-10 os-2"><div className="item ta-c"><span className="purple">(.os-2)</span></div></div>
                <div className="w-9 os-3"><div className="item ta-c"><span className="purple">(.os-3)</span></div></div>
                <div className="w-8 os-4"><div className="item ta-c"><span className="purple">(.os-4)</span></div></div>
                <div className="w-7 os-5"><div className="item ta-c"><span className="purple">(.os-5)</span></div></div>
                <div className="w-6 os-6"><div className="item ta-c"><span className="purple">(.os-6)</span></div></div>
                <div className="w-5 os-7"><div className="item ta-c"><span className="purple">(.os-7)</span></div></div>
                <div className="w-4 os-8"><div className="item ta-c"><span className="purple">(.os-8)</span></div></div>
                <div className="w-3 os-9"><div className="item ta-c"><span className="purple">(.os-9)</span></div></div>
                <div className="w-2 os-10"><div className="item ta-c"><span className="purple">(.os-10)</span></div></div>
                <div className="w-1 os-11"><div className="item ta-c"><span className="purple">(.os-11)</span></div></div>
            </div>
        </CssModule>
    );
}

export default Offset;
