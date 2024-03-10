import { useEffect, useState } from 'react';

// Components
import DisplayCard from '../components/DisplayCard';

const RenderCards = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('https://api.slingacademy.com/v1/sample-data/blog-posts');
				const jsonData = await response.json();
				setData(jsonData);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);


	return (
		<div className='App'>
			{data.blogs && data.blogs.map(item => (
				<DisplayCard key={item.id} name={item.title} description={item.description}/>
			))}
		</div>
	);
};

export default RenderCards;