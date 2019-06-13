import React from 'react';

import CssModule from '../../../../utils/CssModule';

import './Width.scss';

const Width: React.FC = () => {
    return (
        <CssModule cssKey="distributionWidth" title="Distribution/Width">
            <div className="container d-f fw-w distribution-width">
                <div className="w-12"><div className="item ta-c"><span className="purple">(.w-12)</span></div></div>
                <div className="w-11"><div className="item ta-c"><span className="purple">(.w-11)</span></div></div>
                <div className="w-1"><div className="item ta-c"><span className="purple">(.w-1)</span></div></div>
                <div className="w-10"><div className="item ta-c"><span className="purple">(.w-10)</span></div></div>
                <div className="w-2"><div className="item ta-c"><span className="purple">(.w-2)</span></div></div>
                <div className="w-9"><div className="item ta-c"><span className="purple">(.w-9)</span></div></div>
                <div className="w-3"><div className="item ta-c"><span className="purple">(.w-3)</span></div></div>
                <div className="w-8"><div className="item ta-c"><span className="purple">(.w-8)</span></div></div>
                <div className="w-4"><div className="item ta-c"><span className="purple">(.w-4)</span></div></div>
                <div className="w-7"><div className="item ta-c"><span className="purple">(.w-7)</span></div></div>
                <div className="w-5"><div className="item ta-c"><span className="purple">(.w-5)</span></div></div>
                <div className="w-6"><div className="item ta-c"><span className="purple">(.w-6)</span></div></div>
                <div className="w-6"><div className="item ta-c"><span className="purple">(.w-6)</span></div></div>
            </div>
        </CssModule>
    );
}

export default Width;
