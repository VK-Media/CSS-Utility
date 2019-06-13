import React from 'react';

import CssModule from '../../../utils/CssModule';

const Styles: React.FC = () => {
    return (
        <CssModule cssKey="styles" title="Styles">
            <h2 className="mt-2 mb-5 ta-c blue">Include this module to get all available classes.</h2>
            <p className="mb-1 ts-3">Many of the classes come with breakpoint classes, which can be used like this:</p>
            <p className="mb-3"><span className="purple">.w-12</span> becomes <span className="purple">.w-md-12</span> if this should only apply from medium breakpoint and up.</p>
            <h5 className="mb-1">Available breakpoints:</h5>
            <p><span className="purple">sm</span>: 576px and up</p>
            <p><span className="purple">md</span>: 768px and up</p>
            <p><span className="purple">lg</span>: 992px and up</p>
            <p className="mb-1"><span className="purple">xl</span>: 1200px and up</p>
            <p className="mb-5">All non-prefixed classes (like <span className="purple">.w-12</span>) work from 0px and up</p>
            <a className="vendor mt-5 ta-c ts-1 d-b" rel="noopener noreferrer" href="https://vkmedia.dk" target="_blank">A tool by VK Media</a>
        </CssModule>
    );
}

export default Styles;
