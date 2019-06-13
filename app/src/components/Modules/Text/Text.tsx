import React from 'react';

import CssModule from '../../../utils/CssModule';

const Text: React.FC = () => {
    return (
        <CssModule cssKey="text" title="Text">
            <h2 className="mt-2 ta-c blue">Include this module to get all text classes.</h2>
        </CssModule>
    );
}

export default Text;
