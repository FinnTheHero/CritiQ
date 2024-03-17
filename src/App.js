// Standard Imports
import { Routes, Route } from 'react-router-dom';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// CSS
import './App.css';

// Pages
import Home from './Pages/Home';
import Post from './Pages/Post';

// Components
import Navbar from './Components/Navbar';

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/post' element={<Post />} />	
			</Routes>
		</div>
	);
}

export default App;
