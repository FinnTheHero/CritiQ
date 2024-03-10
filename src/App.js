// Standard Imports
import { Routes, Route } from 'react-router-dom';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// CSS
import './App.css';

// Pages
import Home from './pages/Home';
import Post from './pages/Post';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/Post' element={<Post />} />	
			</Routes>
		</div>
	);
}

export default App;
