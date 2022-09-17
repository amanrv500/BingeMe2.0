import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { logo } from '../assets';
import {useNavigate} from 'react-router-dom';

function NavigationBar() {
  let Navigate = useNavigate();
  return (
    <Navbar bg="black" expand="lg" sticky='top'>
        <Container fluid>
            <Navbar.Brand><img src={logo} onClick={()=>Navigate(`/`)}width="290" height="50" className="mb-0 mt-0 " alt="logo"/></Navbar.Brand>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
            />
            <Button variant="dark">Search</Button>
          </Form>
          </Container>
    </Navbar>
  );
}

export default NavigationBar;
