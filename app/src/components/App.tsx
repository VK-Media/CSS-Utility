import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import StatusBar from './StatusBar/StatusBar';
import Modules from './Modules/Modules';
import Navigation from './Navigation/Navigation';

const App: React.FC = () => {
	return (
		<div className="app">
            <Router>
                <Navigation />
                <Modules />
                <StatusBar />
            </Router>
		</div>
	);
}

export default App;
