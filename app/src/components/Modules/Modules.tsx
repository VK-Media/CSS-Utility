import React from 'react';
import { Route } from 'react-router-dom';

import Styles from './Styles/Styles';
import Display from './Display/Display';
import Flex from './Display/Flex/Flex';
import Distribution from './Distribution/Distribution';
import Width from './Distribution/Width/Width';
import Offset from './Distribution/Offset/Offset';
import Spacing from './Spacing/Spacing';
import Margin from './Spacing/Margin/Margin';
import Padding from './Spacing/Padding/Padding';
import Text from './Text/Text';
import Align from './Text/Align/Align';
import Size from './Text/Size/Size';

import './Modules.scss';

const Modules: React.FC = () => {
    return (
        <div className="modules">
            <Route path="/" exact component={Styles} />
            <Route path="/display" exact component={Display} />
            <Route path="/display/flex" exact component={Flex} />
            <Route path="/distribution" exact component={Distribution} />
            <Route path="/distribution/width" exact component={Width} />
            <Route path="/distribution/offset" exact component={Offset} />
            <Route path="/spacing" exact component={Spacing} />
            <Route path="/spacing/margin" exact component={Margin} />
            <Route path="/spacing/padding" exact component={Padding} />
            <Route path="/text" exact component={Text} />
            <Route path="/text/align" exact component={Align} />
            <Route path="/text/size" exact component={Size} />
        </div>
    );
}

export default Modules;
