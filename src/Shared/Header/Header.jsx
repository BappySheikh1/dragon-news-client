import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UseContexts';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
  const {user,LogOut}=useContext(AuthContext)
  const handleLogOut=()=>{
    LogOut()
    .then(()=>{

    })
    .catch(error =>console.log(error))
  }

    return (
        <div>
            <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand ><Link to='/'>Dragon News</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              {
                user ? 
                <>
                <span>{user?.displayName}</span>
                <button onClick={handleLogOut}  className='btn btn-outline-success'>Log Out</button>
                </>
                :
                <>
                <Link to='/login'>Log IN</Link>
                <Link to='/register'>Register</Link>
                </>
              }
              
              </Nav.Link>
            <Nav.Link>
              {
              user?.uid ?
              <Image
               style={{height:"30px"}}
                roundedCircle 
                src={user?.photoURL} />
              : 
              <FaUser className='text-dark' />
            }
            </Nav.Link>
          </Nav>
          <div className='d-lg-none'>
            <LeftSideNav />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;