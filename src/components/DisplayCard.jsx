import React from 'react';

// Bootstrap components
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const DisplayCard = (props) => {
	return (
		<Card className='Card'>
			<Card.Img src="logo.svg" className='Image'/>
			<Card.Body className='CardBody'>
				<Card.Title className='Title'>{props.name}</Card.Title>
				
				<Card.Text className='Text Description'>
					{props.description}
				</Card.Text>
				
				<div className='Extra'>
					<h5 className='Link my-auto d-flex justify-content-center align-items-center'>10 <img className="Star mx-2" src="star.svg" alt="star"/></h5>
					<button className='Button'>More</button>
				</div>
			</Card.Body>
		</Card>
	);
};

export default DisplayCard;
