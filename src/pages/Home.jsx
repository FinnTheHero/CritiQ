// Components
import Hero from '../components/Hero';
import Footer from '../components/Footer';

// Data
import RenderCards from '../db/RenderCards';

function Home() {
	return (
		<div className='App'>
			<Hero />
			
			<RenderCards />

			<Footer />
		</div>
	);
}

export default Home;
