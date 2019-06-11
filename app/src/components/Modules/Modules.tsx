import React from 'react';
import { Route } from 'react-router-dom';

import Flex from './Display/Flex/Flex';

import './Modules.scss';

const Modules: React.FC = () => {
    return (
        <div className="modules">
            <Route path="/display/flex" exact component={Flex} />
        </div>
    );
}

export default Modules;
