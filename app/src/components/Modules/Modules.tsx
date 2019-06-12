import React from 'react';
import { Route } from 'react-router-dom';

import Flex from './Display/Flex/Flex';
import Width from './Distribution/Width/Width';

import './Modules.scss';

const Modules: React.FC = () => {
    return (
        <div className="modules">
            <Route path="/display/flex" exact component={Flex} />
            <Route path="/distribution/width" exact component={Width} />
        </div>
    );
}

export default Modules;
