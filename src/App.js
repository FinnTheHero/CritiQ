// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


// Components
import Hero from './components/Hero';
import Footer from './components/Footer';

// Data
import RenderCards from './db/RenderCards';

// CSS
import './App.css';

function App() {
	return (
		<div className='App'>
			<Hero />
			
			<RenderCards />

			<Footer />
		</div>
	);
}

export default App;
