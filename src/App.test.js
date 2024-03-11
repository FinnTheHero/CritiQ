import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

import App from './App';

test('renders app', async () => {
	render(
		<Router>
			<App />
		</Router>
	);
});
