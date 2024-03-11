import { useEffect, useState } from 'react';

// Bootstrap components
import Card from 'react-bootstrap/Card';

import { fetchData } from '../db/RenderCards';

function Post(props) {
	const [blogs, setBlogs] = useState('');
	
	useEffect(() => {
		fetchData().then((res) => {
			setBlogs(res.blogs);
		}).catch((error) => {
			console.error('Error fetching data:', error);
		})
	}, []);

	return (
		<div className='Post'>
			<Card className='PostCard'>
				<Card.Img src="logo.svg" className='Image'/>
				<Card.Body className='PostCardBody'>
					<Card.Title className='PostCardTitle Title'>
						{blogs[0] && blogs[0].title}
						<h4 className='Link my-auto d-flex justify-content-center align-items-center'>10 <img className="Star mx-2" src="star.svg" alt="star"/></h4>
					</Card.Title>
					
					<Card.Text className='Text Description'>
						{blogs[0] && blogs[0].description}
					</Card.Text>
					
					
				</Card.Body>
				<p className='Text PostCardText Description'>
					{blogs[0] && blogs[0].content_text}
				</p>
			</Card>
			
		</div>
	);
}

export default Post;
