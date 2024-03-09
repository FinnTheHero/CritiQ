// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import DisplayCard from './components/DisplayCard';
import Hero from './components/Hero';
import Footer from './components/Footer';

// CSS
import './App.css';

function App() {
	return (
		<div className="App">
			<Hero />
			<DisplayCard />
			<DisplayCard />
			<DisplayCard />
			<DisplayCard />
			<DisplayCard />
			<DisplayCard />
			<DisplayCard />
			<DisplayCard />
			<Footer />
		</div>
	);
}

export default App;
