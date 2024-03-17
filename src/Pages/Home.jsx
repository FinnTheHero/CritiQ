// Components
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';

// Data
import RenderCards from '../DB/RenderCards';

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
