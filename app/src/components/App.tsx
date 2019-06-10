import React from 'react';

import StatusBar from './StatusBar/StatusBar';
import Modules from './Modules/Modules';
import Navigation from './Navigation/Navigation';

const App: React.FC = () => {
	return (
		<div className="app">
			<Navigation />
			<Modules />
			<StatusBar />
		</div>
	);
}

export default App;
