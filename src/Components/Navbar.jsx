import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import CritiQLogo from '../Icons/CritiQLogo';

function NavScrollExample() {
	return (
		<Navbar sticky='top' expand="lg" className="Navbar" rounded>
			<Container fluid className='Container'>
				<Navbar.Brand href="/">
					<CritiQLogo width={40} height={40} />
				</Navbar.Brand>
				
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
				<div className='SearchBar'>
					<input 
						type="search"
						placeholder="Search"
						className="Search"
					/>
					<button className='SearchButton'><FontAwesomeIcon icon={faSearch} /></button>
				</div>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavScrollExample;