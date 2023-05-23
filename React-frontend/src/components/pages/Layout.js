import { Outlet, Link } from "react-router-dom";
import {NavDropdown, Navbar, Container, Nav} from 'react-bootstrap';

const Layout = () => {
  return (
    <>
      <div>
                <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>
                
                <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand to="/" style={{fontWeight:"bold",fontSize:"50px"}}>Doceas<span style={{color: "green"}}>Y</span></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  
                    <Link to="/about" style={{textDecoration:'none'}} className="nav-link">About</Link>
                    
                  <Link to="/contact"style={{textDecoration:'none'}} className="nav-link" >Contact</Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
              </Navbar.Collapse>
            </Container>
          </Navbar>
          </div>

      <Outlet />
    </>
  )
};

export default Layout;