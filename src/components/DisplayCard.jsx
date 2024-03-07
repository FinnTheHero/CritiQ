import React from 'react';

// Bootstrap components
import Card from 'react-bootstrap/Card';


const DisplayCard = () => {
	return (
		<Card bg="dark" text="white" className='Card'>
			<Card.Img src="logo512.png" className='Image'/>
			<Card.Body style={{textAlign: 'left'}}>
				<Card.Title>Name</Card.Title>
				<Card.Text>
				Some information.
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default DisplayCard;



    