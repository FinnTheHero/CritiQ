// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import DisplayCard from './components/DisplayCard';

// CSS
import './App.css';
import Hero from './components/Hero';

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
		</div>
	);
}

export default App;
