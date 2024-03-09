import React from 'react';

// Bootstrap components
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const DisplayCard = () => {
	return (
		<Card className='Card'>
			<Card.Img src="logo.svg" className='Image'/>
			<Card.Body className='CardBody'>
				<Card.Title className='Title'>Name</Card.Title>
				<Card.Text className='Text'>
				Some information.
				</Card.Text>
				<div className='Extra'>
					<h5 className='Subtitle my-auto'>10 Stars</h5>
					<button className='Button'>More</button>
				</div>
			</Card.Body>
		</Card>
	);
};

export default DisplayCard;
