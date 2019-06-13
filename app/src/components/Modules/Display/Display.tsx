import React from 'react';

import CssModule from '../../../utils/CssModule';

const Display: React.FC = () => {
    return (
        <CssModule cssKey="display" title="Display">
            <h2 className="mt-2 ta-c blue">Include this module to get all display classes.</h2>
        </CssModule>
    );
}

export default Display;
