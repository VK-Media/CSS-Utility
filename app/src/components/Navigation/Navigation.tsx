import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';

const Navigation: React.FC = () => {
    return (
        <div className="navigation d-f">
            <NavLink activeClassName="active" className="w-12 d-b p-1" exact to="/">Home</NavLink>
            <NavLink activeClassName="active" className="w-12 d-b p-1" exact to="/display">Display</NavLink>
            <NavLink activeClassName="active" className="w-12 d-b p-1 pl-2" exact to="/display/flex">Flex</NavLink>
            <NavLink activeClassName="active" className="w-12 d-b p-1" exact to="/distribution">Distribution</NavLink>
            <NavLink activeClassName="active" className="w-12 d-b p-1 pl-2" exact to="/distribution/width">Width</NavLink>
            <NavLink activeClassName="active" className="w-12 d-b p-1 pl-2" exact to="/distribution/offset">Offset</NavLink>
            <NavLink activeClassName="active" className="w-12 d-b p-1" exact to="/spacing">Spacing</NavLink>
            <NavLink activeClassName="active" className="w-12 d-b p-1 pl-2" exact to="/spacing/margin">Margin</NavLink>
            <NavLink activeClassName="active" className="w-12 d-b p-1 pl-2" exact to="/spacing/padding">Padding</NavLink>
            <NavLink activeClassName="active" className="w-12 d-b p-1" exact to="/text">Text</NavLink>
            <NavLink activeClassName="active" className="w-12 d-b p-1 pl-2" exact to="/text/size">Size</NavLink>
            <NavLink activeClassName="active" className="w-12 d-b p-1 pl-2" exact to="/text/align">Align</NavLink>
        </div>
    );
}

export default Navigation;
