import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function NavScrollExample() {
	return (
		<Navbar expand="lg" className="Navbar" rounded>
			<Container className='Container'>
				<Navbar.Brand href="/"><img style={{width: '40px', height: '40px'}} src="logo.svg" alt="logo" /></Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" className='Toggle'/>
				<Navbar.Collapse id="navbarScroll">
				<Nav
					className="me-auto my-2 my-lg-0"
					style={{ maxHeight: '100px' }}
					navbarScroll
				>
					<Nav.Link className='Link' href="/">Home</Nav.Link>
					<Nav.Link className='Link' href="/post">Post</Nav.Link>
				</Nav>
				<input 
					type="search"
					placeholder="Search"
					className="Search"
				/>
				<button className='SearchButton'><FontAwesomeIcon icon={faSearch} /></button>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavScrollExample;