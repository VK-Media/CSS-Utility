import React from 'react';

import CssModule from '../../../utils/CssModule';

const Spacing: React.FC = () => {
    return (
        <CssModule cssKey="spacing" title="Spacing">
            <h2 className="mt-2 ta-c blue">Include this module to get all spacing classes.</h2>
        </CssModule>
    );
}

export default Spacing;
