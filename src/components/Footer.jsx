import React from 'react';

const Footer = () => {
	return (
		<footer className="Footer">
			<div>
				<ul className="List">
					<li className="List-item"><a className="Link" href="#!">About</a></li>
					<li className="List-item"><a className="Link" href="#!">Contact</a></li>
					<li className="List-item"><a className="Link" href="#!">Terms of Service</a></li>
					<li className="List-item"><a className="Link" href="#!">Privacy Policy</a></li>
				</ul>
				<p className="Title">&copy; {new Date().getFullYear()} CritiQ. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;