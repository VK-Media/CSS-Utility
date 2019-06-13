import React from 'react';

import CssModule from '../../../../utils/CssModule';
import CssClass from '../../../../utils/CssClass';

import './Flex.scss';

const Flex: React.FC = () => {
    return (
        <CssModule className="display-flex" cssKey="displayFlex" title="Display/Flex" selector=".d-f">
            <h2 className="mb-2">Justify Content</h2>
            <CssClass title="Flex start" selector=".jc-fs" className="container mb-3 d-f jc-fs" dummies={3} />
            <CssClass title="Flex end" selector=".jc-fe" className="container mb-3 d-f jc-fe" dummies={3} />
            <CssClass title="Center" selector=".jc-c" className="container mb-3 d-f jc-c" dummies={3} />
            <CssClass title="Space around" selector=".jc-sa" className="container mb-3 d-f jc-sa" dummies={3} />
            <CssClass title="Space between" selector=".jc-sb" className="container mb-3 d-f jc-sb" dummies={3} />

            <h2 className="mb-2">Align Items</h2>
            <CssClass title="Strech" selector=".ai-s" className="container height-2 mb-3 d-f ai-s" dummies={3} />
            <CssClass title="Center" selector=".ai-c" className="container height-2 mb-3 d-f ai-c" dummies={3} />
            <CssClass title="Flex start" selector=".ai-fs" className="container height-2 mb-3 d-f ai-fs" dummies={3} />
            <CssClass title="Flex end" selector=".ai-fe" className="container height-2 mb-3 d-f ai-fe" dummies={3} />
            <CssClass title="Baseline" selector=".ai-b" className="container height-2 mb-3 d-f ai-b" dummies={3} />

            <h2 className="mb-2">Flex wrap</h2>
            <CssClass title="No wrap" selector=".fw-nw" className="container mb-3 d-f fw-nw" dummies={5} dummyClasses={['width-half']} />
            <CssClass title="Wrap" selector=".fw-w" className="container mb-3 d-f fw-w" dummies={5} dummyClasses={['width-half']} />
            <CssClass title="Wrap reverse" selector=".fw-wr" className="container mb-3 d-f fw-wr" dummies={5} dummyClasses={['width-half']} />
        </CssModule>
    );
}

export default Flex;
