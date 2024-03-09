import React from 'react';

const Footer = () => {
	return (
		<footer className="Footer">
			<div>
				<ul className="List">
					<li><a className="Link" href="#!">About</a></li>
					<li><a className="Link" href="#!">Contact</a></li>
					<li><a className="Link" href="#!">Terms of Service</a></li>
					<li><a className="Link" href="#!">Privacy Policy</a></li>
				</ul>
				<div className='Rights'>
					<img src="logo.svg" alt="logo" />
					<p className='mx-2'>&copy; {new Date().getFullYear()} CritiQ. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;