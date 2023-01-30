import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { logo } from '../assets';
import {useNavigate} from 'react-router-dom';
import { Row } from 'react-bootstrap';

function NavigationBar(){
    const [searchTerm, setSearchTerm] = useState('');
    let Navigate = useNavigate();
    return (
        <Navbar bg="black" className='px-0' sticky='top'>
            <Container className=''>
                <Navbar.Brand>
                    <img src={logo} onClick={()=>Navigate(`/`)}width="290" height="50" className="mb-0 mt-0 " alt="logo"/>
                </Navbar.Brand>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        onChange={(e) =>{setSearchTerm(e.target.value)}}
                    />
                    <Button variant="dark" onClick={(e) =>{
                        e.preventDefault();
                        Navigate(`/search/${searchTerm}`);
                    }}>
                        Search
                    </Button>
                </Form>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
